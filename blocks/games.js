/**
 * @license
 * Visual Blocks Editor - Javascript html5 games extension
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

'use strict';

goog.provide('Blockly.Blocks.games');

goog.require('Blockly.Blocks');


Blockly.Blocks['games_move_up'] = {
  /**
   * Block for moving the player figure up.
   * @this Blockly.Block
   */
  init: function() {
    this.setColours('#00BFBA', '#00858F');
    this.appendDummyInput()
        .appendField('up');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Move the player up');
  }
};

Blockly.Blocks['games_move_down'] = {
  /**
   * Block for moving the player figure up.
   * @this Blockly.Block
   */
  init: function() {
    this.setColours('#00BFBA', '#00858F');
    this.appendDummyInput()
        .appendField('down');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Move the player down');
  }
};

Blockly.Blocks['games_move_left'] = {
  /**
   * Block for moving the player figure up.
   * @this Blockly.Block
   */
  init: function() {
    this.setColours('#00BFBA', '#00858F');
    this.appendDummyInput()
        .appendField('left');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Move the player left');
  }
};

Blockly.Blocks['games_move_right'] = {
  /**
   * Block for moving the player figure up.
   * @this Blockly.Block
   */
  init: function() {
    this.setColours('#00BFBA', '#00858F');
    this.appendDummyInput()
        .appendField('right');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Move the player right');
  }
};

