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

var STENCIL_OPTIONS = [
    ['animal stripes', 'animalstripes'],
    ['belly', 'belly'],
    ['face', 'face'],
    ['furry', 'furry'],
    ['polka dot', 'polkadots'],
    ['tiny zig-zag', 'tinyzigzag'],
    ['wiggly', 'wiggly'],
    ['zig-zag', 'zigzag'],
];

Blockly.Blocks['image_ordering_body'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(
      'Draw a %1 body',
      ['NAME', new Blockly.FieldDropdown([
        ['big-headed', 'bighead'],
        ['blobby', 'blobby'],
        ['monster', 'monster'],
        ['slug-like', 'slug'],
        ['squid-like', 'squid'],
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
      'Draw %1',
      ['NAME', new Blockly.FieldDropdown([
        ['one almond eye', 'almond-1'],
        ['one cresent eye', 'cresent-1'],
        ['one round eye', 'round-1'],
        ['two almond eyes', 'almond-2'],
        ['two cresent eyes', 'cresent-2'],
        ['two round eyes', 'round-2'],
        ['three almond eyes', 'almond-3'],
        ['three cresent eyes', 'cresent-3'],
        ['three round eyes', 'round-3'],
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
      'Draw a %1 mouth',
      ['NAME', new Blockly.FieldDropdown([
        ['scared', 'scared'],
        ['small', 'small'],
        ['smile', 'smile'],
        ['sweet', 'sweet'],
        ['wide', 'wide'],
      ]), Blockly.ALIGN_RIGHT],
      Blockly.ALIGN_RIGHT
    );
    this.setTooltip('Draw the mouth of the monster.');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['image_ordering_nose'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(
      'Draw %1 nose',
      ['NAME', new Blockly.FieldDropdown([
        ['an animal', 'animal'],
        ['a bumb', 'bumb'],
        ['a cute', 'cute'],
        ['a pink', 'pink'],
      ]), Blockly.ALIGN_RIGHT],
      Blockly.ALIGN_RIGHT
    );
    this.setTooltip('Draw the nose of the monster.');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['image_ordering_ears'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(
      'Draw %1 ears',
      ['NAME', new Blockly.FieldDropdown([
        ['bear', 'bear'],
        ['bunny', 'bunny'],
      ]), Blockly.ALIGN_RIGHT],
      Blockly.ALIGN_RIGHT
    );
    this.setTooltip('Draw ears on the monster.');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['image_ordering_extra'] = {
  /** @this Blockly.Block */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(
      'Draw %1',
      ['NAME', new Blockly.FieldDropdown([
        ['a beard', 'beard'],
        ['freckles', 'freckles'],
      ]), Blockly.ALIGN_RIGHT],
      Blockly.ALIGN_RIGHT
    );
    this.setTooltip('Draw extra details on the monster.');
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
      'Draw a %1',
      ['NAME', new Blockly.FieldDropdown([
        ['beanie', 'beanie'],
        ['lettuce-like hat', 'lettuce'],
        ['square hat', 'squarehat'],
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
      'Draw %1',
      ['NAME', new Blockly.FieldDropdown([
        ['one horn', 'horns-1'],
        ['two horns', 'horns-2'],
        ['three horns', 'horns-3'],
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
        .appendField(new Blockly.FieldColour('#7ED321'), 'COLOUR');
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
      ['NAME', new Blockly.FieldDropdown(STENCIL_OPTIONS), Blockly.ALIGN_RIGHT],
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
      ['NAME', new Blockly.FieldDropdown(STENCIL_OPTIONS), Blockly.ALIGN_RIGHT],
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
      ['NAME', new Blockly.FieldDropdown(STENCIL_OPTIONS), Blockly.ALIGN_RIGHT],
      Blockly.ALIGN_RIGHT
    );
    this.setTooltip('Remove stencil');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};
