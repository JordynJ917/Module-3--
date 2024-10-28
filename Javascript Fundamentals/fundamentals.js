// console.log('hello'); console.log('world);

// console.log('hello')
// console.log('world')

/* Line of code
    also line of code
    another line of code console.log('i cant comment')
*/

// const integer = 123 -integer - whole number
// const float = 12.345 - floating point decimal number

// console.log(1/0) infinity - division by zero
// console.log(-1/0) negative division by zero = -infinity
// console.log("not a number" / 1) invalid mathmatical operation = NaN
// PEMDAS - Please Excuse My Dear Aunt Sally 

// let one = 1
// let two = 2 
// let three = 3

// console.log(one + two - three * two / one);

// const bigint_valid = 1234567890123456789012345n;
// const bigint_invalid = 1234567890123456789012345; //too large for standard integers

// console.log(bigint_valid == bigint_invalid)

// -Strings
// const doubleQuotes = "string that can include 'single quotes"
// const singleQuotes = 'string that can insclude "double quotes'
// const backTicks = `string that can include variables - ${singleQuotes}`

// -Booleans
// let isChecked = false
// let isToggleOn = true

// isChecked = !isChecked
// console.log(isChecked)

// -Null
// let age = null
// console.log(age)

// -Undefined
// let location
// let age = null
// console.log(`${location} == ${age} ? ${location == age}`)
// console.log(`${location} === ${age} ? ${location === age}`)

// const tv = {//object sarts here
//     brand: "Sony Bravia"; //valu
//     size: "55-inch"; 
//     model: 2023;
//     resolution: "4k"
// }

console.log(typeof undefined)
console.log(typeof 0) //number
console.log(typeof 10n) //bigint

// -String Conversion

// -Numeric Conversion

// -Boolean Conversion

// -Function -Declaration
// function keyword followed by the custom function name, then()

// function helloWorld()
// {
//     console.log('hello world')
// }
// helloWorld()

// function checkAge returns a value when called

// function checkAge(age) {
//     if  (age >= 18){
//         return 'adult'; //if the condition is true, return this string and exit
//     }
//     return 'non-adult'; //if the condition is false, return this string and exit
// }

// console.log(checkAge(21))
// console.log(checkAge(13))

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
// const sayHi = () => console.log('hi')

// sayHi()

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
// if (phone.color) console.log(`My ${phone.model} is ${phone.color}`)

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
//     console.log('key: '  +key)
//     console.log('value: ' +phone[key])
// }

// -Object references 
// let preson1 = {name: 'Anna'}


// -Object shallow copy
// const user = {name: 'Elliot', age: 27}

// const userClone = {}

// for (let key in user ) {
//     userClone[key] = user[key]
// }
// console.log(userClone)

// // -Shallow Copy with Object Spread
// const userClone = {...user}
// console.log(userClone)

// const userClone = {...user,age: 28, location: 'New Zealand'}
// console.log(userClone)

// const vehicle = {make: 'Toyota', model:'Camry'}
// const mergedUser = {...user, ...vehicle}
// console.log(mergedUser)