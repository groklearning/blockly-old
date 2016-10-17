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

goog.provide('Blockly.Python.microbit');

goog.require('Blockly.Python');


// Any imports need to be reserved words
Blockly.Python.addReservedWords('microbit');


Blockly.Python['microbit_main_loop'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var branch = Blockly.Python.statementToCode(block, 'DO');
  var code = 'while True:\n' + branch;
  return code;
};


Blockly.Python['microbit_display_show'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_NONE);
  var code = 'display.show(' + image + ')\n';
  return code;
};


Blockly.Python['microbit_display_scroll'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE);
  var code = 'display.scroll(' + text + ')\n';
  return code;
};


Blockly.Python['microbit_display_clear'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var code = 'display.clear()\n';
  return code;
};


Blockly.Python['microbit_image'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var name = block.getFieldValue('NAME');
  var code = 'Image.' + name;
  return [code, Blockly.Python.ORDER_MEMBER];
};


Blockly.Python['microbit_pin_digital_read'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var pin = block.getFieldValue('PIN');
  var code = pin + '.read_digital()';
  return [code, Blockly.Python.ORDER_MEMBER];
};


Blockly.Python['microbit_pin_digital_write'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var pin = block.getFieldValue('PIN');
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
  var code = pin + '.write_digital(' + value + ')\n';
  return code;
};


Blockly.Python['microbit_pin_analog_read'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var pin = block.getFieldValue('PIN');
  var code = pin + '.read_analog()';
  return [code, Blockly.Python.ORDER_MEMBER];
};


Blockly.Python['microbit_pin_analog_write'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var pin = block.getFieldValue('PIN');
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
  var code = pin + '.write_analog(' + value + ')\n';
  return code;
};


Blockly.Python['microbit_button_pressed'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var button = block.getFieldValue('BUTTON');
  var state = block.getFieldValue('STATE');
  var code = 'button_' + button + '.' + state + '_pressed()';
  return [code, Blockly.Python.ORDER_MEMBER];
};


Blockly.Python['microbit_compass'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var axis = block.getFieldValue('AXIS');
  var code = 'compass.' + axis + '()';
  return [code, Blockly.Python.ORDER_MEMBER];
};


Blockly.Python['microbit_accelerometer'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var axis = block.getFieldValue('AXIS');
  var code = 'accelerometer.' + axis + '()';
  return [code, Blockly.Python.ORDER_MEMBER];
};


Blockly.Python['microbit_sleep'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var ms = Blockly.Python.valueToCode(block, 'DURATION', Blockly.Python.ORDER_NONE);
  var code = 'sleep(' + ms + ')\n';
  return code;
};
