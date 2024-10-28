// PEMDAS - Please Excuse My Dear Aunt Sally
// #1
// console.log("" + 1 + 0)  //10
// console.log("" - 1 + 0)  //-1
// console.log(true+false)  //1
// console.log(!true)   //false]
// console.log(6/"3")   //2 (Numeric Conversion)
// console.log("2" * "3")   //6
// console.log(4 + 5 + "px")    //9px (Slide 25)
// console.log("$" + 4 + 5) //$45
// console.log("4" - 2) //2
// console.log("4px" - 2)   //NaN
// console.log("  -9  " + 5)    //-9 5 (plus string concatonating 5)addition is happening on -9
// console.log("  -9  " - 5)   //-14 (string + number)
// console.log(null + 1)   //1 (null is a blank value)
// console.log(undefined + 1)  //NaN (Slide 26)
// console.log(undefined == null)   //true (they are not exactly equal to each other)
// console.log(undefined === null)   //false
// console.log("\t \n" - 2)    //-2 (if it can't convert "" to a nummber then it moves on)

// #2
// let three = "3"
// let four = "4"
// let thirty = "30"

// let addition = three + four // (Slide 12)
// console.log(addition) //34 false

// let multiplication = three * four
// console.log(multiplication) //12 true

// let division = three / four
// console.log(division)   //0.75 true

// let subtraction = three - four
// console.log(subtraction)    //-1 true

// let lessThan1 = three < four
// console.log(lessThan1)      //true

// let lessThan2 = thirty < four
// console.log(lessThan2)  //true but WRONG


// #3
// if (0) console.log('#1 zero is true') // won't print it's false
// if ("0") console.log('#2 zero is true') // strings make it true
// if (null) console.log('null is true')   //null is false
// if (-1) console.log('negative is true')     //non-zer is true
// if (1) console.log('positive is true')  //true

// #4
// let a = 7, b = 18;
// let result = `${a} + ${b} is `;

// result += (a+b < 10) ? 'less than 10' : 'greater than 10' //(?)if the a + b is less than 10 then it will show if the requirements are met or not
// console.log(result) //7 + 18 is greater than 10

// #5 (function expression - Slide 33)
// function getGreeting(name) {
//     return 'Hello ' + name + ' !'
// }
// // A - Function Expression
// const getGreetingA = function(name) {
//     return 'Hello ' + name + ' !'
// }

// // B - Arrow Function
// const getGreetingB = (name) => 'Hello ' + name + ' !'

// console.log(getGreeting('BOB'))
// console.log(getGreetingA('BOB'))
// console.log(getGreetingB('BOB'))

// #6
// const westley = {
//     name: 'Westley',
//     numFingers: 5
// }

// const rugen = {
//     name: 'Rugen',
//     numFingers: 6
// }

// const inigo = {
//     firstName: 'Inigo',
//     lastName: 'Montoya',
//     greeting(person)  {
//         let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`;
//         console.log(greeting + this.getCatchPhrase(person))
//     },
//     getCatchPhrase(person) {
//         return '  Nice to meet you.'
//     },
//     getCatchPhrase: (person) => person.numFingers == 6 ? 
//     ' Not Nice to meet you.' : ' Nice to meet you.'
// }
// inigo.greeting(westley)
// inigo.greeting(rugen)

// #7
// const basketballGame = {
//     score: 0,
//     fouls: 0,
//     halfTimeScore: 0,
//     freeThrow() {
//         this.score++
//         return this
//     },
//     basket(){
//         this.score += 2
//         return this
//     },
//     threePointer() {
//         this.score += 3
//         return this
//     },
//     foul(){
//         this.fouls ++
//         return this
//     },
//     halfTime() {
//         console.log('Halftime score is ' +this.halfTimeScore+'('+this.fouls+' fouls).')
//         return this
//     },
//     fullTime() {
//         console.log('Final score is '+this.score+'('+this.fouls+' fouls).')
//         return this
//     }
// }

// basketballGame.basket().foul().freeThrow().freeThrow().basket().foul().threePointer().halfTime().fullTime()

// #8
// const sydney = {
//     name: 'Sydney',
//     population: 5_121_000,
//     state: 'NSW',
//     founded: '26 January 1788',
//     timezone: 'Australia/Sydney'
// }
// const melbourne = {
//     name: 'Melbourne',
//     population: 86_441,
//     state: 'Vic',
//     age: 135
// }

// function printCityProps(cityObj) {
//     for (cityProp in cityObj) {
//         console.log(cityProp + '=' + cityObj[cityProp])
//     }
// }

// printCityProps(sydney)
// printCityProps(melbourne)

// #9
// let teamSports = ['Hockey','Cricket', 'Volleyball'];
// let moreSports = teamSports
// moreSports.push('Basketball'); //end of an array
// moreSports.unshift('Football') //beginning of an array

// let dog1 = 'Bingo';
// let dog2 = dog1
// dog2 = 'Lucky'

// let cat1 = {name: 'Fluffy', Breed: 'Siberian'};
// let cat2 = cat1
// cat2.name = 'Snuggles'

// console.log(teamSports)
// console.log(dog1)
// console.log(cat1)

// let moreSports2 = [...teamSports]
// moreSports.push('Ping Pong')
// console.log(moreSports)

// let cat3 = {...cat1}
// cat3.name = 'Baldy'
// console.log(cat1)

// #10
function Person(name,age) {
    this.name = name
    this.age = age
    this.human = true
    this.canDrive = () => this.age >= 16
}

let person1 = new Person('Jon', 30)
let person2 = new Person('Jane', 25)

class PersonClass {
    constructor(name,age) {
        this.name = name
        this.age = age 
        this.human = human
    }
    canDrive() {
        return this.age >=16
    }
}

let person3 = new Person('Jos',15)

console.log(person1)
console.log(person2)
console.log(person3)

if (person1.canDrive()) console.log(person1.name + ' is '+person1.age+' and can drive.')
if (person2.canDrive()) console.log(person2.name + ' is '+person2.age+' and can drive.')
if (person3.canDrive()) console.log(person3.name + ' is '+person3.age+' and can drive.')