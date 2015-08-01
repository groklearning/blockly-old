/**
 * @license
 * Visual Blocks Language - Turtle extension
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
 * @fileoverview Generating Python for math blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Python.turtle');

goog.require('Blockly.Python');


// Any imports need to be reserved words
Blockly.Python.addReservedWords('turtle');


Blockly.Python['turtle_forward'] = function(block) {
  Blockly.Python.definitions_['import_turtle'] = 'from turtle import *';
  var distance = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_NONE) || 0;
  if (Blockly.isNumber(distance)) {
    distance = parseInt(distance, 10);
  } else {
    distance = 'float(' + distance + ')';
  }
  var code = 'forward(' + distance + ')\n';
  return code;
};

Blockly.Python['turtle_turn'] = function(block) {
  Blockly.Python.definitions_['import_turtle'] = 'from turtle import *';
  var angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_NONE) || 0;
  if (Blockly.isNumber(angle)) {
    angle = parseInt(angle, 10);
  } else {
    angle = 'float(' + angle + ')';
  }
  var TURN_FUNCTIONS = {
    'RIGHT': 'right',
    'LEFT': 'left',
  };
  var turnFunction = TURN_FUNCTIONS[block.getFieldValue('DIRECTION')];
  var code = turnFunction + '(' + angle + ')\n';
  return code;
};

Blockly.Python['turtle_pen'] = function(block) {
  Blockly.Python.definitions_['import_turtle'] = 'from turtle import *';
  var PEN_FUNCTIONS = {
    'UP': 'penup',
    'DOWN': 'pendown',
  };
  var penFunction = PEN_FUNCTIONS[block.getFieldValue('STATE')];
  var code = penFunction + '()\n';
  return code;
};
