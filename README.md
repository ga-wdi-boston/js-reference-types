![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# JavaScript Reference Types

## Prerequisites

[JavaScript Basics](https://github.com/ga-wdi-boston/js-basics)

## Introduction

Exercising the JavaScript Reference Types.

## Objectives

By the end of this lesson, students should be able to:

-   Identify array, object, and function literals
-   Create and invoke functions with argument-dependent return values
-   Store, access, and update data values in objects and arrays
-   Iterate through an array or object and operate on its elements

## Reference types

The following is true for all reference types In JavaScript:
 `refVar instanceof Object === true`.

These three reference type are ubiquitous in JavaScript.

-   Plain Object
-   Array
-   Function

The first two are used as collections.  The last is encapsulated executable
 code.  All three can be created using reference type literals.

The following shows the simplest examples of these types created with literal
 syntax:

```js
let list;
let dictionary;
let code;

list = [];
dictionary = {};
code = function (){}; // or `code = () => {};`
```

And here is the equivalent using constructor function syntax (a topic we'll
 cover later):

```js
list = new Array();
dictionary = new Object();
code = new Function();
```

The literal syntax is more common and allows for functionality unavailable with
 the constructor function syntax.

You can think of each reference type as storing values.  You access the values
 stored in a function reference using invocation syntax, `code()`.  You access
 the values stored in an array using index syntax, `list[0]`.  And finally, you
 use member access to get the values from a plain object, `dictionary.name` or
 `dictionary['name']`.

A key difference between a reference and primitive type is best demonstrated
 with the following code:

```js
let primitive;
let otherPrimitive;
let reference;
let otherReference;

primitive = 2;
otherPrimitive = primitive;
prim = 7;

prim;
otherPrim;

reference = {};
otherReference = reference;

reference.property = 'value';

reference;

otherReference;
```

### Functions

In mathematics, a function maps one or more inputs to a single output.

JavaScript isn't that strict, allowing zero inputs or no specified output.

```js
let five = function five() {
  return 5;
};

let add = function add(a, b){
  a + b;
}
```

Strictly speaking, all JavaScript functions evaluate to a value, but that value
 is `undefined` if we do not provide a return (explicitly or implicitly).

What can we do with functions?

Functions provide important parts of the building blocks of programs,
 abstraction and encapsulation.

It is important to remember that console.log prints its argument to the
 `console` (the terminal using node, the console area of the debug tools using
 chrome) but does not return a value.

#### Parameters and Arguments

When you create a function, you specify the parameters (the formal parameters,
 variables local to the function).  When you call a function, you specify the
 arguments (whose values become the actual parameters, which are the values that
 the formal parameters are set to when your function executes).

In JavaScript, functions can be defined as taking zero or more arguments.

```js
let zero = function zero() {
  return 0;
};

let one = function one(param){
  return arg;
}

let three = function three(param1, param2, param3){
  return arg2;
}
```

### Arguments and Return values

```js
let addOne = (num) => num + 1;
```

What happens when we call a function with the wrong number of arguments?

How would you create a function with an optional argument?

### Collections

There are two general collection types.  The `list` and the `dictionary` (aka
 `hashmap`, `map`, `hash`, ...).

-   Lists store lists of things.
-   Dictionaries store uniquely named values.

In JavaScript we use Array and Object respectively to implement these collection
 types.

What's in a name?
Why call an array a list?
Why not call a dictionary an associative array?

#### List (Array)

```js
let fibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
```

#### Dictionary (Object)

```js
let seniorConsultant = {
  'given name':'Antony',
  surname:'Donovan',
  occupation: 'Senior Consultant',
};
let consultant = {};
```

### Code along

We'll be using the file `lib/collections.js` as a starting point to:

-   create a list of normalized words from a paragraph of text.
-   count words in a string.
-   get the unique words from a string.
-   count the unique words.
-   find the word frequencies (how many times does each unique word appear in
 the string).

We won't get to methods in detail until later, but there are three on String
 we'll need to create a list of normalized words:  `split`, which breaks a
 String into an Array;  `replace`, which makes substitutions; and `toUpperCase`,
 which does the obvious.

We'll also need two **Regular expressions**:

One or more whitespace characters: `/\s+/`

One or more non-word or single-quote characters: `/\W+/`

```bash
grunt test
```

## Lab

We'll use `lib/lab.js` to build functions to wrap some of the collection
 processing we've done before.  This practice is meant to be challenging.

## Additional Resources

### Function information

-   [Function](https://en.wikipedia.org/wiki/Function_(mathematics))
-   [Subroutine](https://en.wikipedia.org/wiki/Subroutine)
-   [Variable shadowing](http://en.wikipedia.org/wiki/Variable_shadowing)
-   [Parameter](https://en.wikipedia.org/wiki/Parameter_(computer_programming))

### Collection information

-   [List](https://en.wikipedia.org/wiki/List_(abstract_data_type))
-   [Array](https://en.wikipedia.org/wiki/Array_data_structure)
-   [Dictionary](https://en.wikipedia.org/wiki/Associative_array)
-   [Hash](https://en.wikipedia.org/wiki/Hash_table)

### Regular expression information and utility

-   [RegexOne](http://regexone.com/)
-   [Scriptular](http://scriptular.com/)

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
