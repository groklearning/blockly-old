/**
 * @license
 * Visual Blocks Language - Pillow extension
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
 * @fileoverview Generating Python for Pillow image manipulation blocks.
 */
'use strict';

goog.provide('Blockly.Python.pillow');

goog.require('Blockly.Python');


// Any imports need to be reserved words
Blockly.Python.addReservedWords('PIL');
Blockly.Python.addReservedWords('Image');

Blockly.Python['pillow_open'] = function(block) {
  Blockly.Python.definitions_['import_pil_image'] = 'from PIL import Image';
  var filename = Blockly.Python.valueToCode(block, 'FILENAME', Blockly.Python.ORDER_NONE);
  var code = 'Image.open(' + filename + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};


Blockly.Python['pillow_image_size'] = function(block) {
  Blockly.Python.definitions_['import_pil_image'] = 'from PIL import Image';
  var image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_NONE);
  var dimension = block.getFieldValue('DIMENSION');

  var code = image + '.width';
  if (dimension === 'HEIGHT') {
    var code = image + '.height';
  }
  return [code, Blockly.Python.ORDER_MEMBER];
};


Blockly.Python['pillow_dimension_loop'] = function(block) {
  var variable = Blockly.Python.variableDB_.getName(
      block.getFieldValue('IVAR'), Blockly.Variables.NAME_TYPE);

  var to = Blockly.Python.valueToCode(block, 'MAX', Blockly.Python.ORDER_FUNCTION_CALL);
  var body = Blockly.Python.statementToCode(block, 'DO');
  body = Blockly.Python.addLoopTrap(body, block.id) ||
      Blockly.Python.LOOP_PASS;

  var range = 'range(' + to + ')';
  return 'for ' + variable + ' in ' + range + ':\n' + body;
};


Blockly.Python['pillow_coordinate_loop'] = function(block) {
  var xVariable = Blockly.Python.variableDB_.getName(block.getFieldValue('XVAR'), Blockly.Variables.NAME_TYPE);
  var yVariable = Blockly.Python.variableDB_.getName(block.getFieldValue('YVAR'), Blockly.Variables.NAME_TYPE);
  var image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_NONE);

  var body = Blockly.Python.statementToCode(block, 'DO');
  body = Blockly.Python.addLoopTrap(body, block.id) ||
      Blockly.Python.LOOP_PASS;

  var widthRange = 'range(' + image + '.width' + ')';
  var heightRange = 'range(' + image + '.height' + ')';
  var innerCode = 'for ' + xVariable + ' in ' + widthRange + ':\n' + body;
  innerCode = Blockly.Python.prefixLines(innerCode, Blockly.Python.INDENT);

  return 'for ' + yVariable + ' in ' + heightRange + ':\n' + innerCode;
};


Blockly.Python['pillow_channel_split_rgb'] = function(block) {
  var image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_MEMBER);
  var channel = block.getFieldValue('CHANNEL');
  var i = ['RED', 'GREEN', 'BLUE'].indexOf(channel);

  var code = image + '.split()[' + i + ']';
  return [code, Blockly.Python.ORDER_MEMBER];
};
