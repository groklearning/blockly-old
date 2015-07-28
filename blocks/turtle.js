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
