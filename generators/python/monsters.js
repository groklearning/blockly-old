/**
 * @license
 * Visual Blocks Language - Grok SVG monsters library extension
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
 * @fileoverview Generating Python for Grok SVG monster library blocks.
 */
'use strict';

goog.provide('Blockly.Python.monsters');

goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('grok', 'monsters');


function addImport() {
  Blockly.Python.definitions_['import_monster'] = 'from grok.monsters import *'
}


Blockly.Python['monster_body'] = function(block) {
  addImport();
  var code = '# monster body\n';
  return code;
};

Blockly.Python['monster_eyes'] = function(block) {
  addImport();
  var code = '# monster eyes\n';
  return code;
};

Blockly.Python['monster_mouth'] = function(block) {
  addImport();
  var code = '# monster mouth\n';
  return code;
};

Blockly.Python['monster_hat'] = function(block) {
  addImport();
  var code = '# monster hat\n';
  return code;
};

Blockly.Python['monster_horn'] = function(block) {
  addImport();
  var code = '# monster horn\n';
  return code;
};

Blockly.Python['monster_stencil'] = function(block) {
  addImport();
  var code = '# monster stencil\n';
  return code;
};
