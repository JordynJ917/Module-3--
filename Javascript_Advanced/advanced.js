// -Variable Scope - Lexical Environment 
// let globalVariableCat = 'cat'
// function myFunction() {
//     let localVariableDog = 'dog'
//     return 'global function with local scope variable'+localVariableDog
// }
// console.log(localVariableDog)   //Reference Error


// Variable Scope - Closures
// function makeAdder(x) {
//     return function adder(y) {
//         return x + y
//     }
// }

// const add5 = makeAdder(5)
// console.log(add5(10))   //15

// function makeHeading(hTag) {
//     return function(title) {
//         return `<${hTag}>${title}</${hTag}>`
//     }
// }

// const getH1 = makeHeading('h1')
// const getH2 = makeHeading('h2')

// console.log(getH1('Heading 1'))    //<h1>Heading 1</h1>
// console.log(getH2('Heading 2'))     //<h2>Heading 2</h2>


// Function Object - name property
// function sayHiDefn() {console.log('Hi (function definition)')}
// const sayHiExpn = function() {console.log('Hi (function expression)')}
// const sayHiArrow = () => console.log('Hi (arrow function)')

// console.log(sayHiDefn.name)    //sayHiDefn
// console.log(sayHiExpn.name)    //sayHiExpn
// console.log(sayHiArrow.name)    //sayHiArrow


// -Function Object - length property
// function oneParam(a) {
//     console.log('This function has a single parameter: ' + a)
// }
// function twoParams(a, b) {
//     console.log(`This function has two parameters: ${a} and ${b}`)
// }
// function manyParams(a, b, ...extras) {
//     console.log(`This function has unlimited parameters: ${a} and ${b} and ${extras}`)
// }
// console.log(oneParam.length)    //1
// console.log(twoParams.length)   //2
// console.log(manyParams.length)  //2 (because extras can't be counted)


// - Function Object - Custom properties
// function sayHi() {
//     console.log('Hi');
//     sayHi.counter++
// }
// sayHi.counter = 0

// sayHi() //Hi
// sayHi() //Hi
// console.log(`Called ${sayHi.name} ${sayHi.counter} times`)  //Called sayHi 2 times


// -Scheduling-SetTimeout
// function printMessage(msg) {
//     console.log(`Message: ${msg}`)
// }
// let timerId = setTimeout(printMessage, 1000, 'prints after 1 sec')  //Message: prints after 1 sec

// let cancelledTimerId = setTimeout(printMessage, 1000, 'timeout cancelled so never prints')
// clearTimeout(cancelledTimerId)

// setTimeout(() => console.log("log statement inside arrow function"), 500)   //log statement inside arrow function
                                                                            //Message: prints after 1 sec

// setTimeout(() => console.log("first message"), 5000)    //prints first therefore no delay
// setTimeout(() => console.log("second message"), 3000)   //prints second eventhough it comes before  5th message (no delay)
// setTimeout(() => console.log("third message"), 1000)    //prints after 1s
// setTimeout(() => console.log("fourth message"), 0)  //prints after 3s
// console.log("fifth message")    //prints after 5s


// -Scheduling - setInterval (Slide 14, Nov 18th)
// let tick = setInterval( () => console.log('tick'),1000)
// setTimeout( () => clearInterval(tick), 10*1000)

// function repeatInterval(delay, limit)
// {
// let counter = 1;

// let intervalTimer = setInterval(function repeatThis() {
//     console.log('repeatInterval: repeated '+counter+' of '+limit+' times')
//     if (counter == limit) clearInterval(intervalTimer)
//     counter++  //keeps running until counter reaches the limit
// }, delay);
// }
// repeatInterval(2000,10); //repeats every 2 seconds until it reaches 10


// -Scheduling - SetTimeout (setInterval)
// function repeatTimeout(delay, limit)
// {
//     let counter = 1;
//     setTimeout(function repeatThis(current){
//         console.log('repeatTimeout: repeated '+current+' of '+limit+' times')
//         if (current < limit) setTimeout(repeatThis, delay, current+1)
//     }, delay, counter);
// }
// repeatTimeout(2000,10);
// OR nested setTimeout
// function repeatTimeout(delay, limit) {
//     let counter = 1 
//     setTimeout(function repeatThis(current) {
//         console.log('repeatTimeout: repeated '+current+ ' of '+limit+' times');
//         if (current < limit) setTimeout(repeatThis, delay, current+1)
//     }, delay, counter)
// }
// repeatTimeout(2000, 10) //repeatTimeout: repeated 1 of 10 times...

// - Decorators and forwarding - Adding logging/timing information

// function printGreeting(name) {
//     console.log('Hello, ' + name)
// }
// printGreeting('Undecorated')

// function loggingTimingDecorator(originalFunction) {
//     return function (name) {
//         console.time('Function timer');
//         console.log(`\nExecuting function ...`)
//         const result = originalFunction(name)
//         console.timeEnd('Function timer')
//         return result
//     }
// }
// const decoratedPrintGreeting = loggingTimingDecorator(printGreeting)
// decoratedPrintGreeting('Decorated')     //Hello, Undecorated

                                        //Executing function ...
                                        //Hello, Decorated
                                        //Function timer: 0.246ms


// Decorators and Forwarding - Caching
// function slow(x) {
//     let random = 0 , goal = Math.floor(Math.random() * x * 1_000_000)
//     console.log(`slow(${x}): randomly generatedgoal for ${x *1_000_000} is ${goal}`)
//     for (let i = 0; i < goal; i++) random++
//     return random
// }
// function cachingDecorator(originalFunction) {
//     const cache = new Map()

//     return function(x) {
//         if(cache.has(x)) {
//             console.log('returned cached value for ' + x); return cache.get(x)
//         }
//         let result = originalFunction(x)
//         cache.set(x, result)
//         return result
//     }
// }
// const fast = cachingDecorator(slow)
// const fastTimed = loggingTimingDecorator(fast) // must include section before
// fastTimed(8)
// fastTimed(8)    //Hello, Undecorated

                //Executing function ...
                //slow(8): randomly generatedgoal for 8000000 is 7966559
                //Function timer: 248.23ms

                //Executing function ...
                //returned cached value for 8
                //Function timer: 0.666ms


// Decorators and Forwarding - Call/Apply
// function loggingTimingDecorator(originalFunction) {
//     return function () {
//         console.time('Function Timer ')
//         console.log(`\nExecuting Function...`)
//         // const result = originalFunction.call(this, ...arguments)
//         const result = originalFunction.apply(this, arguments)
//         console.log(arguments)
//         console.timeEnd('Function Timer')
//         return result;
//     }
// } 


// let worker = {
//     getMultiplier() {
//         return Math.floor(Math.random()) * 1_000_000
//     },

//     slow(x) {
//         let random = 0, goal = x * this.getMultiplier();
//         for (let i = 0; i < goal, i++) random++;
//         console.log(`worker.slow${x}: randomly generated goal is ${goal}`)
//     }
// } 
// worker.slow(5)
// worker.fast = cachingDecorator(worker.slow)
// worker.fast(3)


// Decorator and Forwarding - Call
// function isOdd(number) {return number % 2}

// function getOddNumbers() {
//     return [].filter.call(arguments, isOdd)
// }

// let results = getOddNumbers(10, 1, 3, 4, 8, 9)
// console.log(results)    //[1, 3, 9]

// function product(name, price) {
//     this.name = name;
//     this.price = price;
//     this.salePrice = price * 0.9;
// }
// function Food(name, price) {
//     product.call(this, name, price)
//     this.category = 'food'
// }
// const cheese = new Food('cheese', 5)
// console.log(`${cheese.name} is a ${cheese.category} and costs ${cheese.price} ($$(cheese.salePrice) on sale)`)


// Function binding - Issue of losing this
const user = {
    name: 'John',
    sayHi() {
        console.log(`Hi, ${this.name}`)
    }
}
user.sayHi()
setTimeout(user.sayHi, 1000)

// Solution 1 for missing this
// const user = {
//     name: 'John',
//     sayHi() {
//         console.log(`Hi, ${this.name}`)
//     }
// }

// setTimeout( Function() {user.sayHi(); }, 1000)
// setTimeout( () => user.sayHi(), 1000)

// Function Binding - Solution 2 for missing this
// const user = {
//     name: 'John',
//     sayHi() {
//         console.log(`Hi, ${this.name}`)
//     }
// }
// const boundSayHi = user.sayHi.bind(user)
// setTimeout ( boundSayHi, 1000)

// let animal = {eats: true, sleeps: true, legs: 4, mammal: true}
// let animalPrototype = Object.getPrototypeOf(animal)

// console.log(animalPrototype)
// console.log(Object.getOwnPropertyNames(animalPrototype))    //[
                                                            //'constructor',
                                                            //'__defineGetter__',
                                                            //'__defineSetter__',
                                                            //'hasOwnProperty',
                                                            //'__lookupGetter__',
                                                            //'__lookupSetter__',
                                                            //'isPrototypeOf',
                                                            //'propertyIsEnumerable',
                                                            //'toString',
                                                            //'valueOf',
                                                            //'__proto__',
                                                            //'toLocaleString'
                                                            //]
                                                            //Hi, John

// let rabbit1 = { jumps: true}
// Object.setPrototypeOf(rabbit1, animal)

// let rabbit2 = Object.create(animal, {
//     jumps: {
//         value: true,
//         enumerable: true
//     }
// })
// console.log(rabbit1, rabbit2)   //{ jumps: true } { jumps: true }
// console.log(rabbit1.legs, rabbit2.legs) //4 4

// for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`)    //jumps is true
//                                                                         //eats is true
//                                                                         //sleeps is true
//                                                                         //legs is 4
//                                                                         //mammal is true
// for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`)    //jumps is true
//                                                                         //eats is true
//                                                                         //sleeps is true
//                                                                         //legs is 4
//                                                                         //mammal is true


// function Rabbit(name) {
//     this.jump = true;
//     this.name = name;
// }

// Rabbit.prototype = animal

// let whiteRabbit = new Rabbit('White Rabbit')
// console.log(whiteRabbit)    //{ jump: true, name: 'White Rabbit' }
// for(let prop in whiteRabbit) console.log(`${prop} is ${whiteRabbit[prop]}`) //jump is true
                                                                            //name is White Rabbit
                                                                            //eats is true
                                                                            //sleeps is true
                                                                            //legs is 4
                                                                            //mammal is true
// const obj = {}
// console.log(Object.getPrototypeOf(obj) === Object.prototype)    //true
// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj)))

// String.prototype.show = function() {
//     console.log(this);
// };
// "Boom".show()   //[String: 'Boom']

// if (!String.prototype.repeat) {
//     String.prototype.repeat = function(n) {
//         return new Array(n).join(this);
//     };
// }
// console.log("La".repeat(3))   //LaLaLa


// const obj = {
//     0: "Hello",
//     1: "world",
//     length: 2,
// }
// obj.join = Array.prototype.join
// Object.prototype.join = Array.prototype.join

// console.log(obj.join(','))  //Hello,world


// -Classes
// class ExampleClass {
//     prop1 = 'value1'
//     prop2 = 'value2'

//     constructor() {

//     };

//     method1() {

//     }
// }

// class Animal {
//     constructor(name) {
//         this.speed = 0; this.name = name
//     };
//     run(speed) {
//         this.speed = speed
//         console.log(`${this.name} runs with speed ${this.speed} MPH`)
//     };
//     stop() {
//         console.log(`${this.name} stands still`)
//     }
// }

// class Rabbit extends Animal {
//     hide() {
//         console.log(`${this.name} hides!`)
//     }
// }
// let bunny = new Rabbit('bunny')
// bunny.run(9)    //bunny runs with speed 9 MPH
// bunny.hide()    //bunny hides!

// class Rabbit extends Animal {
//     stop() { // overrides stop method in parent class
//     super.stop(); // call parent stop
//     this.hide(); // and then hide
//     }
//     hide() { // custom function, also inherits this.name from Animal
//     console.log(`${this.name} hides!`);
//     }
//     }
//     let bunny = new Rabbit('bunny'); // bunny contains properties and methods from Animal and Rabbit
//     bunny.run(9); // bunny runs with speed 9 kph.
//     bunny.stop(); //bunny stands still
                  //bunny hides!


// class Rabbit extends Animal {
//     constructor(name, earLength)
//     {
//     super(name); // call the constructor function of the parent, inherited Animal class
//     this.earLength = earLength; // adds custom properties only for instances of Rabbit
//     }
//     stop() { // function overridden from parent class
//     super.stop(); // call parent stop
//     this.hide(); // and then hide
//     }
//     hide() { // custom child class function
//     console.log(`${this.name} hides!`);
//     }
// }
// let bunny = new Rabbit('bunny', 8)
// console.log(bunny.earLength)    //8

// class Animal {
//     type = 'animal';
//     constructor(name) {
//     this.speed = 0;
//     this.name = name;
//     }
//     describe() {
//     console.log(`${this.name} is a ${this.type}`)
//     }
//     //... previous Animal methods go here
// }
// class Rabbit extends Animal {
//     type = 'rabbit';
//     //... previous Rabbit methods go here
// }
// new Rabbit('bunny').describe()  //bunny is a rabbit
// new Animal('fuzzy wuzzy').describe()    //fuzzy wuzzy is a animal

// class Person {
//     static latin = 'persona'; // static (class) property, belongs to class not any instance
//     constructor(name) {
//     this.name = name; // standard property, is unique to each instance of the class
//     }
//     getName() { // standard method, belongs to each instance of the class
//     return this.name;
//     }
//     static createAnonymous() { // static (class) method, belongs to class not any instance
//     return new Person("Unnamed Person");
//     }
// }
// let jonas = new Person('Jonas')
// console.log( jonas.getName() ) // Jonas - name and getName() belong to an instance of Person
// console.log( jonas.latin ) // undefined - latin property doesn't belong to jonas
// console.log( Person.latin ) //Personax
// let anon = Person.createAnonymous()

// class Laptop {
//     _hardDiskType = 'HDD'; // protected property, meant to be internal
//     constructor(brand) {
//     this.brand = brand; // public property, can be used externally by instances
//     }
//     getHDiskType() { return this._hardDiskType; } // public method to access protected property
// }
// const macbook = new Laptop('Macbook Pro');
// console.log(macbook.brand) //Macbook Pro
// console.log(macbook._hardDiskType) //HDD
// console.log(macbook.getHDiskType()) //HDD

// class Laptop {
//     _hardDiskType = 'HDD'; 
//     #numCPUFans = 1; 
//     constructor(brand) { 
//     this.brand = brand; 
//     }
//     isGaming() { return false; } 
//     getHDiskType() { return this._hardDiskType; } 
//     _increaseCPUFans() { 
//     if (this.isGaming()) this.#numCPUFans++
//     }
//     }
//     const macbook = new Laptop('Macbook Pro')
//     console.log(macbook.#numCPUFans)

//     class GamingLaptop extends Laptop {
//         constructor(brand) {
//         super(brand); 
//         this._hardDiskType = 'SSD'; 
//         this.#numCPUFans = 2; 
//         this._increaseCPUFans();
//         }
//         isGaming() { return true; } 
//         }
//         const alienware = new GamingLaptop('Alienware');
//         //console.log(alienware.#numCPUFans) // error: private property is not accessible
//         console.log(alienware._hardDiskType) //

//         function sauce (){
//             console.log('Added the sauce and the cheese')
//         }
//         function addToppings() {
//             console.log('Added toppings')
//         }
//         function cookPizza() {
//             console.log('Cooked the pizza')
//         }
//         preparePizza()
//         makeBase()
//         sauce()
//         addToppings()
//         cookPizza()