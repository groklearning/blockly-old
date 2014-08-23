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
 * @fileoverview Generating Python for loop blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Python.loops');

goog.require('Blockly.Python');

Blockly.Python.LOOP_PASS = '  pass\n';

Blockly.Python['loops_repeat'] = function(block) {
  // Repeat n times (internal number).
  var repeats = parseInt(block.getFieldValue('TIMES'), 10);
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.LOOP_PASS;
  var loopVar = Blockly.Python.variableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var code = 'for ' + loopVar + ' in range(' + repeats + '):\n' + branch;
  return code;
};

Blockly.Python['loops_repeat_ext'] = function(block) {
  // Repeat n times (external number).
  var repeats = Blockly.Python.valueToCode(block, 'TIMES',
      Blockly.Python.ORDER_NONE) || '0';
  if (Blockly.isNumber(repeats)) {
    repeats = parseInt(repeats, 10);
  } else {
    repeats = 'int(' + repeats + ')';
  }
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.LOOP_PASS;
  var loopVar = Blockly.Python.variableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var code = 'for ' + loopVar + ' in range(' + repeats + '):\n' + branch;
  return code;
};

Blockly.Python['loops_whileUntil'] = function(block) {
  // Do while/until loop.
  var until = block.getFieldValue('MODE') == 'UNTIL';
  var argument0 = Blockly.Python.valueToCode(block, 'BOOL',
      until ? Blockly.Python.ORDER_LOGICAL_NOT :
      Blockly.Python.ORDER_NONE) || 'False';
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.LOOP_PASS;
  if (until) {
    argument0 = 'not ' + argument0;
  }
  return 'while ' + argument0 + ':\n' + branch;
};

Blockly.Python['loops_while'] = function(block) {
  // Do while/until loop.
  var argument0 = Blockly.Python.valueToCode(block, 'BOOL',
      Blockly.Python.ORDER_NONE) || 'False';
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.LOOP_PASS;
  return 'while ' + argument0 + ':\n' + branch;
};

Blockly.Python['loops_for'] = function(block) {
  function get_value(block, name, order, def) {
    var target = block.getInputTargetBlock(name);
    if (target.type !== 'math_number') {
      var code = Blockly.Python.valueToCode(block, name, order) || def;
      return [code, 'code'];
    }

    return [parseInt(target.getFieldValue('NUM')), 'literal'];
  }

  var variable = Blockly.Python.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);

  var from  = get_value(block, 'FROM', Blockly.Python.ORDER_NONE, '0');
  var to = get_value(block, 'TO', Blockly.Python.ORDER_ADDITIVE, '0');
  var body = Blockly.Python.statementToCode(block, 'DO');
  body = Blockly.Python.addLoopTrap(body, block.id) ||
      Blockly.Python.LOOP_PASS;
  var dir = block.getFieldValue('DIR');

  from = from[0].toString();

  if (dir === 'UPTO') {
    var increment = get_value(block, 'BY', Blockly.Python.ORDER_NONE, '1');
    increment = increment[0].toString();
    if (to[1] === 'code') {
      to = to[0] + ' + 1';
    } else {
      to = (to[0] + 1).toString();
    }
  } else {
    var increment = get_value(block, 'BY', Blockly.Python.ORDER_UNARY_SIGN, '1');
    if (increment[1] === 'code') {
      increment = '-' + increment[0];
    } else {
      increment = (-increment[0]).toString();
    }
    if (to[1] === 'code') {
      to = to[0] + ' - 1';
    } else {
      to = (to[0] - 1).toString();
    }
  }

  var range = 'range(';
  if (from === '0') {
    if (increment === '1') {
      range += to;
    } else {
      range += from + ', ' + to + ', ' + increment;
    }
  } else {
    if (increment === '1') {
      range += from + ', ' + to;
    } else {
      range += from + ', ' + to + ', ' + increment;
    }
  }
  range += ')';

  return 'for ' + variable + ' in ' + range + ':\n' + body;
};

Blockly.Python['loops_forEach'] = function(block) {
  // For each loop.
  var variable0 = Blockly.Python.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.Python.valueToCode(block, 'LIST',
      Blockly.Python.ORDER_RELATIONAL) || '[]';
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.LOOP_PASS;
  var code = 'for ' + variable0 + ' in ' + argument0 + ':\n' + branch;
  return code;
};

Blockly.Python['loops_flow_statements'] = function(block) {
  // Flow statements: continue, break.
  switch (block.getFieldValue('FLOW')) {
    case 'BREAK':
      return 'break\n';
    case 'CONTINUE':
      return 'continue\n';
  }
  throw 'Unknown flow statement.';
};
