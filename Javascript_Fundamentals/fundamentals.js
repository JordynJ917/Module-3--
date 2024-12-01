// console.log('hello'); console.log('world);

// console.log('hello')
// console.log('world')

/* Line of code
    also line of code
    another line of code console.log('i cant comment')
*/


// Data Types - Numbers
// const integer = 123 -integer - whole number
// const float = 12.345 - floating point decimal number

// console.log(1/0) infinity - division by zero
// console.log(-1/0) negative division by zero = -infinity
// console.log("not a number" / 1) invalid mathmatical operation = NaN
// PEMDAS - Please Excuse My Dear Aunt Sally 

// let one = 1
// let two = 2 
// let three = 3

// console.log(one + two - three * two / one);   //-3

// const bigint_valid = 1234567890123456789012345n;
// const bigint_invalid = 1234567890123456789012345; //too large for standard integers

// console.log(bigint_valid == bigint_invalid)  //False

// -Strings
// const doubleQuotes = "string that can include 'single quotes"
// const singleQuotes = 'string that can insclude "double quotes'
// const backTicks = `string that can include variables - ${singleQuotes}`


// -Booleans
// let isChecked = false
// let isToggleOn = true

// isChecked = !isChecked
// console.log(isChecked)   //True


// -Null
// let age = null
// console.log(age)


// -Undefined
// let location
// let age = null
// console.log(`${location} == ${age} ? ${location == age}`)   //undefined == null ? true
// console.log(`${location} === ${age} ? ${location === age}`) //undefined === null ? false


// Data Types - Object
// const tv = {
//     brand: "Sony Bravia"; 
//     size: "55-inch"; 
//     model: 2023;
//     resolution: "4k"
// }


// Type Check Examples
// console.log(typeof undefined)    //Undefined
// console.log(typeof 0) //Number
// console.log(typeof 10n) //Bigint
// conosle.log(typeof true)  //Boolean
// console.log(typeof 'text')  //String
// console.log(typeof Symbol('id'))    //Symbol
// console.log(typeof Math)    //Object
// console.log(typeof null)    //Object
// console.log(typeof console.log)   //Function


// -String Conversion
// -Explicit
// console.log( String(false) )    //False

// -Implicit
// console.log("1" + 2 + 3)    //123 (concatenated)
// console.log(1 + 2 + "3")    //33 (added then concatenated)


// -Numeric Conversion
// -Explicit
// console.log(Number("    4    "))    //4
// console.log(Number(null))   //0
// console.log(Number(undefined))  //NaN
// console.log(Number(false))  //0
// console.log(Number(true))   //1
// console.log(Number("")) //0
// console.log(Number("not a number"))  //NaN

// -Implicit
// console.log("6" / "2")  //3
// console.log("6" * "2")  //12
// console.log("6" - "2")  //4
// console.log(+"6")   //6


// -Boolean Conversion
// console.log(Boolean(""))    //False
// console.log(Boolean(0))   //False
// console.log(Boolean(null))   //False
// console.log(Boolean(undefined))   //False
// console.log(Boolean(NaN))   //False
// console.log(Boolean("false"))   //True
// console.log(Boolean(-1))    //True

// if ("") console.log('empty string is true')   // implicit "" conversion to false - won't print msg
// if (undefined) console.log('undefined is true')    // implicit conversion to false - won't print msg

// -Conditional Statement
// console.log(NaN ? 'NaN is true' : 'NaN is false')   //NaN is false
// console.log(0 ? 'zero is true' : 'zero is false')   //zero is false
// console.log("hello" ? 'hello is true' : 'hello is false')   //hello is true

// -Negation
// console.log(!undefined)   //True
// console.log(!!"")   //False


// -Comparison
// -String
// console.log('apple' < 'banana')   //True - a is less than b
// console.log('eat' < 'eaten')    //True - eaten is longer

// console.log("2" > 1)    //True
// console.log("2" != 1)   //True
// console.log("02" == 2)  //True
// console.log(true == 1)  //True
// console.log(false == 0)   //True
// console.log(null == undefined)  //True


// -Function - Declaration
// function keyword followed by the custom function name, then()

// function helloWorld()
// {
//     console.log('hello world')
// }
// helloWorld()    //hello world

// function checkAge returns a value when called

// function checkAge(age) {
//     if  (age >= 18){
//         return 'adult'; //if the condition is true, return this string and exit
//     }
//     return 'non-adult'; //if the condition is false, return this string and exit
// }

// console.log(checkAge(21))    //adult
// console.log(checkAge(13))    //non-adult


// -Function -Expression
// const sayHi = function() {
//     console.log('Hi')
// }

// sayHiexpression() -Wont work before initalization
// sayHiDeclaration() - Will work before initalization

// const sayHiexpression = function() {
//     console.log('hi')
// }

// function sayHiDeclaration() {
//     console.log('hi')
// }


// Functions -Arrow
// const sayHiArrow = () => console.log('hi')

// const subtract1 = (a, b) => a - b
// const subtract2 = (a, b) => {return a - b}

// const sayHiExpression = function() {
//     console.log('Hi');
//     console.log(arguments);
// }
//     function sayHiDeclaration() {
//     console.log('Hi');
//     console.log(arguments);
// }
//     const sayHiArrow = () => {
//     console.log('Hi');
//     console.log(arguments);
// }

//     sayHiDeclaration() // [Arguments] {}
//     sayHiExpression() // [Arguments] {}
//     sayHiArrow() //ReferenceError: arguments is not defined

// -Objects
// -object constructor - not used much
// const user = new Object()

// -Object literal - More common
// const user = {}
// const ball = {}
// const car = {}

// Object with properties
// const user = {
//     name: 'Joe',
//     age: 20,
//     'has a dog': true
// }

// -Obect with operations

// console.log(user.name)
// let dogOwner = user['has a dog']

// user.age = 21
// console.log(user.age)

// user.location = 'NSW'
// console.log(user)

// delete user.location
// console.log(user)

// -Property name limitation
// const object = {
//     2: 'value of numeric property',
//     // '2': 'value of string property'
// }

// console.log(object)

// -Property existence test 
// const phone = {
//     model: '15 Pro Max',
//     color: 'black'
// }
// if (phone.color) console.log(`My ${phone.model} is ${phone.color}`)   //My 15 Pro Max is black
// if (phone.storage) {
//     console.log(`My ${phone.model} has ${phone.storage}`)
// }   //won't print not declared

// -Iteration
// let goal = 5 
// for (let i = 0; i<goal; i++) {
//     console.log(`Iteration ${i} of ${goal}`)
// }


// -Object Iteration
// const phone = {
//     model: 'Iphone 15 pro Max',
//     color: 'Black',
//     storage: 512
// }

// for (let key in phone) {
//     console.log('key: '  + key)
//     console.log('value: ' + phone[key])
// }


// -Object references 
// let person1 = {name: 'Anna'}
// let person2 = person1
// person1.name = 'Brian'
// console.log(person2.name)   //Brian
// let person3 = 'Carly'
// let person4 = person3
// person3 = 'David'
// console.log(person4)    //Carly


// -Object shallow copy
// const user = {name: 'Elliot', age: 27}

// const userClone = {}

// for (let key in user ) {
//     userClone[key] = user[key]
// }
// console.log(userClone)


// -Shallow Copy with Object Spread
// const userClone = {...user}
// console.log(userClone)

// const userClone = {...user,age: 28, location: 'New Zealand'}
// console.log(userClone)

// const vehicle = {make: 'Toyota', model:'Camry'}
// const mergedUser = {...user, ...vehicle}
// console.log(mergedUser)


// Deep Clone
// const box1 = {
//     weight: '20kg',
//     dimensions: {
//         width: '30cm',
//         height: '10cm'
//     }
// }
// const box2 = {...box1}
// box1.dimensions.height = '12cm'
// console.log(box2)   //{ weight: '20kg', dimensions: { width: '30cm', height: '12cm' } }


// - Methods
// const user = {
//     name: 'Bilbo Baggins',
//     sing: function() {
//         console.log('Roads go ever ever on')
//     },
//     sing2() {
//         console.log('Over rock and under tree')
//     }
// }
// user.sing()   //Roads go ever ever on
// user.sing2()    //Over rock and under tree


// -Methods with context
// const user = {
//     name: 'Bilbo Baggins',
//     printGreeting() {
//         console.log(`Hello, I'm ${this.name}`)
//     }
// }

// user.printGreeting()    //Hello, I'm Bilbo Baggins 


// - this behavior
// const user = {
//     name: 'Bilbo Baggins',
//     printThis() {
//         console.log(this); 
//         return this; 
//     },
//     printGreeting() {
//         console.log(`Hello, I'm ${this.name}`) 
//     }
// }

// user.printThis().printGreeting()    //{
                                        //name: 'Bilbo Baggins',
                                        //printThis: [Function: printThis],
                                        //printGreeting: [Function: printGreeting]
                                    //}
                                    //Hello, I'm Bilbo Baggins


// - Constructor function
// function User(first, last) {
//     this.first = first;
//     this.last = last;
//     this.hasShortName = () => this.first.length <= 3
// }

// let user1 = new User('Tim', 'Smith')
// console.log(user1)  //User {
//                         //first: 'Tim',
//                         //last: 'Smith',
//                         //hasShortName: [Function (anonymous)]
//                     //}
// console.log(user1.hasShortName())   //True

// - Object Generation in ES6
// class User {
//     constructor(first, last) {
//         this.first = first;
//         this.last = last;
//     }
//     hasShortName() {
//         return this.first.length >= 3
//     }
// }
// let user2 = new User('Tina', 'Smith') 
// console.log(user2)  //User {first: 'Tina', Last: 'Smith'}
// console.log(user2.hasShortName())   //True