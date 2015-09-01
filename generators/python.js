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
 * @fileoverview Helper functions for generating Python for blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Python');

goog.require('Blockly.Generator');


Blockly.Python = new Blockly.Generator('Python');

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
Blockly.Python.addReservedWords(
  // Keywords.
  'and,as,assert,break,class,continue,def,del,elif,else,except,finally,for,from,global,if,import,in,is,lambda,or,nonlocal,not,pass,raise,return,try,while,with,yield,False,None,True,' +
  // Helpers.
  'copyright,credits,exit,license,quit,' +
  // Builtins.
  'abs,all,any,ascii,bin,bool,bytearray,bytes,callable,chr,classmethod,compile,complex,delattr,dict,dir,divmod,enumerate,eval,exec,filter,float,format,frozenset,getattr,globals,hasattr,hash,help,hex,id,input,int,isinstance,issubclass,iter,len,list,locals,map,max,memoryview,min,next,object,oct,open,ord,pow,print,property,range,repr,reversed,round,set,setattr,slice,sorted,staticmethod,str,sum,super,tuple,type,vars,zip,NotImplemented,Ellipsis,' +
  '__debug__,__import__,__name__,' +
  // Exceptions.
  'ArithmeticError,AssertionError,AttributeError,BaseException,BufferError,BytesWarning,DeprecationWarning,EOFError,EnvironmentError,Exception,FloatingPointError,FutureWarning,GeneratorExit,IOError,ImportError,ImportWarning,IndentationError,IndexError,KeyError,KeyboardInterrupt,LookupError,MemoryError,NameError,NotImplementedError,OSError,OverflowError,PendingDeprecationWarning,ReferenceError,RuntimeError,RuntimeWarning,StopIteration,SyntaxError,SyntaxWarning,SystemError,SystemExit,TabError,TypeError,UnboundLocalError,UnicodeDecodeError,UnicodeEncodeError,UnicodeError,UnicodeTranslateError,UnicodeWarning,UserWarning,ValueError,Warning,ZeroDivisionError,' +
  'BlockingIOError,BrokenPipeError,ChildProcessError,ConnectionAbortedError,ConnectionError,ConnectionRefusedError,ConnectionResetError,FileExistsError,FileNotFoundError,InterruptedError,IsADirectoryError,NotADirectoryError,PermissionError,ProcessLookupError,ResourceWarning,TimeoutError'
);

/**
 * Order of operation ENUMs.
 * http://docs.python.org/reference/expressions.html#summary
 */
Blockly.Python.ORDER_ATOMIC = 0;            // 0 "" ...
Blockly.Python.ORDER_COLLECTION = 1;        // tuples, lists, dictionaries
Blockly.Python.ORDER_STRING_CONVERSION = 1; // `expression...`
Blockly.Python.ORDER_MEMBER = 2;            // . []
Blockly.Python.ORDER_FUNCTION_CALL = 2;     // ()
Blockly.Python.ORDER_EXPONENTIATION = 3;    // **
Blockly.Python.ORDER_UNARY_SIGN = 4;        // + -
Blockly.Python.ORDER_BITWISE_NOT = 4;       // ~
Blockly.Python.ORDER_MODULO = 5;            //  %
Blockly.Python.ORDER_DIVISION = 6;          // / //
Blockly.Python.ORDER_MULTIPLICATIVE = 7;    // *
Blockly.Python.ORDER_SUBTRACTIVE = 8;       // -
Blockly.Python.ORDER_ADDITIVE = 9;          // +
Blockly.Python.ORDER_BITWISE_SHIFT = 10;    // << >>
Blockly.Python.ORDER_BITWISE_AND = 11;      // &
Blockly.Python.ORDER_BITWISE_XOR = 12;      // ^
Blockly.Python.ORDER_BITWISE_OR = 13;       // |
Blockly.Python.ORDER_RELATIONAL = 14;       // in, not in, is, is not,
                                            //     <, <=, >, >=, <>, !=, ==
Blockly.Python.ORDER_LOGICAL_NOT = 15;      // not
Blockly.Python.ORDER_LOGICAL_AND = 16;      // and
Blockly.Python.ORDER_LOGICAL_OR = 17;       // or
Blockly.Python.ORDER_CONDITIONAL = 18;      // if else
Blockly.Python.ORDER_LAMBDA = 19;           // lambda
Blockly.Python.ORDER_NONE = 99;             // (...)

/**
 * Initialise the database of variable names.
 */
Blockly.Python.init = function() {
  // Create a dictionary of definitions to be printed before the code.
  Blockly.Python.definitions_ = Object.create(null);
  // Create a dictionary mapping desired function names in definitions_
  // to actual function names (to avoid collisions with user functions).
  Blockly.Python.functionNames_ = Object.create(null);

  if (Blockly.Variables) {
    if (!Blockly.Python.variableDB_) {
      Blockly.Python.variableDB_ =
          new Blockly.Names(Blockly.Python.RESERVED_WORDS_);
    } else {
      Blockly.Python.variableDB_.reset();
    }
  }
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.Python.finish = function(code) {
  // Convert the definitions dictionary into a list.
  var imports = [];
  var definitions = [];
  for (var name in Blockly.Python.definitions_) {
    var def = Blockly.Python.definitions_[name];
    if (def.match(/^(from\s+\S+\s+)?import\s+\S+/)) {
      imports.push(def);
    } else {
      definitions.push(def);
    }
  }
  var allDefs = imports.join('\n') + '\n\n' + definitions.join('\n\n');
  return allDefs.replace(/\n\n+/g, '\n\n').replace(/\n*$/, '\n\n\n') + code;
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.Python.scrubNakedValue = function(line) {
  return line + '\n';
};

/**
 * Encode a string as a properly escaped Python string, complete with quotes.
 * @param {string} string Text to encode.
 * @return {string} Python string.
 * @private
 */
Blockly.Python.quote_ = function(string) {
  // TODO: This is a quick hack.  Replace with goog.string.quote
  string = string.replace(/\\/g, '\\\\')
                 .replace(/\n/g, '\\\n')
                 .replace(/\%/g, '\\%')
                 .replace(/'/g, '\\\'');
  return '\'' + string + '\'';
};

/**
 * Common tasks for generating Python from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The Python code created for this block.
 * @return {string} Python code with comments and subsequent blocks added.
 * @private
 */
Blockly.Python.scrub_ = function(block, code) {
  var commentCode = '';
  // Only collect comments for blocks that aren't inline.
  if (!block.outputConnection || !block.outputConnection.targetConnection) {
    // Collect comment for this block.
    var comment = block.getCommentText();
    if (comment) {
      commentCode += this.prefixLines(comment, '# ') + '\n';
    }
    // Collect comments for all value arguments.
    // Don't collect comments for nested statements.
    for (var x = 0; x < block.inputList.length; x++) {
      if (block.inputList[x].type == Blockly.INPUT_VALUE) {
        var childBlock = block.inputList[x].connection.targetBlock();
        if (childBlock) {
          var comment = this.allNestedComments(childBlock);
          if (comment) {
            commentCode += this.prefixLines(comment, '# ');
          }
        }
      }
    }
  }
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = this.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};
