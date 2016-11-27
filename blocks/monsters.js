/**
 * @license
 * Visual Blocks Editor - Grok SVG monsters library extension
 *
 * Copyright 2016 Grok Learning
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
 * @fileoverview Blocks for Grok SVG monsters library.
 */
'use strict';

goog.provide('Blockly.Blocks.monsters');

goog.require('Blockly.Blocks');


var BODY_COLOR = '#00BFBA';
var TRIM_COLOR = '#00858F';

Blockly.Blocks['monster_body'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg('body', Blockly.ALIGN_RIGHT);
    this.setTooltip('body');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['monster_eyes'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg('eyes', Blockly.ALIGN_RIGHT);
    this.setTooltip('eyes');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['monster_mouth'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg('mouth', Blockly.ALIGN_RIGHT);
    this.setTooltip('mouth');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['monster_hat'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg('hat', Blockly.ALIGN_RIGHT);
    this.setTooltip('hat');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['monster_horn'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg('horn', Blockly.ALIGN_RIGHT);
    this.setTooltip('horn');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['monster_stencil'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg('stencil', Blockly.ALIGN_RIGHT);
    this.setTooltip('stencil');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};
