/**
 * @license
 * Visual Blocks Language - Grok SVG image ordering library extension
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
 * @fileoverview Generating Python for Grok SVG image ordering library blocks.
 */
'use strict';

goog.provide('Blockly.Python.image_ordering');

goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('grok', 'image_ordering');


function addImport() {
  Blockly.Python.definitions_['import_image_ordering'] = 'from grok.image_ordering import *';
}


Blockly.Python['image_ordering_body'] = function(block) {
  addImport();
  var name = block.getFieldValue('NAME');
  var pyName = Blockly.Python.quote_(name);
  var pyBlock = Blockly.Python.quote_(block.id);
  return 'add_body(' + pyName + ', block=' + pyBlock + ')\n';
};

Blockly.Python['image_ordering_eyes'] = function(block) {
  addImport();
  var name = block.getFieldValue('NAME');
  var pyName = Blockly.Python.quote_(name);
  var pyBlock = Blockly.Python.quote_(block.id);
  return 'add_eyes(' + pyName + ', block=' + pyBlock + ')\n';
};

Blockly.Python['image_ordering_mouth'] = function(block) {
  addImport();
  var name = block.getFieldValue('NAME');
  var pyName = Blockly.Python.quote_(name);
  var pyBlock = Blockly.Python.quote_(block.id);
  return 'add_mouth(' + pyName + ', block=' + pyBlock + ')\n';
};

Blockly.Python['image_ordering_hat'] = function(block) {
  addImport();
  var name = block.getFieldValue('NAME');
  var pyName = Blockly.Python.quote_(name);
  var pyBlock = Blockly.Python.quote_(block.id);
  return 'add_hat(' + pyName + ', block=' + pyBlock + ')\n';
};

Blockly.Python['image_ordering_horns'] = function(block) {
  addImport();
  var name = block.getFieldValue('NAME');
  var pyName = Blockly.Python.quote_(name);
  var pyBlock = Blockly.Python.quote_(block.id);
  return 'add_horns(' + pyName + ', block=' + pyBlock + ')\n';
};

Blockly.Python['image_ordering_paint'] = function(block) {
  addImport();
  var colour = block.getFieldValue('COLOUR');
  var pyColour = Blockly.Python.quote_(colour);
  var pyBlock = Blockly.Python.quote_(block.id);
  return 'paint(' + pyColour + ', block=' + pyBlock + ')\n';
};

Blockly.Python['image_ordering_stencil_add_remove'] = function(block) {
  addImport();
  var name = block.getFieldValue('NAME');
  var pyName = Blockly.Python.quote_(name);
  var pyBlock = Blockly.Python.quote_(block.id);
  var targetBlock = block.getInputTargetBlock('DO');
  var code = Blockly.Python.blockToCode(targetBlock) || '\n';
  return 'overlay_stencil(' + pyName + ', block=' + pyBlock + ')\n' + code + 'remove_stencil(' + pyName + ', block=' + pyBlock + ')\n';
};

Blockly.Python['image_ordering_stencil_add'] = function(block) {
  addImport();
  var name = block.getFieldValue('NAME');
  var pyName = Blockly.Python.quote_(name);
  var pyBlock = Blockly.Python.quote_(block.id);
  return 'overlay_stencil(' + pyName + ', block=' + pyBlock + ')\n';
};

Blockly.Python['image_ordering_stencil_remove'] = function(block) {
  addImport();
  var name = block.getFieldValue('NAME');
  var pyName = Blockly.Python.quote_(name);
  var pyBlock = Blockly.Python.quote_(block.id);
  return 'remove_stencil(' + pyName + ', block=' + pyBlock + ')\n';
};
