---
title: Javascript - 103 | Types & Cast-Coercion
date: "2022-09-26T23:46:37.121Z"
template: "post"
draft: false
slug: "js-103"
category: "JavaScript Fundamental"
tags:
  - "Javascript"
  - "Types"
  - "Casting"
  - "Coercion"
description: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn"
socialImage: "/media/js103.gif"
---

Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

![Javascript code](./media/js103.gif)


 | Section                   | Topic                                                                                                                                                                                                                                                                                                         |
 | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | **JS Types**              |                                                                                                                                                                                                                                                                                                               |
 | **-Primitives**           | [1 boolean](#primitive)<br />[2 null](#null)<br />[3 undefined](#undefined)<br />[4 number](#number) & [bigInt](#bigint)<br />[5 string](#string)<br />[6 Symbol](#symbol)<br />                                                                                                                              |
 | **-Objects**              | [Object](#objects)                                                                                                                                                                                                                                                                                            |
 | **-Casting and Coercion** | [1. Casting - (Explicit Conversion)](#casting-explicit-conversion)<br />[2. Coercion - (Implicit Conversion)](#coercion-implicit-conversion)<br />[2.1 Coercion to number](#coercion-to-number)<br />[2.2 Coercion to string](#coercion-to-string)<br />[2.3 Coercion to boolean](#coercion-to-boolean)<br /> |
 | **JS Data**               | [Array](#array)                                                                                                                                                                                                                                                                                               |
 | **-Indexed Collection**   | [Array](#array)                                                                                                                                                                                                                                                                                               |
 | **-Keyed Collection**     | [Map](#map)<br />[WeakMap](#weakmap)<br />[Set](#set)<br />[WeakSet](#weakset)<br />                                                                                                                                                                                                                          |
 | **-Structured**           | [JSON](#json)                                                                                                                                                                                                                                                                                                 |


# JS Types
The set of types in the JavaScript language consists of **primitive values** and **objects**.

| JS Type   | typeof return value | Object wrapper |
| --------- | ------------------- | -------------- |
| Null      | "object"            | N/A            |
| Undefined | "undefined"         | N/A            |
| Boolean   | "boolean"           | Boolean        |
| Number    | "number"            | Number         |
| BigInt    | "bigint"            | BigInt         |
| String    | "string"            | String         |
| Symbol    | "symbol"            | Symbol         |

## Primitive 

> (immutable datum represented directly at the lowest level of the language)

### `Boolean`
 - type represents a logical entity and can have two values: true and false

   [👉 Read more about `Boolean` and its usage @ MDN](#https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### `Null`
 - type has exactly one value: null

   [👉 Read more about `null` and its usage @ MDN](#https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null)

### `Undefined`
 - A variable that has not been assigned a value has the value undefined
   
   [👉 Read more about `undefined` and its usage @ MDN](#https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

### `Number`
 - type is a double-precision 64-bit binary format IEEE 754 value. 
 - It is capable of storing positive floating-point numbers between 
  
    2^-1074 (`Number.MIN_VALUE`) and 2^1024 (`Number.MAX_VALUE`) 

   as well as negative floating-point numbers between
  
   between -(2^-1074) and -(2^1024)
 - But it can only safely store integers in the range 
  
   (2^53 − 1) (`Number.MIN_SAFE_INTEGER`) to 2^53 − 1 (`Number.MAX_SAFE_INTEGER`).

- You can check if a number is within the range of safe integers using `Number.isSafeInteger()`. Outside the range from `Number.MIN_SAFE_INTEGER` to `Number.MAX_SAFE_INTEGER`, JavaScript can no longer safely represent integers; they will instead be represented by a double-precision floating point approximation.

   Values outside the range ±(2^-1074 to 2^1024) are automatically converted:

  - Positive values greater than Number.MAX_VALUE are converted to `+Infinity`.
  - Positive values smaller than Number.MIN_VALUE are converted to +0.
  - Negative values smaller than -Number.MAX_VALUE are converted to `-Infinity`.
  - Negative values greater than -Number.MIN_VALUE are converted to -0.

- +Infinity and -Infinity behave similarly to mathematical infinity, but with some slight differences; see `Number.POSITIVE_INFINITY` and `Number.NEGATIVE_INFINITY` for details.

- The Number type has only one integer with multiple representations: 0 is represented as both -0 and +0 (where 0 is an alias for +0). 
  
   In practice, there is almost no difference between the different representations; for example, +0 === -0 is true. However, you are able to notice this when you divide by zero:

   ```javascript
   console.log(42 / +0); // Infinity
   console.log(42 / -0); // -Infinity
   ```
   Although a number often represents only its value, JavaScript provides binary (bitwise) operators.

   [👉 Read more about `Number` and its usage @ MDN](#https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

### `BigInt`
- type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. 
  
   With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.

- A BigInt is created by appending n to the end of an integer or by calling the constructor.

- You can obtain the largest safe value that can be incremented with Numbers by using the constant Number.MAX_SAFE_INTEGER. With the introduction of BigInts, you can operate with numbers beyond the Number.MAX_SAFE_INTEGER.

- This example demonstrates, where incrementing the Number.MAX_SAFE_INTEGER returns the expected result:

   ```javascript
   // BigInt
   const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
   x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

   // Number
   Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992
   ```

- You can use the operators +, *, -, **, and % with BigInts—just like with Numbers. A BigInt is not strictly equal to a Number, but it is loosely so.

   A BigInt behaves like a Number in cases where it is converted to boolean: if, ||, &&, Boolean, !.

   BigInts cannot be operated on interchangeably with Numbers. Instead a TypeError will be thrown.

    >**NaN** ("Not a Number") is typically encountered when the result of an arithmetic operation cannot be expressed as a number. It is also the only value in JavaScript that is not equal to itself

   [👉 Read more about `BigInt` and its usage @ MDN](#https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

### `String` 
- type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it.

- JavaScript `strings are immutable`. This means that once a string is created, it is not possible to modify it.

- However, it is still possible to create another string based on an operation on the original string. For example:

   A substring of the original by picking individual letters or using String.substr().

   A concatenation of two strings using the concatenation operator (+) or String.concat(). 

   [👉 Read more about `String` and its usage @ MDN](#https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### `Symbol` 
- A Symbol is a unique and immutable primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called "atoms".
Objects (collections of properties)

   [👉 Read more about `Symbol` and its usage @ MDN](#https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

## Objects
An object is a value in memory which is possibly referenced by an identifier.

### Properties
In JavaScript, objects can be seen as a collection of properties. With the object literal syntax, a limited set of properties are initialized; then properties can be added and removed. Property values can be values of any type, including other objects, which enables building complex data structures. Properties are identified using key values. A key value is either a String value or a Symbol value.

There are two types of object properties: The data property and the accessor property. Each property has corresponding attributes. Each attribute is accessed internally by the JavaScript engine, but you can set them through Object.defineProperty(), or read them through Object.getOwnPropertyDescriptor(). You can read more about the various nuances on the Object.defineProperty() page.

### Data property
Data properties associate a key with a value. It can be described by the following attributes:

- `value` : The value retrieved by a get access of the property. Can be any JavaScript value.

- `writable` : A boolean value indicating if the property can be changed with an assignment.

- `enumerable` : A boolean value indicating if the property can be enumerated by a for...in loop. See also Enumerability and ownership of properties for how enumerability interacts with other functions and syntaxes.

- `configurable` : A boolean value indicating if the property can be deleted, can be changed to an accessor property, and can have its attributes changed.

### Accessor property
Associates a key with one of two accessor functions (get and set) to retrieve or store a value.

> It's important to recognize it's accessor property — not accessor method. We can give a JavaScript object class-like accessors by using a function as a value — but that doesn't make the object a class.

An accessor property has the following attributes:

- `get` : A function called with an empty argument list to retrieve the property value whenever a get access to the value is performed. See also getters. May be undefined.

- `set` : A function called with an argument that contains the assigned value. Executed whenever a specified property is attempted to be changed. See also setters. May be undefined.

- `enumerable` : A boolean value indicating if the property can be enumerated by a for...in loop. See also Enumerability and ownership of properties for how enumerability interacts with other functions and syntaxes.

- `configurable` : A boolean value indicating if the property can be deleted, can be changed to a data property, and can have its attributes changed.

"Normal" objects, and functions
A JavaScript object is a mapping between keys and values. Keys are strings (or Symbols), and values can be anything. This makes objects a natural fit for hashmaps.

[👉 Read more about `Object` and its usage @ MDN](#https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)


# JS Data - Indexed Collection

## Array
[👉 Read more about `Array` and its usage @ MDN](#https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

# Types Casting & Coercion

In JS, 
 - The process of type conversion is called “type coercion”, when it is done implicitly. [ JS is loosely typed language ]
 - When it is done explicitly, it is called “type casting”

Generally, when developer talk about coercion , they usually refer to both types, implicit and explicit.The main difference between these two is that one is usually done on purpose while the other automatically, by the language.

## Casting (Explicit Conversion)  
Explicit coercion happens when JavaScript developers decide to convert value from another using specific function. For example, you can use Number() function to convert some type to a number, or String() to a string
```javascript
// Using explicit coercion to convert types to a number
Number('55') // 55
Number('dwarf') // Nan
Number(false) // 0
Number(true) // 1
Number([]) // 1
Number({}) // NaN
Number(null) // 0
Number(undefined) // NaN

// Use explicit coercion to convert types to a string
String(99) // '99'
String(true) // 'true'
String(false) // 'false'
String([]) // ''
String(['one', 'two']) // 'one,two'
String({}) // '[object Object]'
String(Infinity) // 'Infinity'
String(null) // 'null'
String(undefined) // 'undefined'
```

## Coercion (Implicit Conversion)

Type coercion in JavaScript is one of the topics that can be tricky. It is also one of the topics every JavaScript developer has to learn and understand.

One advantage, or disadvantage, of weakly typed languages is that it allows for implicit type coercion to happen. This usually happens in two situations. The first one is when you use some operator along with two or more different values. Here, JavaScript will take those values and convert them as needed to make that operation happen

For example, let’s say you try to add a string to a number. In this case, JavaScript will take the number, convert it to a string. After that, it will concatenate that converted number, now string, with the string you wanted to add.

```javascript
// Implicit conversion of a number to string
13 + '14' // '1314'
123 + '' // '123
7 + ' roses' // '7 roses'
```
Another example can be when you try to compare a number with another number that is defined as a string. In this case, JavaScript will first convert that number defined as a string to a number. After that, it will convert the real number with the converted. The same happens if you try to multiply those numbers.
```javascript
// Implicit conversion of a string to number
4 < '5' // true
6 > '15' // false
95 * '15' // 1425
```
The second situation when implicit type coercion happens is when you use if...else statement or ternary operator. It doesn’t matter what you use as the condition. The result will always be a boolean, either true or false. This is also why it is important to remember what are falsy and truthy values in JavaScript.
```javascript
// Implicit conversion and truthy and falsy values

// Some truthy values
if (5) true // true
if ('test') true // true
if ({}) true // true
if ([]) true // true


// Some falsy values
'' ? true : false // false
if (!'') true // true
0 ? true : false // false
if (!0) true // true
null ? true : false // false
if (!null) true // true
NaN ? true : false // false
if (!NaN) // true
```
There are 3 types of coercion

### Coercion to number

```javascript
// Implicit coercion to number
7 > '10' // false => becomes: 7 > 10
+'88' // becomes 88
65 != '56' // true, => becomes: 65 != 56
15 / null // infinity
false | 0 // 0


// Explicit coercion to number
Number('678') // 678
Number('13m') // NaN
Number(' 51 ') // 51
Number('-65.9') // -65.9
Number('\n') // 0
Number('\n13') // 13
Number('\t') // 0
Number('\t695') // 695
Number([]) // 0
Number(null) // 0
Number(undefined) // NaN
```

Implicit, or type coercion, is more tricky. There are multiple ways in which it can be triggered. 

The first one are comparison operators, the >, <, <= and >=. When you use any of these operators JavaScript will automatically coerce the values you used with one of these operators to number. Implicit coercion to number will also happen when you use bitwise operators, the |, &, ^ and ~. It will also happen if you use arithmetic operators, the -, +, *, / and %.

One exception here is the binary + operator. This operator will not trigger coercion to number if any of the values is type of a string. What will happen instead is coercion to a string. Lastly, implicit coercion will happen if you use the loose equality operator ==. This also includes the loose not equal !=.

Another exception here. JavaScript will not do implicit coercion to a number if you use == or != and both values are strings. This probably makes sense, but it is still worth mentioning, just in case. One last thing about coercion to number. When you want to convert a string to a number, JavaScript will first remove any leading and trailing white space.

JavaScript will also remove any new line (\n) and tab (\t) characters in the string. If the remaining string doesn’t contain a valid number it will be coerced to NaN. Otherwise, it will be coerced into a number. If the remaining string will be empty it will be coerced to 0. This will also happen with null.

### Coercion to string

```javascript
// Implicit coercion to string
56 + ' words' // '56 words'
'number ' + 17 // 'number 17'
7 + ' dwarfs and ' + 1 + ' Snow White' // '7 dwarfs and 1 Snow White'
'' + 15 // '15'

// Explicit coercion to string
String(true) // 'true'
String(false) // 'false'
String(15.5) // '15.5'
String(-650) // '-650'
String(Infinity) // 'Infinity'
String([]) // ''
String(['Jacket', 15]) // 'Jacket,15'
String(null) // 'null'
String(undefined) // 'undefined'
String({}) // '[object Object]'

```
Explicit coercion to a string is just as easy as coercion to a number. All you have to do is use String() function. Implicit coercion to a string is just as easy. When you want to trigger implicit coercion you have to use the binary + operator, along with at least one string.
```javascript
// Coercing types to string with toString() method
58.toString() // SyntaxError: Identifier directly after number
(58).toString() // '58'
true.toString() // 'true'
false.toString() // 'false'
['JS', 'TS'].toString() // 'JS,TS'
undefined.toString() // TypeError: Cannot read property 'toString' of undefined
null.toString() // TypeError: Cannot read property 'toString' of null
({name: 'Joe'}).toString() // '[object Object]'
Symbol('name').toString() // 'Symbol(name)'


// Using toString() with radix parameter
(15).toString(2) // '1111'
(15).toString(8) // '30'
(15).toString(16) // 'f'
```


Aside to the String() there is also toString() method. This method also allows you to coerce various types to strings. You can use this method with numbers, booleans, arrays, objects, dates and also Symbols. Don’t use it with null or undefined. If you want to use it to convert a number, or an object, you have to wrap it with parentheses to avoid syntax errors.

One more thing for numbers. You can also specify radix parameter. The method will then convert the number to the base according to the radix parameter and then into a string.

### Coercion to boolean
```javascript
// Implicit coercion to boolean

if (0) {/* Do something */} // logical context
!!7 // true
99 || 'JS' // 99
!!0 // false (0 is falsy value)
!!'' // false (empty string is falsy value)
!!null // false (null is falsy value)
!!undefined // false (null is falsy value)

// Explicit coercion to boolean
Boolean(15) // true
Boolean(-15) // true
Boolean('') // false
Boolean('Syntax') // true
Boolean(true) // true
Boolean(0) // false
Boolean(-0) // false
Boolean(Infinity) // true
Boolean(-Infinity) // true
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean([]) // true
Boolean({}) // true
Boolean(Symbol()) // true
Boolean(function() {}) // true
```
When you want to explicitly convert something in boolean you can do that with Boolean() function. Implicit coercion will happen in two situations. The first situations is a logical context. For example, inside the if...else statement. The second situation is when you use one of the logical operators, the ||, && or !.

Strict and loose equality
One topic related to type coercion is equality. In JavaScript, there are two types of eventuality. The first one is loose equality, either == or !=. The second one is strict equality, either === or !==. The difference between those is that one allows for type coercion to happen while the other doesn’t.

The first one, loose equality, is the one that allows for type coercion to happen. When you use loose equality to check if some values are equal, JavaScript will do two things. First, it will check if the two values are the same type. If not, it will coerce one into another. Then, it will check if those values are the same.

When you use strict equality, JavaScript will not try to coerce one value into another. Instead, it will do two checks. First, it will check if those values are the same. Second, it will check if their types are the same. Only if both conditions are true, the result will be true. Otherwise, the result will be false.

```javascript
// Loose equality and coercion
0 == false // true (0 is falsy value) - coerced to false == false
0 == true // false - coerced to false == false
1 == true // true (1 is truthy value) - coerced to true == true
1 == false // false - coerced to true == false
'15' == 15 // true - coerced to '15' == '15'
15 == '15' // true - coerced to '15' == '15'
null == undefined // true - coerced to false == false
undefined == null // true - coerced to false == false


// Strict equality and coercion
0 === false // false - number is not a boolean
0 === true // false - number is not a boolean
1 === true // false - number is not a boolean
1 === false // false - number is not a boolean
'15' === 15 // false - string is not a number
15 === '15' // false - number is not a string
null === undefined // false - null is not undefined
undefined === null // false - undefined is not null
```
As you can see, loose equality can lead to results you might not expect. The best way to avoid this, and also to create more reliable equality checks, is to use strict equal. With strict equal, JavaScript will not be able to use type coercion. It will also always compare the types of values, instead of only the values.


---


# **Declarations & Statements**
---
# Declaring Variables 
## `var`
## `let`
## `const` 


---
# Declaring functions & classes  
## `function` 
## `function*` 
## `async function` 
## `async function*` 
## `class` 


---
# Control Flow Statements 
## `return` 
## `break` 
## `continue` 
## `throw` 
## `if...else` 
## `switch`  
## `try...catch`  


---
Looping Statements  
## `while` 
## `do-while` 
## `for` 
## `for...in` 
## `for...of` 
## `for await...of`


---
Misc. Statements  
## `empty` 
## `block` 
## `debugger` 
## `export` 
## `import` 
## `label` 
## `with`


---