# Modern JavaScript Mainly for React js #


**JavaScript/EcmaScript 2015(ES6) is keep updating these days, So i will write about ES6 and mai focus is to use Reactjs framework. I have summarised what I see as the major new features released in each ECMA Script version.**

## Versions of JavaScript
---------------------------------------------------

**ES5 (2009)**

* This is the baseline version of JS which you can generally assume all run-times (except really old ones!) will support.

**ES6 / ES2015**

* Standard Modules `import` and `exort`
* Standardised Promises
* Classes & Inheritance
* Block-scoped variables -- `let` and `const`
* Template Literals
* Object destructing into variables
* Generator functions
* Map and Set data structures
* Internationalisation for Strings, Numbers and Dates via `Intl` API

**ES7 / ES2016**

* `Array.includes()`
* Numeric exponent (power of) operator `**`

**ES8 / ES2017**

* Async functions
* Object.entries
* String Padding functions

**ES9 / ES2018**

* Object Rest/Spread `const obj = { ...props };`
* Asynchronous Iteration `for await (...) {`
* Promise `finally()` function
* Regular expression enhancements (lookbehind, named groups)

----------------------------------------------------------

## 2015 - ECMAScript 2015 (ES6)

Some of the features of ES6:

* Variable Creation using `let` and `const`
* Template Strings
* Arrow functions
* Rest and Sread Operator
* DeStructuring
* Array functions `find()` and `findIndex()`
* classes
* promises

**Babel is a PreProcessor of JavaScript/EcmaScript. it is mainly used to convert ES6+ code into a backwards compatible version of javascript that can be run by older browsers.**

---------------------------------------------------------

## **Variable Creation using `let` and `const`**

ES6 introduces 2 ways to create new variables.

`let` is like a replacement of `var`.


`const` is used to create variables with constant values. The variables created using `const` cannot be updated later in the code.

`const PROJECT_URL = "https://github.com/jaykiran/100_DAYS_OF_CODE";`

```
let num = 100;
let name = "jay";
let arr = [1, 2, 3];
let obj = {
    title: "Readme",
    description: "Modern JavaScript"
};

const num1 = 20;
```
**Hoisting is not possible using let**
```
num = 11;
console.log(num);
var num;
```
So, In the above case Hoisting is possible. But if we replace the var keyword with let, then the value of num will not be printed in the console.

----------------------------------------------------

## **Template Strings**

Template string allows **Embedding Expressions** inside it. The Expressions are embedded by wrapping them inside `${}`

For example:
```
let name = "jay";

//normal way
const greetings = "Hello" + " "+ name;

//using template string
const greetings = `Hello ${name}`;
console.log(greetings);
```
We can use functions also
```
const firstName = "Jayakiran";
const lastName = "Guntuku";

function getFullName(firstName, lastName){
    return(${firstName} ${lastName});
}

const greetings = `Hello ${getFullName(firstName, lastName)}`;
console.log(greetings);
```

-------------------------------------------------------

## **Arrow Functions**
ES6 gives us a new syntax of defining functions using a fat arrow. Arrow functions bring a lot of clarity and code reduction.
```
function getFullName(firstName, lastName){
    return(${firstName} ${lastName});
}

const greetings = (name) => {
    return(`welcome ${name}`);
}

//when there is only one statement, we can write it as

const greetings = (name) => `welcome ${name}`;
```
-------------------------------------------------------

## **Rest and Spread Operators**

### **Rest Operator:**
```
const sum = (num1, num2) => console.log(num1+num2);

sum(1,2,3,4,5);

Output : 3
```
The arguments we are calling is greater than the arguments which are defined in the function.

By using Rest Operator, We can call any number of arguments.

```
const sum = (...args) => console.log(args);

sum(1,2,3,4,5);

Output : [1,2,3,4,5]
```
The arguments we passed through function calling is passed as an array to the function. So, it gives the output as array elements. 
```
const sum = (...args) =>{
    let total=0
    for(let i=0; i<args.length; i++)
    {
        total += args[i];
    }
    console.log(total);
}
sum(1,2,3,4,5);

Output : 15
```
if we have something like this
```
const sum = (num1, num2, ...args) =>{
    let total=0
    for(let i=0; i<args.length; i++)
    {
        total += args[i];
    }
    console.log(total);
}
sum(1,2,3,4,5);

Output : 12
```
**..agrs should be at the end** 

eg: `(num1, num2, ..args)`

`(..args, num1, num2)` will throw an error.


### **Spread Operator**

Spread Operator allows arrays and objects to be expanded into:

* Elements in the case of array.
* Key-Value pairs in the case of Objects.
  
it can be used for creating the reference elements.
```
let arr1 = [1,2,3,4,5];
let arr2= [...arr1];

arr1.push(6);
console.log(arr1);
console.log(arr2);

Output: [1,2,3,4,5,6]
        [1,2,3,4,5]
```
For Concatenation
```
let arr1 = [1,2,3,4,5];
let arr2= [6,7,8];

//normal way
let arr3 = arr1.concat(arr2);

//using spread Operator

let arr4 = [...arr1, ...arr2];
console.log(arr3);
console.log(arr4);

Output: [1,2,3,4,5,6,7,8]
        [1,2,3,4,5,6,7,8]

//sequence of array concatenation also matters here

let arr5 = [0, ...arr1, ...arr2, 9];
console.log(arr5);

Output: [0,1,2,3,4,5,6,7,8,9]

```

In the case of Objects

```
let obj1 = {
    name: "Jay" ,
    lastName: "Guntuku"
}

let obj2 = {
    age: 21
}

let obj3 = {...obj1, ...obj2}
console.log(obj3)

Output: {name: "Jay", lastName: "Guntuku", age: 21}
```
----------------------------------------------------------

