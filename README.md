[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Reference Types

Exercising the JavaScript Reference Types.

## Prerequisites

-   [ga-wdi-boston/js-basics](https://github.com/ga-wdi-boston/js-basics)

## Objectives

By the end of this lesson, developers should be able to:

-   Identify array, object, and function literals
-   Create and invoke functions with argument-dependent return values
-   Store, access, and update data values in objects and arrays
-   Iterate through an array or object and operate on its elements

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.

2.  Create a new branch, `training`, for your work and change into it.

3.  Install dependencies with `npm install`.

## Reference Types

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
primitive = 7;

primitive;
otherPrimitive;

reference = {};
otherReference = reference;

reference.property = 'value';

reference;

otherReference;
```

### Demo: Functions

In mathematics, a function maps one or more inputs to a single output.

JavaScript isn't that strict, allowing zero inputs or no specified output.

```js
const five = function five() {
  return 5;
};

const add = function add(a, b){
  a + b;
};
```

Strictly speaking, all JavaScript functions evaluate to a value, but that value
is `undefined` if we do not provide a return (explicitly or implicitly).

What can we do with functions?

Functions provide important parts of the building blocks of programs,
abstraction and encapsulation.

It is important to remember that console.log prints its argument to the
`console` (the terminal using node, the console area of the debug tools using
chrome) but does not return a value.

### Code Along: Functions

```js
const helloWorld = function(){
  return "Hello World!";
};

const hello = function(name){
  return "Hello " + name;
};
```

#### Parameters and Arguments

When you create a function, you specify the parameters.  When you call a
function, you specify the arguments (which are the values that the parameters
are set to when your function executes).

In JavaScript, functions can be defined as taking zero or more arguments.

```js
const zero = function zero() {
  return 0;
};

You call this function by writing: `zero();`

const one = function one(param){
  return param;
};

You call this function by writing: `one('argumentExample');`

const three = function three(param1, param2, param3){
  return param2;
};

You call this function by writing: `three(1, 'two', 'example');`

What would happen if we called this function using only one argument?
`three(1);`
```

### Demo: Arguments and Return Values

```js
const addOne = (num) => num + 1;
```

What happens when we call a function with the wrong number of arguments?

How would you create a function with an optional argument?

### Code-Along: Arguments and Return Values

```js
const concat = function(wordOne, wordTwo){
  return wordOne + wordTwo;
};
```

```bash
concat("Hello", "World");
> 'HelloWorld'
```

What's wrong with this output? What if we use numbers instead of strings when
we invoke the function. We **could** modify this by writing the function
invocation like this:

```bash
concat("Hello", " World");
```

This doesn't really seem like it's the way this function should work though,
so let's go ahead and make the change to connect two words with a space.

```js
const concatWithSpace = function(wordOne, wordTwo){
  return wordOne + " " + wordTwo;
};
```

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

#### Code-Along: Dictionary (Object)

Open up Node and type the following with me as we make an object that refers to
our first car.

```js
let car = {
  'make': 'Volvo',
  'model': '740 Turbo',
  year: 1990
};
```

Now try typing the following commands:

```bash
car['year']
car.make
car[make]
```

### Code-Along: Analyze Text

We'll be using the file `lib/collections.js` as a starting point to:

-   create a list of normalized words from a paragraph of text.

-   count words in a string.

-   get the unique words from a string.

-   count the unique words.

-   find the word frequencies (how many times does each unique word appear in
 the string).

We won't get to methods in detail until later, but there are three on String
we'll need to create a list of normalized words:  `split`, which breaks a String
into an Array;  `replace`, which makes substitutions; and `toUpperCase`, which
does the obvious. We'll annotate our code as we go so feel free to
raise questions if you're not sure what a particular function's
purpose is.

We'll also need two [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions):

One or more whitespace characters: `/\s+/`

One or more non-word characters: `/\W+/`

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
