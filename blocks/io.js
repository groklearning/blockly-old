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
 * @fileoverview Text blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.io');

goog.require('Blockly.Blocks');

Blockly.Blocks['text_prompt'] = {
  /**
   * Block for prompt function.
   * @this Blockly.Block
   */
  init: function() {
    var TYPES =
      [[Blockly.Msg.TEXT_PROMPT_TYPE_TEXT, 'TEXT'],
       [Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER, 'NUMBER'],
       [Blockly.Msg.TEXT_PROMPT_TYPE_FLOAT, 'FLOAT']];
    // Assign 'this' to a variable for use in the closure below.
    var thisBlock = this;
    this.setHelpUrl(Blockly.Msg.TEXT_PROMPT_HELPURL);
    this.setColours('#900090', '#540054');
    var dropdown = new Blockly.FieldDropdown(TYPES, function(newOp) {
      if (newOp == 'NUMBER') {
        thisBlock.changeOutput('Number');
      } else if (newOp == 'FLOAT') {
        thisBlock.changeOutput('Float');
      } else {
        thisBlock.changeOutput('String');
      }
    });
    this.appendDummyInput()
        .appendField(dropdown, 'TYPE')
        .appendField(this.newQuote_(true))
        .appendField(new Blockly.FieldTextInput(''), 'TEXT')
        .appendField(this.newQuote_(false));
    this.setOutput(true, 'String');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return (thisBlock.getFieldValue('TYPE') == 'TEXT') ?
        Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT :
        Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER;
    });
  },
  /**
   * Create an image of an open or closed quote.
   * @param {boolean} open True if open quote, false if closed.
   * @return {!Blockly.FieldImage} The field image of the quote.
   * @private
   */
  newQuote_: function(open) {
    if (open == Blockly.RTL) {
      var file = 'quote1.png';
    } else {
      var file = 'quote0.png';
    }
    return new Blockly.FieldImage(Blockly.pathToBlockly + 'media/' + file,
                                  12, 12, '"');
  }
};

Blockly.Blocks['io_input'] = {
  /**
   * Block for prompt function.
   * @this Blockly.Block
   */
  init: function() {
    var TYPES =
        [[Blockly.Msg.IO_INPUT_TYPE_TEXT, 'TEXT'],
         [Blockly.Msg.IO_INPUT_TYPE_NUMBER, 'NUMBER'],
         [Blockly.Msg.TEXT_PROMPT_TYPE_FLOAT, 'FLOAT']];
    // Assign 'this' to a variable for use in the closure below.
    var thisBlock = this;
    this.setHelpUrl(Blockly.Msg.IO_INPUT_HELPURL);
    this.setColours('#900090', '#540054');
    var dropdown = new Blockly.FieldDropdown(TYPES, function(newOp) {
      if (newOp == 'NUMBER') {
        thisBlock.changeOutput('Number');
      } else if (newOp == 'FLOAT') {
        thisBlock.changeOutput('Float');
      } else {
        thisBlock.changeOutput('String');
      }
    });
    this.appendDummyInput()
        .appendField(dropdown, 'TYPE');
    this.appendValueInput('TEXT')
        .setCheck('String');
    this.setOutput(true, 'String');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var newOp = thisBlock.getFieldValue('TYPE');
      if (newOp == 'NUMBER') {
        return Blockly.Msg.IO_INPUT_TOOLTIP_NUMBER;
      } else if (newOp == 'FLOAT') {
        return Blockly.Msg.IO_INPUT_TOOLTIP_FLOAT;
      } else {
        return Blockly.Msg.IO_INPUT_TOOLTIP_TEXT;
      }
    });
    this.setInputsInline(true);
  }
};


Blockly.Blocks['text_print0'] = {
  /**
   * Block for print statement without any arguments.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.IO_PRINT_HELPURL);
    this.setColours('#900090', '#540054');
    this.appendDummyInput()
        .appendField(Blockly.Msg.IO_PRINT0_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.IO_PRINT0_TOOLTIP);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['io_print0'] = {
  /**
   * Block for print statement without any arguments.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.IO_PRINT_HELPURL);
    this.setColours('#900090', '#540054');
    this.appendDummyInput()
        .appendField(Blockly.Msg.IO_PRINT0_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.IO_PRINT0_TOOLTIP);
    this.setInputsInline(true);
  }
};


Blockly.Blocks['text_print'] = {
  /**
   * Block for print statement with a single argument.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.IO_PRINT_HELPURL);
    this.setColours('#900090', '#540054');
    this.interpolateMsg(Blockly.Msg.IO_PRINT1_TITLE,
                        ['TEXT', null, Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.IO_PRINT1_TOOLTIP);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['io_print1'] = {
  /**
   * Block for print statement with a single argument.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.IO_PRINT_HELPURL);
    this.setColours('#900090', '#540054');
    this.interpolateMsg(Blockly.Msg.IO_PRINT1_TITLE,
                        ['ANY0', null, Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.IO_PRINT1_TOOLTIP);
    this.setInputsInline(true);
  }
};


Blockly.Blocks['io_print2'] = {
  /**
   * Block for print statement with two arguments.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.IO_PRINT_HELPURL);
    this.setColours('#900090', '#540054');
    this.interpolateMsg(Blockly.Msg.IO_PRINT2_TITLE,
                        ['ANY0', null, Blockly.ALIGN_RIGHT],
                        ['ANY1', null, Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.IO_PRINT2_TOOLTIP);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['io_print3'] = {
  /**
   * Block for print statement with three arguments.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.IO_PRINT_HELPURL);
    this.setColours('#900090', '#540054');
    this.interpolateMsg(Blockly.Msg.IO_PRINT3_TITLE,
                        ['ANY0', null, Blockly.ALIGN_RIGHT],
                        ['ANY1', null, Blockly.ALIGN_RIGHT],
                        ['ANY2', null, Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.IO_PRINT3_TOOLTIP);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['io_print4'] = {
  /**
   * Block for print statement with three arguments.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.IO_PRINT_HELPURL);
    this.setColours('#900090', '#540054');
    this.interpolateMsg(Blockly.Msg.IO_PRINT4_TITLE,
                        ['ANY0', null, Blockly.ALIGN_RIGHT],
                        ['ANY1', null, Blockly.ALIGN_RIGHT],
                        ['ANY2', null, Blockly.ALIGN_RIGHT],
                        ['ANY3', null, Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.IO_PRINT4_TOOLTIP);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['io_print5'] = {
  /**
   * Block for print statement with three arguments.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.IO_PRINT_HELPURL);
    this.setColours('#900090', '#540054');
    this.interpolateMsg(Blockly.Msg.IO_PRINT5_TITLE,
                        ['ANY0', null, Blockly.ALIGN_RIGHT],
                        ['ANY1', null, Blockly.ALIGN_RIGHT],
                        ['ANY2', null, Blockly.ALIGN_RIGHT],
                        ['ANY3', null, Blockly.ALIGN_RIGHT],
                        ['ANY4', null, Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.IO_PRINT5_TOOLTIP);
    this.setInputsInline(true);
  }
};
