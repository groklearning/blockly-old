/**
 * @license
 * Visual Blocks Editor - Grok SVG image ordering library extension
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
 * @fileoverview Blocks for Grok SVG image ordering library.
 */
'use strict';

goog.provide('Blockly.Blocks.image_ordering');

goog.require('Blockly.Blocks');


var BODY_COLOR = '#00BFBA';
var TRIM_COLOR = '#00858F';

Blockly.Blocks['image_ordering_body'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(
      'Draw %1 body',
      ['name', new Blockly.FieldDropdown([
        ['an alien', 'alien'],
        ['a monster', 'monster'],
        ['a strange', 'strange'],
      ]), Blockly.ALIGN_RIGHT],
      Blockly.ALIGN_RIGHT
    );
    this.setTooltip('Draw the body of the monster.');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['image_ordering_eyes'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(
      'Draw %1 eyes',
      ['name', new Blockly.FieldDropdown([
        ['two angry', 'angry-two'],
        ['two tired', 'tired-two'],
        ['two open', 'open-two'],
      ]), Blockly.ALIGN_RIGHT],
      Blockly.ALIGN_RIGHT
    );
    this.setTooltip('Draw the eyes of the monster.');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['image_ordering_mouth'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(
      'Draw %1 mouth',
      ['name', new Blockly.FieldDropdown([
        ['a scary', 'fangs'],
        ['a silly', 'tongue'],
        ['a smiley', 'smily'],
      ]), Blockly.ALIGN_RIGHT],
      Blockly.ALIGN_RIGHT
    );
    this.setTooltip('Draw the mouth of the monster.');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['image_ordering_hat'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(
      'Draw %1 hat',
      ['name', new Blockly.FieldDropdown([
        ['a baseball', 'baseball'],
      ]), Blockly.ALIGN_RIGHT],
      Blockly.ALIGN_RIGHT
    );
    this.setTooltip('Draw a hat on the monster.');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['image_ordering_horns'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(
      'Draw %1 horns',
      ['name', new Blockly.FieldDropdown([
        ['upright', 'upright'],
      ]), Blockly.ALIGN_RIGHT],
      Blockly.ALIGN_RIGHT
    );
    this.setTooltip('Draw horns on the monster.');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['image_ordering_paint'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.appendDummyInput()
        .appendField('Paint')
        .appendField(new Blockly.FieldColour('#7ED321'), 'colour');
    this.setTooltip('Paint the drawing.');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['image_ordering_stencil_add_remove'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(
      'Apply a %1 stencil',
      ['name', new Blockly.FieldDropdown([
        ['polka dots', 'dots'],
        ['diagonal NW-SE lines', 'lines-nwse'],
        ['diagonal SW-NE lines', 'lines-swne'],
        ['lightning', 'lightning'],
        ['stomach blob', 'stomach-blob'],
        ['triangles', 'triangles'],
      ]), Blockly.ALIGN_RIGHT],
      Blockly.ALIGN_RIGHT
    );
    this.setTooltip('Apply a stencil over the drawing.');
    this.appendStatementInput('DO');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['image_ordering_stencil_add'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(
      'Add a %1 stencil',
      ['name', new Blockly.FieldDropdown([
        ['polka dots', 'dots'],
        ['diagonal NE-SW lines', 'lines-nesw'],
        ['diagonal SW-NE lines', 'lines-swne'],
        ['lightning', 'lightning'],
        ['stomach blob', 'stomach-blob'],
        ['triangles', 'triangles'],
      ]), Blockly.ALIGN_RIGHT],
      Blockly.ALIGN_RIGHT
    );
    this.setTooltip('Add stencil');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['image_ordering_stencil_remove'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(
      'Remove a %1 stencil',
      ['name', new Blockly.FieldDropdown([
        ['polka dots', 'dots'],
        ['diagonal NE-SW lines', 'lines-nesw'],
        ['diagonal SW-NE lines', 'lines-swne'],
        ['stomach blob', 'stomach-blob'],
        ['triangles', 'triangles'],
      ]), Blockly.ALIGN_RIGHT],
      Blockly.ALIGN_RIGHT
    );
    this.setTooltip('Remove stencil');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};
