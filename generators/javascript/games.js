/**
 * @license
 * Visual Blocks Language - Games extension
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
 * @fileoverview Generating JavaScript for small canvas games.
 */
'use strict';

goog.provide('Blockly.JavaScript.games');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['games_move_up'] = function(block) {
  return 'up();\n';
};

Blockly.JavaScript['games_move_down'] = function(block) {
  return 'down();\n';
};

Blockly.JavaScript['games_move_left'] = function(block) {
  return 'left();\n';
};

Blockly.JavaScript['games_move_right'] = function(block) {
  return 'right();\n';
};
