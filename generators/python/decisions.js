/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://blockly.googlecode.com/
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
 * @fileoverview Generating Python for logic blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Python.decisions');

goog.require('Blockly.Python');


Blockly.Python['decisions_if'] =
Blockly.Python['decisions_if_else'] =
Blockly.Python['decisions_if_elif_else'] =
Blockly.Python['decisions_if_elif_elif_else'] =
function(block) {
  // If/elseif/else condition.
  var n = 0;
  var argument = Blockly.Python.valueToCode(block, 'IF' + n,
      Blockly.Python.ORDER_NONE) || 'False';
  var branch = Blockly.Python.statementToCode(block, 'DO' + n) || '  pass\n';
  var code = 'if ' + argument + ':\n' + branch;
  for (n = 1; n <= block.elseifCount_; n++) {
    argument = Blockly.Python.valueToCode(block, 'IF' + n,
        Blockly.Python.ORDER_NONE) || 'False';
    branch = Blockly.Python.statementToCode(block, 'DO' + n) || '  pass\n';
    code += 'elif ' + argument + ':\n' + branch;
  }
  if (block.elseCount_) {
    branch = Blockly.Python.statementToCode(block, 'ELSE') || '  pass\n';
    code += 'else:\n' + branch;
  }
  return code;
};


Blockly.Python['decisions_image_ordering_if_boolean'] =
Blockly.Python['decisions_image_ordering_if_else_boolean'] =
function(block) {
  Blockly.Python.definitions_['import_image_ordering'] = 'from grok.image_ordering import *';

  var choice = block.getFieldValue('CHOICE');
  var code = 'if ' + (choice === 'true' ? '' : 'not ');

  var string = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE) || '\'\'';
  code += 'prompt(\'boolean\', ' + string + ')';

  var branch = Blockly.Python.statementToCode(block, 'DO') || '  pass\n';
  code += ':\n' + branch;
  if (block.elseCount_) {
    branch = Blockly.Python.statementToCode(block, 'ELSE') || '  pass\n';
    code += 'else:\n' + branch;
  }

  return code;
};
