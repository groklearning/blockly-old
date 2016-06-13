
Blockly.Python['text_prompt'] = function(block) {
  var msg = Blockly.Python.quote_(block.getFieldValue('TEXT'));
  var code = 'input(' + msg + ')';
  var toNumber = block.getFieldValue('TYPE') == 'NUMBER';
  if (toNumber) {
    code = 'int(' + code + ')';
  }
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['io_input'] = function(block) {
  var msg = Blockly.Python.valueToCode(block, 'TEXT',
    Blockly.Python.ORDER_NONE) || '\'\'';
  var code = 'input(' + msg + ')';
  var type = block.getFieldValue('TYPE');
  if (type === 'NUMBER') {
    code = 'int(' + code + ')';
  } else if (type === 'FLOAT') {
    code = 'float(' + code + ')';
  }
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['io_ask_text'] = function(block) {
  var msg = Blockly.Python.valueToCode(block, 'TEXT',
    Blockly.Python.ORDER_ADDITIVE) || '\'\'';
  var code = 'input(' + msg + ' + \' \')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['io_ask_text_simple'] = function(block) {
  Blockly.Python.definitions_['def_ask_text'] = 'def ask_text(question):\n  return input(question + \' \')\n';
  var msg = Blockly.Python.valueToCode(block, 'TEXT',
    Blockly.Python.ORDER_NONE) || '\'\'';
  var code = 'ask_text(' + msg + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['io_ask_num'] = function(block) {
  var msg = Blockly.Python.valueToCode(block, 'TEXT',
    Blockly.Python.ORDER_ADDITIVE) || '\'\'';
  var code = 'float(input(' + msg + ' + \' \'))';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['io_ask_num_simple'] = function(block) {
  Blockly.Python.definitions_['def_ask_num'] = 'def ask_num(question):\n  prompt = question + \' \'\n  while True:\n    try:\n      val = input(prompt)\n      res = float(val)\n      return int(res) if res == int(res) else res\n    except ValueError:\n      prompt = \'The value {} is not a number. {} \'.format(val, question)\n';
  var msg = Blockly.Python.valueToCode(block, 'TEXT',
    Blockly.Python.ORDER_NONE) || '\'\'';
  var code = 'ask_num(' + msg + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['text_print0'] = function(block) {
  return 'print()\n';
};

Blockly.Python['io_print0'] = function(block) {
  return 'print()\n';
};

Blockly.Python['text_print'] = function(block) {
  // Print statement.
  var argument0 = Blockly.Python.valueToCode(block, 'TEXT',
      Blockly.Python.ORDER_NONE) || '\'\'';
  return 'print(' + argument0 + ')\n';
};

Blockly.Python['io_print1'] = function(block) {
  // Print statement.
  var argument0 = Blockly.Python.valueToCode(block, 'ANY0',
      Blockly.Python.ORDER_NONE) || '\'\'';
  return 'print(' + argument0 + ')\n';
};

Blockly.Python['io_print2'] = function(block) {
  // Print statement.
  var argument0 = Blockly.Python.valueToCode(block, 'ANY0',
      Blockly.Python.ORDER_NONE) || '\'\'';
  var argument1 = Blockly.Python.valueToCode(block, 'ANY1',
      Blockly.Python.ORDER_NONE) || '\'\'';
  return 'print(' + argument0 + ', ' + argument1 + ')\n';
};

Blockly.Python['io_print3'] = function(block) {
  // Print statement.
  var argument0 = Blockly.Python.valueToCode(block, 'ANY0',
      Blockly.Python.ORDER_NONE) || '\'\'';
  var argument1 = Blockly.Python.valueToCode(block, 'ANY1',
      Blockly.Python.ORDER_NONE) || '\'\'';
  var argument2 = Blockly.Python.valueToCode(block, 'ANY2',
      Blockly.Python.ORDER_NONE) || '\'\'';
  return 'print(' + argument0 + ', ' + argument1 + ', ' + argument2 + ')\n';
};

Blockly.Python['io_print4'] = function(block) {
  // Print statement.
  var argument0 = Blockly.Python.valueToCode(block, 'ANY0',
      Blockly.Python.ORDER_NONE) || '\'\'';
  var argument1 = Blockly.Python.valueToCode(block, 'ANY1',
      Blockly.Python.ORDER_NONE) || '\'\'';
  var argument2 = Blockly.Python.valueToCode(block, 'ANY2',
      Blockly.Python.ORDER_NONE) || '\'\'';
  var argument3 = Blockly.Python.valueToCode(block, 'ANY3',
      Blockly.Python.ORDER_NONE) || '\'\'';
  return 'print(' + argument0 + ', ' + argument1 + ', ' + argument2 + ', ' + argument3 + ')\n';
};

Blockly.Python['io_print5'] = function(block) {
  // Print statement.
  var argument0 = Blockly.Python.valueToCode(block, 'ANY0',
      Blockly.Python.ORDER_NONE) || '\'\'';
  var argument1 = Blockly.Python.valueToCode(block, 'ANY1',
      Blockly.Python.ORDER_NONE) || '\'\'';
  var argument2 = Blockly.Python.valueToCode(block, 'ANY2',
      Blockly.Python.ORDER_NONE) || '\'\'';
  var argument3 = Blockly.Python.valueToCode(block, 'ANY3',
      Blockly.Python.ORDER_NONE) || '\'\'';
  var argument4 = Blockly.Python.valueToCode(block, 'ANY4',
      Blockly.Python.ORDER_NONE) || '\'\'';
  return 'print(' + argument0 + ', ' + argument1 + ', ' + argument2 + ', ' + argument3 + ', ' + argument4 + ')\n';
};
