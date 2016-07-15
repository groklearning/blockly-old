/**
 * @license
 * Visual Blocks Editor - Grok SVG face library extension
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
 * @fileoverview Blocks for Grok SVG face library.
 */
'use strict';

goog.provide('Blockly.Blocks.face');

goog.require('Blockly.Blocks');


var BODY_COLOR = '#00BFBA';
var TRIM_COLOR = '#00858F';
    
Blockly.Blocks['face_eyebrows'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg('eyebrows',
                        Blockly.ALIGN_RIGHT);
    this.setTooltip('eyebrows');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['face_eyelashes'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg('eyelashes',
                        Blockly.ALIGN_RIGHT);
    this.setTooltip('eyelashes');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['face_outline'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg('outline',
                        Blockly.ALIGN_RIGHT);
    this.setTooltip('outline');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['face_eyes'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg('eyes %1',
                        ['a', new Blockly.FieldDropdown([['blue', 'blue'], ['brown', 'brown'], ['green', 'green']]), Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setTooltip('eyes');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['face_face'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg('face %1',
                        ['a', new Blockly.FieldDropdown([['light', 'light'], ['medium', 'medium']]), Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setTooltip('face');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['face_hair'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg('hair %1',
                        ['a', new Blockly.FieldDropdown([['brown', 'brown'], ['blonde', 'blonde'], ['red', 'red']]), Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setTooltip('hair');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['face_lips'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg('lips',
                        Blockly.ALIGN_RIGHT);
    this.setTooltip('lips');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['face_nose'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg('nose',
                        Blockly.ALIGN_RIGHT);
    this.setTooltip('nose');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['face_ears'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg('ears %1',
                        ['a', new Blockly.FieldDropdown([['light', 'light'], ['medium', 'medium']]), Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setTooltip('ears');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};
