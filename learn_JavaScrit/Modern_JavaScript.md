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

## **Destructuring**

It allows us to Unpack arrays or Objects into a bunch of variables which makes working with arrays and objetcs more convenient

```
const name = "Jayakiran Guntuku";
const nameArr = name.split(' ');

console.log(nameArr);

Output: ["Jayakiran", "Guntuku"]

//using Destructuring concept

let [firstName, lastName] = nameArr;
console.log(firstName);
console.log(lastName);

Output: Jayakiran
        Guntuku
```
it is storing the array values with respect to sequence order.

```
let [lastName, firstName] = nameArr;
console.log(lastName);
console.log(firstName);

Output: Jayakiran
        Guntuku
```
In the case of Objects, we use this concept as follows

```
const person = {
    firstName: "Jayakiran",
    lastName: "Guntuku",
    age: 21
}

let {firstName, lastName} = person;
console.log(firstName);
console.log(lastName);

Output: Jayakiran
        Guntuku
```

```
let firstName= "Jayakiran",
let lastName= "Guntuku",
let age= 21
const person = {
    firstName,
    lastName,
    age
}

console.log(person);

Output: {firstName: "Jayakiran", lastName: "Guntuku", age: 21}
```
---------------------------------------------------------

## **Array Functions: map()**

map() iterates the array for us and we can pass a callback fucntion to perform some operation in each array item. The updated values can be returned by the callback function to create a new array.

Syntax: `arr.map((item)=>{//callbackfunction})`

```
const arr = [1,2,3,4,5];

let newArr = arr.map((item)=>{
    //console.log(item);
    return item*2;
});
console.log(arr);
console.log(newArr);

Output: [1,2,3,4,5]
        [2,4,6,8,10]
```
In the case of Objects, we use this concept as follows

```
const arr = [
    {
        name: "Jayakiran Guntuku",
        experience: 2,
        Role: "Software Developer"
    },
    {
        name: "Maneesh Jella",
        experience: 3,
        Role: "Hardware Developer"
    },
    {
        name: "Uday",
        experience: 4,
        Role: "Petroleum Engineer"
    }
]

let newArr = arr.map((item, pos)=> {
    console.log(data);
    return {
        name: data.name,
        experience: data.experience
    };
});
console.log(arr);
console.log(newArr);

Output: 
    {
        name: "Jayakiran Guntuku",
        experience: 2,
        Role: "Software Developer"
    },
    {
        name: "Maneesh Jella",
        experience: 3,
        Role: "Hardware Developer"
    },
    {
        name: "Uday",
        experience: 4,
        Role: "Petroleum Engineer"
    }

    0:
       name: "Jayakiran Guntuku"
       experience: 2
    1:
       name: "Maneesh Jella"
       experience: 3
    2:
       name: "Uday",
       experience: 4,
```
-------------------------------------------------------
## **Array Functions: reduce()**

reduce() also iterates the array for us and we can pass a callback fucntion to perform some operation in each array item. The difference is reduce() passes the result of callback from one iteration to the next one. This callback result is an Accumulator. The Accumulator can be anything (integer, string, object or array) and must be instantiated and passed when calling reduce().

Syntax: `arr.reduce((acc, item)=>{//callbackfunction},acc_default_value)`

```
const arr = [1,2,3,4,5];

const result = arr.reduce((acc, item)=>{
    return acc + item;
},0);

console.log(result);

Output: 15
```
---------------------------------------------------------
## **Array Functions: filter()**

It iterates through the array to create a new array. We can decide which elements should be added in the new array based on some conditions.

Syntax: `arr.filter(item =>{//Return true/false to add/skip the current item})`

```
const arr = [1,2,3,4,5];
const resultArr = arr.filter(item =>{
    return true; //Output:  [1,2,3,4,5]
    return false; //Output: 
    return item % 2 ==0 //Output: [2,4] 
});

console.log(resultArr);
```
----------------------------------------------------------
## **Array Functions: find() and findIndex()**

**find()** is used to search for element in the array that matches some condition. it returns the first element that matches the condition.

**findIndex()** returns the index of the element.
```
const arr = [1,2,3,4,5];
const resultArr = arr.find(item =>{
    return true; //Output: 1
    return false; //Output: undefined
    return item % 2 === 0 //Output: 2 
});

console.log(resultArr);

const resultArr = arr.findIndex(item =>{
    return item % 2 === 0 //Output: 1 
});

console.log(resultArr);
```
---------------------------------------------------------
## **Classes**

**Syntax:**
```
class ClassName{
    constructor(){
        //initialize Properties here;
    }
    //Methods Outside constructor
    method1 = () =>{
        //Method Body
    }
}
```
**Example:**
```
function person(name, birthYear){
    this.name = name;
    this.birthYear = birthYear;

    this.getDetails = function(){
        return "Name: " + this.name + "and age: " + (2020- this.birthYear);
    }
}

var jay = new person('jay', 1999);
console.log(jay.getDetails);

Output: Name: jay and age: 21
```
```
class person{
    constructor(name, birthYear){
        this.name = name;
        this.birthYear = birthYear;
    }
    
    getDetails = function(){
        return `Name: ${this.name} and age: ${2019-this.birthYear} `
    }
}

var jay = new person('jay', 1999);
console.log(jay.getDetails);

Output: Name: jay and age: 21
```
--------------------------------------------------------
## **Inheritence**
**Syntax:**
```
class ChildClass{
    //body
}
class ChildClass extends ParentClass{
    //body
}
```
**Example:**
```
class person{
    constructor(name, birthYear){
        this.name = name;
        this.birthYear = birthYear;
    }
    
    getDetails = function(){
        return `Name: ${this.name} and age: ${2019-this.birthYear} `
    }
}

class Pilot extends Person{
    constructor(name, birthYear, exp, type, license){
        super(name, birthYear);
        this.experience = exp;
        this.type = type;
        this.license = license;
    }
    
    getData = function(){
        return `${this.getDetails} and Experience: ${this.experience} and type: ${this.type} `
    }
}

var jay = new Pilot("Uday", 1999, 28, 'Private', 'XYZ123');
console.log(jay);
jay.getData;
```
----------------------------------------------------------
## **Callbacks and Promises**

**Syntax:**
```
const myPromise = new Promise((resolve, reject) => {
    //promise body
    //call resolve() when the operation is complete
    //call reject() when the operation is failed.
})
```

