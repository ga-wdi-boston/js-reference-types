![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# JavaScript Reference Types

## Prerequisites

[JavaScript Basics](https://github.com/ga-wdi-boston/js-basics)

## Introduction

Exercising the JavaScript Reference Types.

## Objectives

By the end of this lesson, students should be able to:

- Identify array, object, and function literals
- Create and invoke functions with argument-dependent return values
- Store, access, and update data values in objects and arrays
- Iterate through an array or object and operate on its elements

## Reference types

In JavaScript, all reference types are `typeof refVar === 'object'` but we use three in specific circumstances.

- Plain Object
- Array
- Function

The first two are used as collections.  The last is encapsulated executable code.  All three have can be created using reference type literals.

The following shows the simplest examples of these types created with literal syntax:

```js
let hashmap;
let ary;
let func;

hashmap = {};
ary = [];
func = function func(){};
```

You can think of each reference type as storing values.  You access the values stored in a function reference using invocation syntax, `func()`.  You access the values stored in an array using index syntax, `ary[0]`.  And finally, you use member access top get the values from a plain object, `hashmap.name` or `hashmap['name']`.

A key difference between a reference and primitive type is best demonstrated with the following code:

```js
let prim;
let otherPrim;
let ref;
let otherRef;

prim = 2;
otherPrim = prim;
prim = 7;

prim;
otherPrim;

ref = {};
otherRef = ref;

ref.prop = 'value';

ref;

otherRef;
````

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

Strictly speaking, all JavaScript functions evaluate to a value, but that value is `undefined` if we do not provide a return.

What can we do with functions?

Functions provide important parts of the building blocks of programs, abstraction and encapsulation.

It's important to remember that console.log prints its argument to the `console` (the terminal using node, the console area of the debug tools using chrome) but does not return a value.

#### Parameters and Arguments

When you create a function, you specify the parameters (the formal parameters,  variables local to the function).  When you call a function, you specify the arguments (whose values become the actual parameters, which are the values that the formal parameters are set to when your function executes).

In JavaScript, functions can be defined as taking zero or more arguments.

```js
let zero = function zero() {
  return 0;
};

let one = function one(arg){
  return arg;
}

let three = function three(arg1, arg2, arg3){
  return arg2;
}
```

What happens when we call a function with the wrong number of arguments?

How would you create a function with an optional argument?

### Collections

There are two general collection types.  The `list` and the `dictionary` (aka `hashmap`, `map`, `hash`, ...).

- Lists store lists of things.
- Dictionaries store uniquely named values.

In JavaScript we use Array and Object respectively to implement these collection types.

#### Arrays (list)

```js
let fibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i-1] = fibonacci[i-2];
}
```

#### Object (as Hashmap aka dictionary)

```js
> let instructor = {'given name':'Antony', 'surname':'Donovan','occupation':'WDI Instructor'};
> let dir = {};
>
```

### Code along

We'll be using the file `lib/collections.js` as a starting point to:
- create a list of normalized words from a paragraph of text.
- count words in a string.
- get the unique words from a string.
- count the unique words.
- find the word frequencies (how many times does each unique word appear in the string).

 We won't get to methods in detail until later, but there are three on String we'll need to create a list of normalized words:  `split`, which breaks a String into an Array;  `replace`, which makes substitutions; and `toLowerCase`, which does the obvious.

 We'll also need two **Regular expressions**:

 One or more whitespace characters: `/\s+/`

 One or more non-word or single-quote characters: `/[^\w']+/`

```bash
$ grunt test
```

## Lab

We'll use `lib/lab.js` to build functions to wrap some of the collection processing we've done before.

## Additional Resources

### Functions

- https://en.wikipedia.org/wiki/Function_(mathematics)
- https://en.wikipedia.org/wiki/Subroutine
- http://en.wikipedia.org/wiki/Variable_shadowing
- https://en.wikipedia.org/wiki/Parameter_(computer_programming)

### Collections

- https://en.wikipedia.org/wiki/Hash_table
- https://en.wikipedia.org/wiki/Array_data_structure
