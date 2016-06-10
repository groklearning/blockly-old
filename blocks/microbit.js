/**
 * @license
 * Visual Blocks Editor - MicroPython micro:bit library extension
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
 * @fileoverview Blocks for MicroPython on the micro:bit.
 */
'use strict';

goog.provide('Blockly.Blocks.microbit');

goog.require('Blockly.Blocks');


var BODY_COLOR = '#00BFBA';
var TRIM_COLOR = '#00858F';

var LOOP_BODY_COLOR = '#FF7700';
var LOOP_TRIM_COLOR = '#C05900';

var IMAGE_BODY_COLOR = '#0080E4';
var IMAGE_TRIM_COLOR = '#003660';

var LOOP_BODY_COLOR = '#ff7700';
var LOOP_TRIM_COLOR = '#C05900';


Blockly.Blocks['microbit_main_loop'] = {
  /**
   * Block for while True: ... sleep(10)
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(LOOP_BODY_COLOR, LOOP_TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.MICROBIT_MAIN_LOOP,
                        Blockly.ALIGN_RIGHT);
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.MICROBIT_MAIN_LOOP_DO);
    this.setTooltip(Blockly.Msg.MICROBIT_MAIN_LOOP_TOOLTIP);
    this.setInputsInline(true);
  }
};


Blockly.Blocks['microbit_display_show'] = {
  /**
   * Block for display.show(image)
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.MICROBIT_DISPLAY_SHOW,
                        ['IMAGE', 'micro:bit image', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setTooltip(Blockly.Msg.MICROBIT_DISPLAY_SHOW_TOOLTIP);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


Blockly.Blocks['microbit_display_clear'] = {
  /**
   * Block for display.clear()
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.MICROBIT_DISPLAY_CLEAR,
                        Blockly.ALIGN_RIGHT);
    this.setTooltip(Blockly.Msg.MICROBIT_DISPLAY_CLEAR_TOOLTIP);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


var IMAGES = [
  "HEART",
  "GIRAFFE",
  "HAPPY",
  "SAD",
];


Blockly.Blocks['microbit_image'] = {
  /**
   * Block for Image.FOO
   * @this Blockly.Block
   */
  init: function() {
    var images = [];
    for (var i = 0; i < IMAGES.length; ++i) {
      images.push([IMAGES[i], IMAGES[i],]);
    }
    this.setColours(IMAGE_BODY_COLOR, IMAGE_TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.MICROBIT_IMAGE,
                        ['NAME', new Blockly.FieldDropdown(images), Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setTooltip(Blockly.Msg.MICROBIT_IMAGE_TOOLTIP);
    this.setOutput('micro:bit image');
    this.setInputsInline(true);
  }
};

var DIGITAL_PINS = [
  "pin0",
  "pin1",
  "pin2",
  "pin3",
  "pin8",
  "pin12",
  "pin13",
  "pin14",
  "pin15",
  "pin16",
  "pin19",
  "pin20",
];


var ANALOG_PINS = [
  "pin0",
  "pin1",
  "pin2",
];


Blockly.Blocks['microbit_pin_digital_read'] = {
  /**
   * Block for pinX.read_digital()
   * @this Blockly.Block
   */
  init: function() {
    var pins = [];
    for (var i = 0; i < DIGITAL_PINS.length; ++i) {
      pins.push([DIGITAL_PINS[i], DIGITAL_PINS[i],]);
    }
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.MICROBIT_PIN_DIGITAL_READ,
                        ['PIN', new Blockly.FieldDropdown(pins), Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setTooltip(Blockly.Msg.MICROBIT_PIN_DIGITAL_READ_TOOLTIP);
    this.setOutput('Number');
    this.setInputsInline(true);
  }
};


Blockly.Blocks['microbit_pin_digital_write'] = {
  /**
   * Block for pinX.write_digital(N)
   * @this Blockly.Block
   */
  init: function() {
    var pins = [];
    for (var i = 0; i < DIGITAL_PINS.length; ++i) {
      pins.push([DIGITAL_PINS[i], DIGITAL_PINS[i],]);
    }
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.MICROBIT_PIN_DIGITAL_WRITE,
                        ['VALUE', 'Number', Blockly.ALIGN_RIGHT],
                        ['PIN', new Blockly.FieldDropdown(pins), Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setTooltip(Blockly.Msg.MICROBIT_PIN_DIGITAL_WRITE_TOOLTIP);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


Blockly.Blocks['microbit_pin_analog_read'] = {
  /**
   * Block for pinX.read_analog()
   * @this Blockly.Block
   */
  init: function() {
    var pins = [];
    for (var i = 0; i < ANALOG_PINS.length; ++i) {
      pins.push([ANALOG_PINS[i], ANALOG_PINS[i],]);
    }
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.MICROBIT_PIN_ANALOG_READ,
                        ['PIN', new Blockly.FieldDropdown(pins), Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setTooltip(Blockly.Msg.MICROBIT_PIN_ANALOG_READ_TOOLTIP);
    this.setOutput('Number');
    this.setInputsInline(true);
  }
};


Blockly.Blocks['microbit_pin_analog_write'] = {
  /**
   * Block for pinX.write_analog(N)
   * @this Blockly.Block
   */
  init: function() {
    var pins = [];
    for (var i = 0; i < ANALOG_PINS.length; ++i) {
      pins.push([ANALOG_PINS[i], ANALOG_PINS[i],]);
    }
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.MICROBIT_PIN_ANALOG_WRITE,
                        ['VALUE', 'Number', Blockly.ALIGN_RIGHT],
                        ['PIN', new Blockly.FieldDropdown(pins), Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setTooltip(Blockly.Msg.MICROBIT_PIN_ANALOG_WRITE_TOOLTIP);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


Blockly.Blocks['microbit_button_pressed'] = {
  /**
   * Block for button_{a,b}.{is,was}_pressed()
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.MICROBIT_BUTTON_PRESSED,
                        ['BUTTON', new Blockly.FieldDropdown([["A","a",],["B","b",]]), Blockly.ALIGN_RIGHT],
                        ['STATE', new Blockly.FieldDropdown([["is","is",],["was","was",]]), Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setTooltip(Blockly.Msg.MICROBIT_BUTTON_PRESSED_TOOLTIP);
    this.setOutput('Boolean');
    this.setInputsInline(true);
  }
};


Blockly.Blocks['microbit_compass'] = {
  /**
   * Block for compass.{get_x,get_y,get_z,heading}()
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.MICROBIT_COMPASS,
                        ['AXIS', new Blockly.FieldDropdown([["heading","heading",],["x","get_x",],["y","get_y",],["z","get_z",]]), Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setTooltip(Blockly.Msg.MICROBIT_COMPASS_TOOLTIP);
    this.setOutput('Number');
    this.setInputsInline(true);
  }
};


Blockly.Blocks['microbit_accelerometer'] = {
  /**
   * Block for accelerometer.get_{x,y,z}
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.MICROBIT_ACCELEROMETER,
                        ['AXIS', new Blockly.FieldDropdown([["x","get_x",],["y","get_y",],["z","get_z",]]), Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setTooltip(Blockly.Msg.MICROBIT_ACCELEROMETER_TOOLTIP);
    this.setOutput('Number');
    this.setInputsInline(true);
  }
};


Blockly.Blocks['microbit_sleep'] = {
  /**
   * Block for sleep(N)
   * @this Blockly.Block
   */
  init: function() {
    this.setColours(BODY_COLOR, TRIM_COLOR);
    this.interpolateMsg(Blockly.Msg.MICROBIT_SLEEP,
                        ['DURATION', 'Number', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setTooltip(Blockly.Msg.MICROBIT_SLEEP_TOOLTIP);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};
