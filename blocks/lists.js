/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview List blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.lists');

goog.require('Blockly.Blocks');

Blockly.Colours = Blockly.Colours || {};

Blockly.Colours.LIST_MAIN = '#E7009D';
Blockly.Colours.LIST_TRIM = '#B6007C';

Blockly.Blocks['lists_list0'] = {
  /**
   * Block for creating an empty list.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL);
    this.setColours(Blockly.Colours.LIST_MAIN, Blockly.Colours.LIST_TRIM);
    this.setOutput(true, 'Array');
    this.appendDummyInput()
        .appendField('[ ]');
    this.setTooltip(Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP);
    this.setInputsInline(true);
    this.itemCount_ = 0;
  }
};

Blockly.__list_constructor = function(nitems) {
  return {
    init: function() {
      this.setColours(Blockly.Colours.LIST_MAIN, Blockly.Colours.LIST_TRIM);
      this.appendValueInput('ITEM0')
        .appendField('[');
      for(var i = 1; i < nitems; ++i)
        this.appendValueInput('ITEM' + i)
          .appendField(',');
      this.appendDummyInput()
        .appendField(']');
      this.setOutput(true, 'Array');
      this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
      this.setInputsInline(true);
      this.itemCount_ = nitems;
    }
  }
}

for(Blockly._i = 1; Blockly._i <= 5; ++Blockly._i)
  Blockly.Blocks['lists_list' + Blockly._i] = Blockly.__list_constructor(Blockly._i);
delete Blockly._i;

Blockly.Blocks['lists_create_with'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(Blockly.Colours.LIST_MAIN, Blockly.Colours.LIST_TRIM);
    this.appendValueInput('ADD0')
        .appendField(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH);
    this.appendValueInput('ADD1');
    this.appendValueInput('ADD2');
    this.setOutput(true, 'Array');
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
    this.itemCount_ = 3;
  },
  /**
   * Create XML to represent list inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    for (var x = 0; x < this.itemCount_; x++) {
      this.removeInput('ADD' + x);
    }
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    for (var x = 0; x < this.itemCount_; x++) {
      var input = this.appendValueInput('ADD' + x);
      if (x == 0) {
        input.appendField(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH);
      }
    }
    if (this.itemCount_ == 0) {
      this.appendDummyInput('EMPTY')
          .appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE);
    }
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock =
        Blockly.Block.obtain(workspace, 'lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.itemCount_; x++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'lists_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    // Disconnect all input blocks and remove all inputs.
    if (this.itemCount_ == 0) {
      this.removeInput('EMPTY');
    } else {
      for (var x = this.itemCount_ - 1; x >= 0; x--) {
        this.removeInput('ADD' + x);
      }
    }
    this.itemCount_ = 0;
    // Rebuild the block's inputs.
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    while (itemBlock) {
      var input = this.appendValueInput('ADD' + this.itemCount_);
      if (this.itemCount_ == 0) {
        input.appendField(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH);
      }
      // Reconnect any child blocks.
      if (itemBlock.valueConnection_) {
        input.connection.connect(itemBlock.valueConnection_);
      }
      this.itemCount_++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    if (this.itemCount_ == 0) {
      this.appendDummyInput('EMPTY')
          .appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var x = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + x);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      x++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  }
};

Blockly.Blocks['lists_create_with_container'] = {
  /**
   * Mutator block for list container.
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(Blockly.Colours.LIST_MAIN, Blockly.Colours.LIST_TRIM);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['lists_create_with_item'] = {
  /**
   * Mutator bolck for adding items.
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(Blockly.Colours.LIST_MAIN, Blockly.Colours.LIST_TRIM);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['lists_repeat'] = {
  /**
   * Block for creating a list with one element repeated.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.LISTS_REPEAT_HELPURL);
    this.setColours(Blockly.Colours.LIST_MAIN, Blockly.Colours.LIST_TRIM);
    this.setOutput(true, 'Array');
    this.interpolateMsg(Blockly.Msg.LISTS_REPEAT_TITLE,
                        ['ITEM', null, Blockly.ALIGN_RIGHT],
                        ['NUM', 'Number', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setTooltip(Blockly.Msg.LISTS_REPEAT_TOOLTIP);
  }
};

Blockly.Blocks['lists_length'] = {
  /**
   * Block for list length.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.LISTS_LENGTH_HELPURL);
    this.setColours(Blockly.Colours.LIST_MAIN, Blockly.Colours.LIST_TRIM);
    this.interpolateMsg(Blockly.Msg.LISTS_LENGTH_TITLE,
                        ['VALUE', ['Array', 'String'], Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.LISTS_LENGTH_TOOLTIP);
  }
};

Blockly.Blocks['lists_isEmpty'] = {
  /**
   * Block for is the list empty?
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.LISTS_IS_EMPTY_HELPURL);
    this.setColours(Blockly.Colours.LIST_MAIN, Blockly.Colours.LIST_TRIM);
    this.interpolateMsg(Blockly.Msg.LISTS_IS_EMPTY_TITLE,
                        ['VALUE', ['Array', 'String'], Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT)
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.LISTS_TOOLTIP);
  }
};

Blockly.Blocks['lists_indexOf'] = {
  /**
   * Block for finding an item in the list.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [[Blockly.Msg.LISTS_INDEX_OF_FIRST, 'FIRST'],
         [Blockly.Msg.LISTS_INDEX_OF_LAST, 'LAST']];
    this.setHelpUrl(Blockly.Msg.LISTS_INDEX_OF_HELPURL);
    this.setColours(Blockly.Colours.LIST_MAIN, Blockly.Colours.LIST_TRIM);
    this.setOutput(true, 'Number');
    this.appendValueInput('FIND')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'END');
    this.appendValueInput('VALUE')
        .setCheck('Array')
        .appendField(Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.LISTS_INDEX_OF_TOOLTIP);
  }
};

Blockly.Blocks['lists_getIndex'] = {
  /**
   * Block for getting element at index.
   * @this Blockly.Block
   */
  init: function() {
    var MODE =
        [[Blockly.Msg.LISTS_GET_INDEX_GET, 'GET'],
         [Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE, 'GET_REMOVE'],
         [Blockly.Msg.LISTS_GET_INDEX_REMOVE, 'REMOVE']];
    this.WHERE_OPTIONS =
        [[Blockly.Msg.LISTS_GET_INDEX_FROM_START, 'FROM_START'],
         [Blockly.Msg.LISTS_GET_INDEX_FROM_END, 'FROM_END'],
         [Blockly.Msg.LISTS_GET_INDEX_FIRST, 'FIRST'],
         [Blockly.Msg.LISTS_GET_INDEX_LAST, 'LAST'],
         [Blockly.Msg.LISTS_GET_INDEX_RANDOM, 'RANDOM']];
    this.setHelpUrl(Blockly.Msg.LISTS_GET_INDEX_HELPURL);
    this.setColours(Blockly.Colours.LIST_MAIN, Blockly.Colours.LIST_TRIM);
    var modeMenu = new Blockly.FieldDropdown(MODE, function(value) {
      var isStatement = (value == 'REMOVE');
      this.sourceBlock_.updateStatement_(isStatement);
    });
    this.appendValueInput('VALUE')
        .setCheck('Array')
        .appendField(Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST);
    this.appendDummyInput()
        .appendField(modeMenu, 'MODE')
        .appendField('', 'SPACE');
    this.appendDummyInput('AT');
    if (Blockly.Msg.LISTS_GET_INDEX_TAIL) {
      this.appendDummyInput('TAIL')
          .appendField(Blockly.Msg.LISTS_GET_INDEX_TAIL);
    }
    this.setInputsInline(true);
    this.setOutput(true);
    this.updateAt_(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var combo = thisBlock.getFieldValue('MODE') + '_' +
          thisBlock.getFieldValue('WHERE');
      return Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_' + combo];
    });
  },
  /**
   * Create XML to represent whether the block is a statement or a value.
   * Also represent whether there is an 'AT' input.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var isStatement = !this.outputConnection;
    container.setAttribute('statement', isStatement);
    var isAt = this.getInput('AT').type == Blockly.INPUT_VALUE;
    container.setAttribute('at', isAt);
    return container;
  },
  /**
   * Parse XML to restore the 'AT' input.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    // Note: Until January 2013 this block did not have mutations,
    // so 'statement' defaults to false and 'at' defaults to true.
    var isStatement = (xmlElement.getAttribute('statement') == 'true');
    this.updateStatement_(isStatement);
    var isAt = (xmlElement.getAttribute('at') != 'false');
    this.updateAt_(isAt);
  },
  /**
   * Switch between a value block and a statement block.
   * @param {boolean} newStatement True if the block should be a statement.
   *     False if the block should be a value.
   * @private
   * @this Blockly.Block
   */
  updateStatement_: function(newStatement) {
    var oldStatement = !this.outputConnection;
    if (newStatement != oldStatement) {
      this.unplug(true, true);
      if (newStatement) {
        this.setOutput(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
      } else {
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setOutput(true);
      }
    }
  },
  /**
   * Create or delete an input for the numeric index.
   * @param {boolean} isAt True if the input should exist.
   * @private
   * @this Blockly.Block
   */
  updateAt_: function(isAt) {
    // Destroy old 'AT' and 'ORDINAL' inputs.
    this.removeInput('AT');
    this.removeInput('ORDINAL', true);
    // Create either a value 'AT' input or a dummy input.
    if (isAt) {
      this.appendValueInput('AT').setCheck('Number');
      if (Blockly.Msg.ORDINAL_NUMBER_SUFFIX) {
        this.appendDummyInput('ORDINAL')
            .appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX);
      }
    } else {
      this.appendDummyInput('AT');
    }
    var menu = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function(value) {
      var newAt = (value == 'FROM_START') || (value == 'FROM_END');
      // The 'isAt' variable is available due to this function being a closure.
      if (newAt != isAt) {
        var block = this.sourceBlock_;
        block.updateAt_(newAt);
        // This menu has been destroyed and replaced.  Update the replacement.
        block.setFieldValue(value, 'WHERE');
        return null;
      }
      return undefined;
    });
    this.getInput('AT').appendField(menu, 'WHERE');
    if (Blockly.Msg.LISTS_GET_INDEX_TAIL) {
      this.moveInputBefore('TAIL', null);
    }
  }
};

Blockly.Blocks['lists_subscript'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.TEXT_CHARAT_HELPURL);
    this.setColours(Blockly.Colours.LIST_MAIN, Blockly.Colours.LIST_TRIM);
    this.setOutput(true);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LIST_SUBSCRIPT_TITLE);
    this.appendValueInput('INDEX')
        .setCheck('Number');
    this.appendDummyInput()
        .appendField(Blockly.Msg.LIST_SUBSCRIPT_FROM_LIST);
    this.appendValueInput('VALUE')
        .setCheck('Array');
    if(Blockly.Msg.LIST_SUBSCRIPT_TAIL) {
      this.appendDummyInput()
          .appendField(Blockly.Msg.LIST_SUBSCRIPT_TAIL);
    }
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.TEXT_CHARAT_TOOLTIP);
  }
};

Blockly.Blocks['lists_slice'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.TEXT_CHARAT_HELPURL);
    this.setColours(Blockly.Colours.LIST_MAIN, Blockly.Colours.LIST_TRIM);
    this.setOutput(true);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LIST_SLICE_TITLE);
    this.appendValueInput('START')
        .setCheck('Number');
    this.appendDummyInput()
        .appendField(Blockly.Msg.LIST_SLICE_SEPARATOR);
    this.appendValueInput('END')
        .setCheck('Number');
    this.appendDummyInput()
        .appendField(Blockly.Msg.LIST_SLICE_FROM);
    this.appendValueInput('VALUE')
        .setCheck('Array');
    if(Blockly.Msg.LIST_SLICE_TAIL) {
      this.appendDummyInput()
          .appendField(Blockly.Msg.LIST_SLICE_TAIL);
    }
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.TEXT_CHARAT_TOOLTIP);
  }
};


Blockly.Blocks['lists_setIndex'] = {
  /**
   * Block for setting the element at index.
   * @this Blockly.Block
   */
  init: function() {
    var MODE =
        [[Blockly.Msg.LISTS_SET_INDEX_SET, 'SET'],
         [Blockly.Msg.LISTS_SET_INDEX_INSERT, 'INSERT']];
    this.WHERE_OPTIONS =
        [[Blockly.Msg.LISTS_GET_INDEX_FROM_START, 'FROM_START'],
         [Blockly.Msg.LISTS_GET_INDEX_FROM_END, 'FROM_END'],
         [Blockly.Msg.LISTS_GET_INDEX_FIRST, 'FIRST'],
         [Blockly.Msg.LISTS_GET_INDEX_LAST, 'LAST'],
         [Blockly.Msg.LISTS_GET_INDEX_RANDOM, 'RANDOM']];
    this.setHelpUrl(Blockly.Msg.LISTS_SET_INDEX_HELPURL);
    this.setColours(Blockly.Colours.LIST_MAIN, Blockly.Colours.LIST_TRIM);
    this.appendValueInput('LIST')
        .setCheck('Array')
        .appendField(Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(MODE), 'MODE')
        .appendField('', 'SPACE');
    this.appendDummyInput('AT');
    this.appendValueInput('TO')
        .appendField(Blockly.Msg.LISTS_SET_INDEX_INPUT_TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LISTS_SET_INDEX_TOOLTIP);
    this.updateAt_(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var combo = thisBlock.getFieldValue('MODE') + '_' +
          thisBlock.getFieldValue('WHERE');
      return Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_' + combo];
    });
  },
  /**
   * Create XML to represent whether there is an 'AT' input.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var isAt = this.getInput('AT').type == Blockly.INPUT_VALUE;
    container.setAttribute('at', isAt);
    return container;
  },
  /**
   * Parse XML to restore the 'AT' input.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    // Note: Until January 2013 this block did not have mutations,
    // so 'at' defaults to true.
    var isAt = (xmlElement.getAttribute('at') != 'false');
    this.updateAt_(isAt);
  },
  /**
   * Create or delete an input for the numeric index.
   * @param {boolean} isAt True if the input should exist.
   * @private
   * @this Blockly.Block
   */
  updateAt_: function(isAt) {
    // Destroy old 'AT' and 'ORDINAL' input.
    this.removeInput('AT');
    this.removeInput('ORDINAL', true);
    // Create either a value 'AT' input or a dummy input.
    if (isAt) {
      this.appendValueInput('AT').setCheck('Number');
      if (Blockly.Msg.ORDINAL_NUMBER_SUFFIX) {
        this.appendDummyInput('ORDINAL')
            .appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX);
      }
    } else {
      this.appendDummyInput('AT');
    }
    var menu = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function(value) {
      var newAt = (value == 'FROM_START') || (value == 'FROM_END');
      // The 'isAt' variable is available due to this function being a closure.
      if (newAt != isAt) {
        var block = this.sourceBlock_;
        block.updateAt_(newAt);
        // This menu has been destroyed and replaced.  Update the replacement.
        block.setFieldValue(value, 'WHERE');
        return null;
      }
      return undefined;
    });
    this.moveInputBefore('AT', 'TO');
    if (this.getInput('ORDINAL')) {
      this.moveInputBefore('ORDINAL', 'TO');
    }

    this.getInput('AT').appendField(menu, 'WHERE');
  }
};

Blockly.Blocks['lists_getSublist'] = {
  /**
   * Block for getting sublist.
   * @this Blockly.Block
   */
  init: function() {
    this.WHERE_OPTIONS_1 =
        [[Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START, 'FROM_START'],
         [Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END, 'FROM_END'],
         [Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST, 'FIRST']];
    this.WHERE_OPTIONS_2 =
        [[Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START, 'FROM_START'],
         [Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END, 'FROM_END'],
         [Blockly.Msg.LISTS_GET_SUBLIST_END_LAST, 'LAST']];
    this.setHelpUrl(Blockly.Msg.LISTS_GET_SUBLIST_HELPURL);
    this.setColours(Blockly.Colours.LIST_MAIN, Blockly.Colours.LIST_TRIM);
    this.appendValueInput('LIST')
        .setCheck('Array')
        .appendField(Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST);
    this.appendDummyInput('AT1');
    this.appendDummyInput('AT2');
    if (Blockly.Msg.LISTS_GET_SUBLIST_TAIL) {
      this.appendDummyInput('TAIL')
          .appendField(Blockly.Msg.LISTS_GET_SUBLIST_TAIL);
    }
    this.setInputsInline(true);
    this.setOutput(true, 'Array');
    this.updateAt_(1, true);
    this.updateAt_(2, true);
    this.setTooltip(Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP);
  },
  /**
   * Create XML to represent whether there are 'AT' inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var isAt1 = this.getInput('AT1').type == Blockly.INPUT_VALUE;
    container.setAttribute('at1', isAt1);
    var isAt2 = this.getInput('AT2').type == Blockly.INPUT_VALUE;
    container.setAttribute('at2', isAt2);
    return container;
  },
  /**
   * Parse XML to restore the 'AT' inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var isAt1 = (xmlElement.getAttribute('at1') == 'true');
    var isAt2 = (xmlElement.getAttribute('at2') == 'true');
    this.updateAt_(1, isAt1);
    this.updateAt_(2, isAt2);
  },
  /**
   * Create or delete an input for a numeric index.
   * This block has two such inputs, independant of each other.
   * @param {number} n Specify first or second input (1 or 2).
   * @param {boolean} isAt True if the input should exist.
   * @private
   * @this Blockly.Block
   */
  updateAt_: function(n, isAt) {
    // Create or delete an input for the numeric index.
    // Destroy old 'AT' and 'ORDINAL' inputs.
    this.removeInput('AT' + n);
    this.removeInput('ORDINAL' + n, true);
    // Create either a value 'AT' input or a dummy input.
    if (isAt) {
      this.appendValueInput('AT' + n).setCheck('Number');
      if (Blockly.Msg.ORDINAL_NUMBER_SUFFIX) {
        this.appendDummyInput('ORDINAL' + n)
            .appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX);
      }
    } else {
      this.appendDummyInput('AT' + n);
    }
    var menu = new Blockly.FieldDropdown(this['WHERE_OPTIONS_' + n],
        function(value) {
      var newAt = (value == 'FROM_START') || (value == 'FROM_END');
      // The 'isAt' variable is available due to this function being a closure.
      if (newAt != isAt) {
        var block = this.sourceBlock_;
        block.updateAt_(n, newAt);
        // This menu has been destroyed and replaced.  Update the replacement.
        block.setFieldValue(value, 'WHERE' + n);
        return null;
      }
      return undefined;
    });
    this.getInput('AT' + n)
        .appendField(menu, 'WHERE' + n);
    if (n == 1) {
      this.moveInputBefore('AT1', 'AT2');
      if (this.getInput('ORDINAL1')) {
        this.moveInputBefore('ORDINAL1', 'AT2');
      }
    }
    if (Blockly.Msg.LISTS_GET_SUBLIST_TAIL) {
      this.moveInputBefore('TAIL', null);
    }
  }
};

Blockly.Blocks['lists_subscript_set'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColours('#666666', '#000000');
    this.interpolateMsg(
        // TODO: Combine these messages instead of using concatenation.
        Blockly.Msg.VARIABLES_SET_TITLE + ' %1 item [ %2 ] ' +
        Blockly.Msg.VARIABLES_SET_TAIL + ' %3',
        ['LIST', 'Array'],
        ['INDEX', 'Number'],
        ['VALUE', null, Blockly.ALIGN_RIGHT],
        Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
  }
};

Blockly.Blocks['lists_sort'] = {
  /**
   * Block for print statement with a single argument.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.LISTS_HELPURL);
    this.setColours('#900090', '#540054');
    this.interpolateMsg(Blockly.Msg.LISTS_SORT_TITLE,
                        ['LIST', 'Array', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LISTS_SORT_TOOLTIP);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['lists_reverse'] = {
  /**
   * Block for print statement with a single argument.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.LISTS_HELPURL);
    this.setColours('#900090', '#540054');
    this.interpolateMsg(Blockly.Msg.LISTS_REVERSE_TITLE,
                        ['LIST', 'Array', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LISTS_REVERSE_TOOLTIP);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['lists_append'] = {
  /**
   * Block for print statement with a single argument.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.LISTS_HELPURL);
    this.setColours('#900090', '#540054');
    this.interpolateMsg(Blockly.Msg.LISTS_APPEND_TITLE,
                        ['VALUE', null, Blockly.ALIGN_RIGHT],
                        ['LIST', 'Array', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LISTS_APPEND_TOOLTIP);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['lists_join'] = {
  /**
   * Block for print statement with a single argument.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.LISTS_HELPURL);
    this.setColours('#00aa00', '#007a00');
    this.setOutput(true, 'String');
    this.interpolateMsg(Blockly.Msg.LISTS_JOIN_TITLE,
                        ['LIST', 'Array', Blockly.ALIGN_RIGHT],
                        ['SEP', 'String', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setTooltip(Blockly.Msg.LISTS_JOIN_TOOLTIP);
    this.setInputsInline(true);
  }
};
