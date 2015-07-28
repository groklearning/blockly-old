/**
 * @license
 * Visual Blocks Editor - Turtle extension
 *
 * Copyright 2015 Grok Learning
 * https://groklearning.com
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
 * @fileoverview Loop blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.turtle');

goog.require('Blockly.Blocks');


Blockly.Blocks['turtle_forward'] = {
  /**
   * Block for turtle.forward(x)
   * @this Blockly.Block
   */
  init: function() {
    this.setColours('#00BFBA', '#00858F');
    this.interpolateMsg(Blockly.Msg.TURTLE_FORWARD_TITLE,
                        ['DISTANCE', null, Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.TURTLE_FORWARD_TOOLTIP);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['turtle_turn'] = {
  /**
   * Block for changing capitalization.
   * @this Blockly.Block
   */
  init: function() {
    var DIRECTIONS =
        [[Blockly.Msg.TURTLE_TURN_LEFT, 'LEFT'],
         [Blockly.Msg.TURTLE_TURN_RIGHT, 'RIGHT']];
    this.setColours('#00BFBA', '#00858F');
    this.appendValueInput('ANGLE')
        .setCheck('Number')
        .appendField(new Blockly.FieldDropdown(DIRECTIONS), 'DIRECTION');
    this.appendDummyInput()
        .appendField(Blockly.Msg.TURTLE_TURN_DEGREES_TAIL);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.TURTLE_TURN_TOOLTIP);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['turtle_pen'] = {
  /**
   * Block for changing capitalization.
   * @this Blockly.Block
   */
  init: function() {
    var STATES =
        [[Blockly.Msg.TURTLE_PEN_UP, 'UP'],
         [Blockly.Msg.TURTLE_PEN_DOWN, 'DOWN']];
    this.setColours('#00BFBA', '#00858F');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(STATES), 'STATE');
    if (Blockly.Msg.TURTLE_PEN_UP_DOWN_TAIL) {
      this.appendDummyInput()
          .appendField(Blockly.Msg.TURTLE_PEN_UP_DOWN_TAIL);
    }
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.TURTLE_PEN_UP_DOWN_TOOLTIP);
    this.setInputsInline(true);
  }
};
