
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
