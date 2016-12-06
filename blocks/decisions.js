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
 * @fileoverview Logic blocks for Blockly.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Blocks.decisions');

goog.require('Blockly.Blocks');


Blockly.Blocks['decisions_if'] = {
  /**
   * Block for if/elseif/else condition.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
    this.setColours('#ff7700', '#C05900');
    this.appendValueInput('IF0')
        .setCheck('Boolean')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
    this.appendStatementInput('DO0')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);

    this.elseifCount_ = 0;
    this.elseCount_ = 0;
  }
};

Blockly.Blocks['decisions_if_else'] = {
  /**
   * Block for if/elseif/else condition.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
    this.setColours('#ff7700', '#C05900');
    this.appendValueInput('IF0')
        .setCheck('Boolean')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
    this.appendStatementInput('DO0')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
      this.appendStatementInput('ELSE')
          .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);

    this.elseifCount_ = 0;
    this.elseCount_ = 1;
  }
};

Blockly.Blocks['decisions_if_elif_else'] = {
  /**
   * Block for if/elseif/else condition.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
    this.setColours('#ff7700', '#C05900');
    this.appendValueInput('IF0')
        .setCheck('Boolean')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
    this.appendStatementInput('DO0')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
      this.appendValueInput('IF1')
          .setCheck('Boolean')
          .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF);
      this.appendStatementInput('DO1')
          .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
      this.appendStatementInput('ELSE')
          .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);

    this.elseifCount_ = 1;
    this.elseCount_ = 1;
  }
};

Blockly.Blocks['decisions_if_elif_elif_else'] = {
  /**
   * Block for if/elseif/else condition.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
    this.setColours('#ff7700', '#C05900');
    this.appendValueInput('IF0')
        .setCheck('Boolean')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
    this.appendStatementInput('DO0')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    this.appendValueInput('IF1')
        .setCheck('Boolean')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF);
    this.appendStatementInput('DO1')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    this.appendValueInput('IF2')
        .setCheck('Boolean')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF);
    this.appendStatementInput('DO2')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    this.appendStatementInput('ELSE')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);

    this.elseifCount_ = 2;
    this.elseCount_ = 1;
  }
};

Blockly.Blocks['decisions_image_ordering_if_boolean'] = {
  /**
   * Block for if/elseif/else condition.
   * @this Blockly.Block
   */
  init: function() {
    var dropdown = new Blockly.FieldDropdown([
      ['yes', 'true'],
      ['no', 'false'],
    ]);
    this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
    this.setColours('#ff7700', '#C05900');
    this.appendDummyInput()
        .appendField('Ask ');
    this.appendValueInput('TEXT')
        .setCheck('String')
    this.appendDummyInput()
        .setNewRow(true);
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
    this.appendDummyInput()
        .appendField(dropdown, 'CHOICE');
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);

    this.elseCount_ = 0;
  }
};

Blockly.Blocks['decisions_image_ordering_if_else_boolean'] = {
  /**
   * Block for if/elseif/else condition.
   * @this Blockly.Block
   */
  init: function() {
    var dropdown = new Blockly.FieldDropdown([
      ['yes', 'true'],
      ['no', 'false'],
    ]);
    this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
    this.setColours('#ff7700', '#C05900');
    this.appendDummyInput()
        .appendField('Ask ');
    this.appendValueInput('TEXT')
        .setCheck('String')
    this.appendDummyInput()
        .setNewRow(true);
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
    this.appendDummyInput()
        .appendField(dropdown, 'CHOICE');
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
      this.appendStatementInput('ELSE')
          .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);

    this.elseCount_ = 1;
  }
};
