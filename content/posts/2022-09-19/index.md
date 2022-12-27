---
title: JS-102 | Operators & Expressions
date: "2022-09-19T23:46:37.121Z"
template: "post"
draft: false
slug: "js-102"
category: "Javascript Fundamental"
tags:
  - "Javascript"
  - "Operators"
  - "Expressions"
description: "JS Operator is a symbol that tells the compiler or interpreter to perform specific mathematical, relational or logical operation and produce final result..."
socialImage: "/media/js102.gif"
--- 

JS Operator is a symbol that tells the compiler or interpreter to perform specific mathematical, relational or logical operation and produce final result.

![Javascript code](./media/js102.gif)


 | Section            | Topic                                                                                                                                                                                                                                                                      |
 | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | **JS Comments**    | [Comments](#comments)                                                                                                                                                                                                                                                      |
 | **JS Operators**   | [1 Unary](#unary)<br/>[2 Binary](#binary)<br/>[3 Ternary or Conditional](#ternary-or-conditional) <br/>[4 Assignment](#assignment)<br/>[5 Comparison](#comparison)<br/>[6 Arithmatic](#arithmatic)<br/>[7 Bitwise](#bitwise)<br/>[8 Logical](#logical)<br/>[9 Misc](#misc) |
 | **JS Expressions** | [Expressions](#expressions)                                                                                                                                                                                                                                                |


# Comments

- Comments behave like whitespace, and are discarded during script execution.
- Comments on method, exremely powerfull in describing purpose of method and documentation
- Comments on property, exremely powerfull in describing purpose of property and documentation

| Comment-Type        | Example                                                     |
| ------------------- | ----------------------------------------------------------- |
| single-line comment | `// a one line comment`                                     |
| multi-line comment  | `/* this is a longer, `<br/>`* multi-line comment`<br/>`*/` |
| nested comment      | `/* You can't, but, /* nest comments */ end */`             |

> You might also see a third type of comment syntax at the start of some JavaScript files, which looks something like this: `#!/usr/bin/env node.` 
>
> This is called hashbang comment syntax, and is a special comment used to specify the path to a particular JavaScript engine that should execute the script. See Hashbang comments for more details.


# Operators

## Unary

Operators that operate on single operand

| Name           | Operator | Meaning                                                                                                                                                                                                               | Examples                                                                                           |
| -------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Unary Plus     | **+**    | Attempts to convert the operand to a number, if it is not already <br /> eg. (+"3" returns 3) , (+true returns 1) 1                                                                                                   | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)     |
| Increment      | **++**   | Adds one to its operand. <br/>If used as a prefix operator (++x), returns the value of its operand after adding one; if used as a postfix operator (x++), returns the value of its operand before adding one          | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)      |
| Decrement      | **- -**  | Subtracts one from its operand. <br/>If used as a prefix operator (- -x), returns the value of its operand after adding one; if used as a postfix operator (x- -), returns the value of its operand before adding one | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)      |
| Unary Negation | **-**    | Returns the negation of its operand <br />eg. if x is 3, then -x returns -3                                                                                                                                           | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation) |


## Binary

Operator that operate on two operands like [Arithematic Operators](#arithmatic)


## Ternary or Conditional 

operator that takes three operands

| Name                   | Operator | Meaning                                                                                                                                                                                                                                                                                                                                    | Examples                                                                                                 |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| Ternary or Conditional | **? :**  | is the only operator that takes three operands: a condition followed by a question mark (**?**), then an expression to execute if the condition is truthy followed by a colon (**:**), and finally the expression to execute if the condition is falsy. <br />This operator is frequently used as an alternative to an if...else statement | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) |


## Assignment
| Name                                 | Operator              | Meaning                    | Examples                                                                                                            |
| ------------------------------------ | --------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Assingment                           | x **=** y             | x = y                      | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)                      |
| Addition Assignment                  | x **+=** y            | x = x + y                  | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment)             |
| Subtraction Assignment               | x **-=** y            | x = x - y                  | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)          |
| Multiplication Assignment            | x ***=** y            | x = x * y                  | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)       |
| Division Assignment                  | x **/=** y            | x = x / y                  | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment)             |
| Remainder Assignment                 | x **%=** y            | x = x % y                  | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)            |
| Exponentiation Assignment            | x ****=** y           | x = x ** y                 | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)       |
| Left Shift Assignment                | x **<<=** y           | x = x << y                 | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)           |
| Right Shift Assignment               | x **>>=** y           | x = x >> y                 | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)          |
| Unsigned-Right-Shift Assignment      | x **>>>=** y          | x = x >>> y                | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) |
| Bitwise AND Assignment               | x **&=** y            | x = x & y                  | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)          |
| Bitwise XOR Assignment               | x **^=** y            | x = x ^ y                  | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)          |
| Bitwise OR Assignment                | x **&#124;=** y       | x = x &#124; y             | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)           |
| Logical AND Assignment               | x **&&=** y           | x = x && (x = y)           | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)          |
| Logical OR Assignment<br/>(Shorting) | x **&#124;&#124;=** y | x = x &#124;&#124; (x = y) | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)           |
| Logical Nullish Assignment           | x **??=** y           | x = x ?? (x = y)           | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment)      |

> Bitwise operator can also used with boolean

**Destructring Assignment** [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

- **Array Desctrucutring**
```javascript
var foo =['one','two','three'];

// without destructuring 
var one = foo[0];
var two = foo[1];
var three = foo[2];

// with destructuring
var [one,two,three] = foo;
```
- **Object Desctrucutring**

```javascript
var bar ={one:'one',two:'two',three:'three'};

// without destructuring 
var one = bar.one;
var two = bar.two;
var three = bar.three;

// with destructuring
var {one,two,three} = bar;
```

## Comparison
| Name                                  | Operator | Meaning                                                                                   | Examples                                                                                                           |
| ------------------------------------- | -------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Equality                              | **==**   | Returns true if the operands are equal                                                    | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#equality)                       |
| Inequality                            | **!=**   | Returns true if the operands are not equal                                                | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#inequality)                     |
| Identity <br/>(strict equality)       | **===**  | Returns true if the operands are equal and of the same type                               | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#identity)                       |
| Nonidentity <br/> (strict inequality) | **!==**  | Returns true if the operands are of the same type but not equal, or are of different type | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#nonidentity)                    |
| Greater than                          | **>**    | Returns true if the left operand is greater than the right operand                        | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#greater_than_operator)          |
| Greater Than Or Equal                 | **>=**   | Returns true if the left operand is greater than or equal to the right operand            | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#greater_than_or_equal_operator) |
| Less Than                             | **<**    | Returns true if the left operand is less than the right operand.                          | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#less_than_operator)             |
| Less Than Or Equal                    | **<=**   | Returns true if the left operand is less than or equal to the right operand.              | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#less_than_or_equal_operator)    |


## Arithmatic
| Name           | Operator | Meaning                                                                                                                                                           | Examples                                                                                           |
| -------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Remainder      | **%**    | Returns the integer remainder of dividing two operands <br/> It always takes the sign of the dividend                                                             | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)      |
| Division       | **/**    | Returns the integer quotient of dividing two operands                                                                                                             | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division)       |
| Multiplication | *        | Returns the product of two operands                                                                                                                               | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication) |
| Addition       | **+**    | Returns the sum of two operands                                                                                                                                   | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition)       |
| Subtraction    | **-**    | Returns the difference of two operands                                                                                                                            | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)    |
| Exponentiation | **       | Returns the result of raising the first operand to the power of the second operand <br />It is equivalent to Math.pow, except it also accepts BigInts as operands | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation) |


## Bitwise

Operater operates on bit representation of operand. further classfies in to 2 more categories

### Logical bitwise
| Name        | Operator   | Meaning                                                                                                                                        | Examples                                                                                        |
| ----------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Bitwise AND | **&**      | The bitwise AND operator ( & ) returns a 1 in each bit position for which the corresponding bits of both operands are 1s                       | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND) |
| Bitwise OR  | **&#124;** | The bitwise OR operator ( &#124; ) returns a 1 in each bit position for which the corresponding bits of either or both operands are 1s.        | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)  |
| Bitwise XOR | **^**      | The bitwise XOR operator (^) returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.         | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR) |
| Bitwise NOT | **~**      | The bitwise NOT operator (~) inverts the bits of its operand. Like other bitwise operators, it converts the operand to a 32-bit signed integer | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT) |


### Shift bitwise
| Name        | Operator | Meaning                                                                                                                                                                                                  | Examples                                                                                        |
| ----------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Left Shift  | **<<**   | The left shift operator (<<) shifts the first operand the specified number of bits, modulo 32, to the left. Excess bits shifted off to the left are discarded. Zero bits are shifted in from the right   | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift)  |
| Right Shift | **>>**   | The right shift operator (<<) shifts the first operand the specified number of bits, modulo 32, to the right. Excess bits shifted off to the right are discarded. Zero bits are shifted in from the left | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift) |


## Logical
| Name                            | Operator         | Meaning                                                                                                                                                                                                                                                                                                                                                                                                                                      | Examples                                                                                        |
| ------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Logical AND                     | **&&**           | The logical AND ( && ) operator (logical conjunction) for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.<br /> More generally, the operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.                                                                              | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) |
| Logical OR <br /> Short Circuit | **&#124;&#124;** | The logical OR ( &#124;&#124; ) operator (logical disjunction) for a set of operands is true if and only if one or more of its operands is true. It is typically used with boolean (logical) values. <br /> When it is, it returns a Boolean value. However, the &#124;&#124; operator actually returns the value of one of the specified operands, so if this operator is used with non-Boolean values, it will return a non-Boolean value. | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)  |
| Logical NOT                     | **!**            | The logical NOT (!) operator (logical complement, negation) takes truth to falsity and vice versa. It is typically used with boolean (logical) values.<br /> When used with non-Boolean values, it returns false if its single operand can be converted to true; otherwise, returns true.                                                                                                                                                    | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT) |


## Miscellaneous

| Name                                                     | Operator       | Meaning                                                                                                                                                                                                                                                                                                                    | Examples                                                                                                        |
| -------------------------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| instanceof                                               | **instanceof** | The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. Its behavior can be customized with Symbol.hasInstance.                                                                                         | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)                  |
| typeof                                                   | **typeof**     | The typeof operator returns a string indicating the type of the unevaluated operand.                                                                                                                                                                                                                                       | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)                      |
| this                                                     | **this**       | The value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called.                                                                                                                                   | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)                        |
| super                                                    | **super**      | The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor. <br />The super.prop and super[expr] expressions are valid in any method definition in both classes and object literals. The super(...args) expression is valid in class constructors. | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)                       |
| void                                                     | **void**       | The void operator evaluates the given expression and then returns undefined.                                                                                                                                                                                                                                               | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)                        |
| null                                                     | **null**       | The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.                                                                                                                                                          | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null)                        |
| in                                                       | **in**         | The in operator returns true if the specified property is in the specified object or its prototype chain.                                                                                                                                                                                                                  | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)                          |
| await                                                    | **await**      | The await operator is used to wait for a Promise. It can only be used inside an async function within regular JavaScript code; however it can be used on its own with JavaScript modules.                                                                                                                                  | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)                       |
| delete                                                   | **delete**     | The JavaScript delete operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.                                                                                                                                                            | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)                      |
| new                                                      | **new**        | The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.                                                                                                                                                                  | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)                         |
| Nullish coalescing                                       | **??**         | returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand                                                                                                                                                                                 | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) |
| Optional Chaining <br />or Elvis <br />or Safe traversal | **?.**         | The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined.<br /> When used with function calls, it returns undefined if the given function does not exist                     | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)           |


# Expressions

> An expression is any valid unit of code that resolves to a value.

- Every syntactically valid expression resolves to some value but conceptually, there are two types of expressions: with side effects (for example: those that assign value to a variable) and those that in some sense evaluate and therefore resolve to a value.
- The expression `x = 7` is an example of the first type. This expression uses the = operator to assign the value seven to the variable x. The expression itself evaluates to seven.
- The code `3 + 4 `is an example of the second expression type. This expression uses the + operator to add three and four together without assigning the result, seven, to a variable.

JavaScript has the following expression categories:
- Arithmetic: evaluates to a number, for example 3.14159. (Generally uses arithmetic operators.)
- String: evaluates to a character string, for example, "Fred" or "234". (Generally uses string operators.)
- Logical: evaluates to true or false. (Often involves logical operators.)
- Primary expressions: Basic keywords and general expressions in JavaScript.
- **Left-hand-side expressions**: Left values are the destination of an assignment.
  
  eg 

  You can use the `new` operator to create an instance of a user-defined object type or of one of the built-in object types. Use new as follows:
  ```javascript
  var objectName = new objectType([param1, param2, ..., paramN]);
  ```



| Name                | Expression          | Meaning                                                                                                                                                                                                                                                                                                          | Examples                                                                                     |
| ------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| class expression    | class expression    | The class expression is one way to define a class. Similar to function expressions, class expressions can be named or unnamed. If named, the name of the class is local to the class body only.                                                                                                                  | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class)    |
| function expression | function expression | The function keyword can be used to define a function inside an expression.<br />You can also define functions using the Function constructor and a function declaration.                                                                                                                                        | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function) |
| regular expression  | regular expression  | Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String. | [View](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)    |


