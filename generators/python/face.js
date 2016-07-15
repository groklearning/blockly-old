/**
 * @license
 * Visual Blocks Language - Grok SVG face library extension
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
 * @fileoverview Generating Python for Grok SVG face library blocks.
 */
'use strict';

goog.provide('Blockly.Python.face');

goog.require('Blockly.Python');


// Any imports need to be reserved words
    Blockly.Python.addReservedWords('grok', 'face');

Blockly.Python['face_eyebrows'] = function(block) {
  Blockly.Python.definitions_['import_face'] = 'from grok.face import *'
  var code = 'eyebrows()\n';
  return code;
};

Blockly.Python['face_eyelashes'] = function(block) {
  Blockly.Python.definitions_['import_face'] = 'from grok.face import *'
  var code = 'eyelashes()\n';
  return code;
};

Blockly.Python['face_outline'] = function(block) {
  Blockly.Python.definitions_['import_face'] = 'from grok.face import *'
  var code = 'outline()\n';
  return code;
};

Blockly.Python['face_eyes'] = function(block) {
  Blockly.Python.definitions_['import_face'] = 'from grok.face import *'
  var code = 'eyes("' + block.getFieldValue('a') + '")\n';
  return code;
};

Blockly.Python['face_face'] = function(block) {
  Blockly.Python.definitions_['import_face'] = 'from grok.face import *'
  var code = 'face("' + block.getFieldValue('a') + '")\n';
  return code;
};

Blockly.Python['face_hair'] = function(block) {
  Blockly.Python.definitions_['import_face'] = 'from grok.face import *'
  var code = 'hair("' + block.getFieldValue('a') + '")\n';
  return code;
};

Blockly.Python['face_lips'] = function(block) {
  Blockly.Python.definitions_['import_face'] = 'from grok.face import *'
  var code = 'lips()\n';
  return code;
};

Blockly.Python['face_nose'] = function(block) {
  Blockly.Python.definitions_['import_face'] = 'from grok.face import *'
  var code = 'nose()\n';
  return code;
};

Blockly.Python['face_ears'] = function(block) {
  Blockly.Python.definitions_['import_face'] = 'from grok.face import *'
  var code = 'ears("' + block.getFieldValue('a') + '")\n';
  return code;
};
