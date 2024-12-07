// -Primitive as objects - Numbers (Slide 5)
// const n = 1.23456

// console.log(n.toFixed(2)) //1.23
// console.log(n.toPrecision(10))   //1.2345600000


// -Primitive as Objects - Strings (Slide 5)
// const hello = 'hello world'
// console.log(hello.toUpperCase())    //HELLO WORLD
// console.log(hello.endsWith('world'))    //true


// -Primitives - like Object - String like Object (Slide 6)
// const user = {
//     name: 'John'
// }
// console.log("User: " + user) //User: [object Object]

// const user2 = {
//     name: 'John',
//     toString() {
//         return this.name
//     }
// }
// console.log("User: " + user2)   //User: John


// -Primitive like Object - Number like Object (Slide 7)
// const apple = {
//     name: 'Apple',
//     category: 'Honey Crisp',
//     price: 1.2,
//     valueOf() {
//         return this.price
//     }
// }
// console.log(apple * 2) //2.4


// Numbers - Decimal Numbers - Very Large Numbers
// const billion1 = 1000000000
// const billion2 = 1_000_000_000
// const billion3 = 1e9

// console.log(billion1 === billion2)  //True
// console.log(billion2 === billion3)  //True


// // Numbers - Decimal Numbers - Very Small Numbers
// const microSecs1 = 0.000001
// const microSecs2 = 0.000_001
// const microSecs3 = 1.e-6

// console.log(microSecs1 === microSecs2)  //True
// console.log(microSecs2 === microSecs3)  //True


// - Numbers - Hexidecimal Numbers
// const r =0xff
// const g = 0xff
// const b = 0xff
// const white = `rgb(${r}, ${g}, ${b})`
// console.log(white)


// - Binary and Octal Numbers
// const mobile = 041234567
// console.log(mobile) //8730999

// const binary = 0b11111111
// const octal = 0o377

// console.log(binary) //255
// console.log(binary === octal)   //True


// Numbers - Base Conversion
// const ff = 255
// const ee = 238
// const dd = 221
// console.log(ff.toString(16))    //ff

// console.log(`#${ff.toString(16)}${ee.toString(16)}${dd.toString(16)}`)  //#ffeedd


// -Numbers - Imprecise Calculations
// const toobig = 1e350
// console.log(toobig) //Infinity
// console.log(Number.MAX_VALUE)   //1.7976931348623157e+308

// const point1 = 0.1; const point2 = 0.2
// console.log(`${point1} + ${point2} = ${point1} + ${point2}`)    //0.1 + 0.2 = 0.1 + 0.2

// console.log(9_999_999_999_999_999)  //10000000000000000
// console.log(Number.MAX_SAFE_INTEGER)    //9007199254740991


// Tests - isFinite and isNaN
// console.log(isNaN(NaN))    //True
// console.log(NaN == NaN)    //False

// console.log(isFinite(1/3))  //True
// console.log(isFinite("string"))  //False
// console.log(isFinite(Infinity))    //False


// ParseInt and ParseFloat (soft conversion)
// console.log( + "100px")    //NaN

// console.log(parseInt("150px"))    //150
// console.log(parseFloat("2.5em"))    //2.5
// console.log(parseFloat("12.34.56"))   //12.34
// console.log(parseInt("a123"))   //NaN


// -Strings
// const guestlist = `Guests: \n\t- John \n\t- Pete \n\t- Mary`
// console.log(guestlist)    Guests:
                                  //-John
                                  //-Pete
                                  //-Mary


// -Compare Strings
// console.log('Z'.codePointAt(0)) //90

// console.log(String.fromCodePoint(90))   //Z


// Manipulating Strings
// const string = 'I could be anything you like'

// console.log(string.length)  //28
// console.log(string.indexOf('anything')) //11
// console.log(string.substring(20))   //you like
// console.log(string.toUpperCase())   //I COULD BE ANYTHING YOU LIKE
// console.log(string + ' plus more')  //I could be anything you like plus more

// const sentence = 'The quick brown fox jumps pver the lazy dog.'

// console.log(sentence.startsWith('The'))   //True
// console.log(sentence.endsWith('dog'))   //False - the period
// console.log(sentence.split(' ')) //[
//                                         //'The',   'quick',
//                                         //'brown', 'fox',
//                                         //'jumps', 'pver',
//                                         //'the',   'lazy',
//                                         //'dog.'
//                                  //]
// console.log(sentence.slice(4, 10))   //quick
// console.log(sentence.replace('quick','slow'))   //The slow brown fox...
// console.log("   extra  spaces   ".trim())   //Trims whitespace from the start and the end

// -Arrays (Slide 21)
// const arr1 = new Array(1,2,3)
// const arr2 = [1,2,3]

// console.log(arr1)   //[1,2,3]
// console.log(arr2)   //[1,2,3]


// -Arrays - Methods that work with the end of the array
// const fruits = ['Apple', 'Orange', 'Pear']
// const lastFruit = fruits.pop()
// console.log(lastFruit)  //Pear
// console.log(fruits) //['Apple', 'Orange] - completely took the last element away

// fruits.push('Banana')
// console.log(fruits)    //[ 'Apple', 'Orange', 'Banana' ]


// -Arrays - Methods that work with the beginning of the array
// const fruits = ['Apple', 'Orange', 'Pear']
// const firstFruit = fruits.shift()
// console.log(firstFruit)    //Apple
// console.log(fruits)     //['Orange', 'Pear']

// fruits.unshift('banana')
// console.log(fruits)     //[ 'banana', 'Orange', 'Pear' ]


// Arrays- Internals
// const fruits1 = ['Apple', 'Orange', 'Pear']
// const fruits2 = fruits1

// fruits1.push('Banana')
// console.log(fruits2)    //['Apple', 'Orange', 'Pear', 'Banana']

// console.log('fruit at index 0: '+ fruits1[0])   //fruit at index 0: Apple
// console.log('fruit at index 1: ' + fruits1[1])    //fruit at index 0: Orange


// Arrays - Multidimensional Arrays (Slide 26) 6:45pm 10/30
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// console.log(matrix[1][1])   //5


// -Arrays - toString Method
// const numbers = [1, 2, 3]
// const strings = ["one", "two", "three"]
// const empty = []

// console.log('Numbers: ' + numbers)      //Numbers: 1,2,3
// console.log('Strings: ' + strings)      //Strings: one,two,three
// console.log('Empty: ' + empty)       //Empty: 


// Arrays - Slice Method
// const sliceArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
// const sliced = sliceArray.slice(0, 3)
// const endSliced = sliceArray.slice(-3)

// console.log(sliced)     //[ 'red', 'orange', 'yellow' ]
// console.log(endSliced)  //[ 'blue', 'indigo', 'violet' ]
// console.log(sliceArray)   //[
//                           //'red',    'orange',
                          //'yellow', 'green',
                          //'blue',   'indigo',
                          //'violet'
                          //]


// -Arrays - Splice Method
// const spliceArray = ["I", "study", "JavaScript", "right", "now"]
// const removed = spliceArray.splice(0, 3, "Let's", "dance")

// console.log(removed)    //[ 'I', 'study', 'JavaScript' ]
// console.log(spliceArray)        //[ "Let's", 'dance', 'right', 'now' ]


// -Arrays - concat 
// const array1 = [1,2,3]
// const array2 = [4,5,6]
// const array3 = [7,8,9]

// const combined = array1.concat(array2,array3)
// console.log(combined)   //[
//                         //    1, 2, 3, 4, 5,
//                         //    6, 7, 8, 9
//                         //  ]
// console.log(combined.concat(10,11)) //[
                                    //1, 2, 3, 4,  5,
                                    //6, 7, 8, 9, 10,
                                    //11
                                    //]


// -Arrays - indexOf Method
// const marks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-']

// let bIndex = marks.indexOf('B-')
// let eIndex = marks.indexOf('E')

// console.log(marks[bIndex] + ' is at index: ' + bIndex)   //B- is at index: 2
// console.log(eIndex) //-1 (since not found)


// Array - first/lastIndexOf Method
// const marks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-']

// let bIndexFirst = marks.indexOf('B-')
// let bIndexLast = marks.lastIndexOf('B-')

// console.log(marks[bIndexFirst] + ' is first at: ' + bIndexFirst)    //B- is first at: 2
// console.log(marks[bIndexLast] + ' is last at: ' + bIndexLast)   //B- is last at: 6


// Array - Join Method
// const elements = ['Wind', 'Water', 'Fire', 'Air']

// console.log(elements.join() )   //Wind,Water,Fire,Air
// console.log(elements.join(' '))     //Wind Water Fire Air
// console.log(elements.join('; '))    //Wind; Water; Fire; Air
// console.log(elements.join(' + '))   //Wind + Water + Fire + Air


// Arrays - forEach Method 
// const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pippin']

// hobbits.forEach((hobbit, index) => {
//     console.log(`#${index}: ${hobbit}`)
// })   //#0: Bilbo
        //#1: Frodo
        //#2: Samwise
        //#3: Merry
        //#4: Pippin


// Array - Find Method
// const products = [
//     {id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts'},
//     {id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter'},
//     {id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants'}
// ]

// let jeans = products.find(product => product.title == 'Denim Jeans')
// let shirt = products.find(product => product.category == 'Shirts')
// console.log(jeans)  //{ id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants' }
// console.log(shirt)  //{ id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }


// Array - Filter Method 
// const products = [
//     {id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts'},
//     {id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter'},
//     {id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants'},
//     {id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts'}
// ]
// let shirts = products.filter(product => product.category == 'Shirts')
// let under50 = products.filter(product => product.price < 50)
// console.log(shirts) //[
//                     //{ id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
//                     //{ id: 4, title: 'Ladies Tee', price: 25.95, category: 'Shirts' }
//                     //]
// console.log(under50)    //[
                        // { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
                        // { id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants' },
                        // { id: 4, title: 'Ladies Tee', price: 25.95, category: 'Shirts' }
                        // ]


// Arrays - Map Method
// const products = [
//     {id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts'},
//     {id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter'},
//     {id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants'},
//     {id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts'}
// ]
// let titles = products.map(product => product.title)
// let h2titles = products.map(product => '<h2>'+product.title+'</h2>')
// let raisedPrices = products.map(product => ({...product, price: product.price + 5}))
// console.log(titles)     //[ 'Sleeveless Tee', "Men's Hoodie", 'Denim Jeans', 'Ladies Tee' ]
// console.log(h2titles)   //[
                                //'<h2>Sleeveless Tee</h2>',
                                //"<h2>Men's Hoodie</h2>",
                                //'<h2>Denim Jeans</h2>',
                                //'<h2>Ladies Tee</h2>'
                        //]
// console.log(raisedPrices)       //[
                                        //{ id: 1, title: 'Sleeveless Tee', price: 28.95, category: 'Shirts' },
                                        //{ id: 2, title: "Men's Hoodie", price: 59.95, category: 'Winter' },
                                        //{ id: 3, title: 'Denim Jeans', price: 54.95, category: 'Pants' },
                                        //{ id: 4, title: 'Ladies Tee', price: 30.95, category: 'Shirts' }
                                //]


// Arrays - Sort Method 
// const products = [
//     {id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts'},
//     {id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter'},
//     {id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants'},
//     {id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts'}
// ]
// products.sort((product1, product2) => product1.price - product2.price)
// console.log(products)   //[
                                //{ id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
                                //{ id: 4, title: 'Ladies Tee', price: 25.95, category: 'Shirts' },
                                //{ id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants' },
                                //{ id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' }
                        //]
// products.sort((p1, p2) => p1.title > p2.title ? 1 : -1)
// console.log(products)   //[
                                //{ id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants' },
                                //{ id: 4, title: 'Ladies Tee', price: 25.95, category: 'Shirts' },
                                //{ id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
                                //{ id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }
                        //]
// const numbers = [4,8,1,5,66,23,41]
// console.log( numbers.sort())    //[
                                        //1, 23, 4, 41,
                                        //5, 66, 8
                                //]
// console.log( numbers.sort((num1,num2) => num1 - num2))  //[
                                                                //1,  4,  5, 8,
                                                                //23, 41, 66
                                                        //]

// const stringNums = ["1", "81", "41", "102", "35", "1004"]
// console.log( stringNums.sort())   //[ '1', '1004', '102', '35', '41', '81' ]
// console.log( stringNums.sort((a, b) => a - b))  //[ '1', '35', '41', '81', '102', '1004' ]

// const stringNums = ["1", "81", "41", "102", "35", "1004"]
// const sortedNums = [...stringNums].sort()
// console.log(stringNums)     //[ '1', '81', '41', '102', '35', '1004' ]
// console.log(sortedNums)     //[ '1', '1004', '102', '35', '41', '81' ]


// Array - Reverse Method
// const elements = ['Wind', 'Water', 'Fire', 'Air']
// const reversed1 = elements.reverse()
// const reversed2 = [...elements].reverse()

// console.log(elements)   //[ 'Air', 'Fire', 'Water', 'Wind' ]
// console.log(reversed2)    //[ 'Wind', 'Water', 'Fire', 'Air' ] (reversed twice)


// Array - Reduced Method (11/04)
// const products = [
//     {id: 1, title: 'Sleeveless Tee', price: 23.95, category:'Shirts', quantity: 2},
//     {id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter', quantity: 3},
//     {id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants', quantity: 5}
// ]

// const totalPrice = products.reduce((currentTotal, currentProduct) => currentTotal + currentProduct.price, 0)
// const totalQty = products.reduce((currentQty, currentProduct) => currentQty + currentProduct.quantity, 0)
// console.log(totalPrice)    //128.85000000000002
// console.log(totalQty)    //10

// const over25Titles = products.filter(prod => prod.price > 25).map(prod => prod.title)
// console.log(over25Titles)       //[ "Men's Hoodie", 'Denim Jeans' ]

// const hiloProducts = [...products].sort((p1, p2) => p1.price - p2.price).reverse()
//                         .map(prod => ({id: prod.id, title: prod.title}))
// console.log(hiloProducts)       //[
                                        //{ id: 2, title: "Men's Hoodie" },
                                        //{ id: 3, title: 'Denim Jeans' },
                                        //{ id: 1, title: 'Sleeveless Tee' }
                                //]


// Iterables 
// const animalsArr = ['tiger', 'lion', 'elephant', 'giraffe']
// for (let animal of animalsArr) {console.log(animal)}    //tiger
                                                        //lion
                                                        //elephant
                                                        //giraffe
// const animalObj = {name: 'tiger', genus: 'panthera', class: 'mammal'}
// for (let property of animalObj) {console.log(propertys)}        //TypeError: animalObj is not iterable


// Arrays - Static Method (Array.from)
// console.log(Array.from("string"))       //[ 's', 't', 'r', 'i', 'n', 'g' ]
// console.log(Array.from(new Set(['cat', 'bat', 'sat', 'cat', 'bat'])))   //[ 'cat', 'bat', 'sat' ]
// console.log(Array.from(new Map([[1, 'one'], [2, 'two'], [3,'three']])))    //[ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]

// function makeArray() {
//         return Array.from(arguments)
// }
// console.log(makeArray(1, 2, 3))       //[ 1, 2, 3 ]


// Map Objects (6:41pm)
// const exampleMap = new Map() 
// exampleMap.set(1, 'number one') 
// exampleMap.set('1', 'string one')
// exampleMap.set(true, 'true') 
// exampleMap.set({name: 'John'}, {phone: '0412345678'})
// exampleMap.set('1', 'second string one')
// console.log(exampleMap.size)    //4
// console.log(exampleMap)      //Map(4) {
                             //1 => 'numbern one',
                             //'1' => 'second string one',
                             //true => 'true',
                             //{ name: 'John' } => { phone: '012345678' }   


// Methods and Properties Continued...(7:50pm)
// console.log( exampleMap.get('1'))       //second string one
// console.log( exampleMap.get(2))      //undefined
// console.log( exampleMap.has(1))       //true
// console.log( exampleMap.delete(true))   //true

// exampleMap.clear()
// console.log(exampleMap)      //Map(0) {}


// Map Iritation - Keys - Values - Entries (Slide 48)
// const recipeMap = new Map([
//         ['flour', '1 cup'],
//         ['milk', '1/2 cup'],
//         ['eggs', '2'],
//         ['butter', '50g' ]
// ])
// for (let ingredient of recipeMap.keys()) {
//         console.log(ingredient)    //flour
//                                    //milk
//                                    //eggs
//                                    //butter
// }
// for (let quantity of recipeMap.values()) {
//         console.log(quantity)    //1 cup
//                                  //1/2 cup
//                                  //2
//                                  //50g
// }
// for (let item of recipeMap) {
//         console.log(item)       //[ 'flour', '1 cup' ]
//                                 //[ 'milk', '1/2 cup' ]
//                                 //[ 'eggs', '2' ]
//                                 //[ 'butter', '50g' ]
// }


// -Map - Conversions with Object
// const priceMap = new Map([
//         ['banana', 1],
//         ['pinapple', 2],
//         ['watermelon', 5]
// ])
// const priceObject = Object.fromEntries(priceMap)
// console.log(priceObject)        //{ banana: 1, pinapple: 2, watermelon: 5 }

// - Map conversions with Object Continued
// const priceObject = { banana: 1, pineapple: 2, watermelon: 5 }

// const priceMap = new Map( Object.entries(priceObject) )
// console.log(priceMap)  //Map(3) { 'banana' => 1, 'pinapple' => 2, 'watermelon' => 5 }
// console.log(priceMap.get('banana'))  //1


// Map - Caching Example
// function fetchExternalData(id) {
//         console.log(`Fetching data for ID: ${id}`)      //Fetching data for ID: 1
//         const data = `Data for ID: ${id}`
//         return data
// }

// const cache = new Map()

// function getCachedData(id) {
//         if (cache.has(id)) {
//            return cache.get(id)
//         }
// const data = fetchExternalData(id)
// cache.set(id, data)
// return data
// }

// console.log('#1: ' + getCachedData(1))  //#1: Data for ID: 1
// console.log('#2: ' + getCachedData(1))  //#2: Data for ID: 1


// Set - Set of Values
// const names = new Set(['Pedro', 'Oliver', 'Jack', 'Mateo'])
// names.add('Mateo')
// names.add('Oliver')
// names.add('Bruno')
// console.log(names.size)     //5
// console.log(names)      //Set(5) { 'Pedro', 'Oliver', 'Jack', 'Mateo', 'Bruno' }


// Set - Methods continued
// const names = new Set(['Pedro', 'Oliver', 'Jack', 'Mateo'])
// console.log(names.delete('Jack'))       //true
// console.log(names.has('Jack'))    //false
// console.log(names.has('Mateo'))      //true
// names.clear()
// console.log(names)      //Set(0) {}


// Set - Iteration over Set
// const names = new Set(['Pedro', 'Oliver', 'Jack', 'Mateo'])
// for (let name of names) {
//         console.log(name)       //Pedro
//                                 //Oliver
//                                 //Jack
//                                 //Mateo
// }
// Or
// names.forEach(name => console.log(name))     //Pedro
                                                //Oliver
                                                //Jack
                                                //Mateo


// Destructuring Assignment - Unpack
// const mj = ['Michael', 'Jordan']
// const [mjFirst, mjLast] = mj

// console.log(mjFirst, mjLast)    //Michael Jordan

// const [jcFirst, jcLast, , , jcPlace] = ['Julius', 'Ceaser', 'Consul', 'of the', 'Roman', 'Republic']
// console.log(`${jcFirst} ${jcLast} is a ${jcPlace}`)     //Julius Ceaser is a Roman


// Iterable on rigth side - Array Destructuring 
// const [a,b,c] = "abc"
// const [one, two, three] = new Set([1,2,3])
// const [[type, quantity]] = new Map([['apple', 4]])
// console.log(a, b, c, one, two, three, type, quantity)   //a b c 1 2 3 apple 4

// const monarch = {}; //Needed ; or it didn't print
// [ monarch.title, monarch.name ] = "King Charles".split(' ');
// console.log(monarch);   //{ title: 'King', name: 'Charles' }

// const teeProduct = {id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts'}
// for (let [key,value] of Object.entries(teeProduct)) {
//         console.log(`${key}: ${value}`)   //id: 1
//                                           //title: Sleeveless Tee
//                                           //price: 23.95
//                                           //category: Shirts
// }
// let student = 'James', teacher = 'Andrew';
// [student, teacher] = [teacher, student]

// console.log(student)    //Andrew
// console.log(teacher)    //James

// Destructuring Assignment - The array rest ...
// const [jcFirst, jcLast, ...jcTitles] = ['Julius', 'Caesar', 'Consul', 'of the', 'Roman', 'Republic']
// console.log(jcTitles)    //['Consul', 'of the', 'Roman', 'Republic']
// console.log(jcTitles.length)    //4

// Destructuring Assignment - Default values
// const [jcFirst = 'Unknown', jcLast, jcTitle = 'Consul'] = ['Julius', 'Caesar']
// console.log(jcFirst)    //Julius
// console.log(jcTitle)    //Consul


// Destr Assignment - Object Destructuring
// let {width, height, title} = {title: 'My Component', height: 100, width: 200}
// console.log(width, height, title)       //200 100 My Component

// let {width = 200, height = 100, title} = {title: 'My Component'}
// console.log(width, height, title)       //200 100 My Component

// function displayComponent ({height = 200, width = 100, title}) {
//         console.log(`<div style="width:${width}px; height:${height}px"><h2>${title}</h2></div>`)
// }

// displayComponent({width:200, title:'My Awesome Component'})     //<div style="width:200px; height:200px"><h2>My Awesome Component</h2></div>     
// displayComponent({title: 'My Amazing Component'})       //<div style="width:100px; height:200px"><h2>My Amazing Component</h2></div>
// displayComponent({width: 300, height:300, title:'My Average Component'})        //<div style="width:300px; height:300px"><h2>My Average Component</h2></div>

// let options = {width: 200, height: 100, title: 'My Component'}
// let {title, ...rest} = options
// console.log(title)      //My Component
// console.log(rest)       //{width: 200, height: 100}


// Date and Time
// const now = new Date()
// console.log(now)        //2024-12-07T03:27:49.573Z
// console.log(+now)       //1733542069573

// const epoch = new Date(0)
// const jan2_1970 = new Date(1000 * 60 * 60 * 24)
// console.log(epoch)      //1970-01-01T00:00:00.000Z
// console.log(jan2_1970)  //1970-01-02T00:00:00.000Z

// const christmas = new Date('2023-12-25')
// console.log(christmas)  //2023-12-25T00:00:00.000Z

// const nyeLocal = new Date('2023-12-31 23:59:59')
// const nyeUTC = new Date('2023-12-31 23:59:59+00:00')
// console.log(nyeLocal)   //2024-01-01T04:59:59.000Z
// console.log(nyeUTC)     //2023-12-31T23:59:59.000Z

// const boxingDay = new Date(2023, 11, 26)
// console.log(boxingDay)  //2023-12-26T05:00:00.000Z

// const remembranceDay = new Date(2023, 10, 11, 11, 11)
// console.log(remembranceDay)     //2023-11-11T16:11:00.000Z

// const christmas = new Date('2023-12-25')
// console.log(christmas.toLocaleDateString())     //12/24/2023
// console.log(christmas.toLocaleString('ko-KR', {timeZone: 'Asia/Seoul'}))        //2023. 12. 25. 오전 9:00:00

// const nyeLocal = new Date('2023-12-31 23:59:59')
// console.log(nyeLocal.toLocaleString())  //12/31/2023, 11:59:59 PM


// JSON (11/06)
// const student = {
//         name: 'Sita',
//         age: 28,
//         courses: ['HTML', 'CSS', 'JS'],
//         occupation: null
// }
// console.log(JSON.stringify(student))    //{"name":"Sita","age":28,"courses":["HTML","CSS","JS"],"occupation":null}


// JSON Skip Object Properties
// const book = {
//         title: "Gone With The Wind",
//         printTitle() {
//                 console.log(this.title)
//         },
//         releaseDate: undefined
// }
// console.log(JSON.stringify(book))       //{"title":"Gone With The Wind"}


// JSON - to.string
// const room = {
//         number: 23
// }
// const meetup = {
//         title: "Strategy Conference",
//         participants: ['Chris', 'Tina'],
// }
// meetup.place = room
// room.occupiedBy = meetup

// JSON.stringify(meetup)  //CREATES AN Error


// JSON - Replacer
// console.log(JSON.stringify(meetup, ['title', 'participants']))  //{"title":"Strategy Conference","participants":["Chris","Tina"]}

// console.log(JSON.stringify(meetup, function(key, value){
//         if(key != '' && value == meetup) return undefined
//         else if (typeof value == 'function') return value.toString()
//         return value
// }, 2))       //{
                  //"title": "Strategy Conference",
                  //"participants": [
                     //"Chris",
                     //"Tina"
                //],
                //"place": {
                        //"number": 23
                  //}
                //}


// JSON - toJSON
// const room = {
//         number: 23, toJSON() { return this.number}
// }

// const meetup = {
//         title: "Strategy Conference", participants: ['Chris', 'Tina']
// }

// meetup.place = room
// room.occupiedBy = meetup

// console.log(JSON.stringify(meetup))     //{"title":"Strategy Conference","participants":["Chris","Tina"],"place":23}

// const meetup = {
//         title: "Strategy Conference", participants: ['Chris', 'Tina'], date: '2024-11-06'
// }
// const meetupString = JSON.stringify(meetup)
// const meetupParsed = JSON.parse(meetupString, (key, value) => {
//         if ( !isNaN(Date.parse(value))) return new Date(value)
//                 return value
// })
// console.log(meetupParsed)       //{
//                                 //title: 'Strategy Conference',
//                                 //participants: [ 'Chris', 'Tina' ],
//                                 //date: 2024-11-06T00:00:00.000Z
//                                 //}


// // JSON - Parse for deep cloning
// const box1 = {
//         size: 'large',
//         dimensions: {width: 50, length: 70, height: 30, units: 'cm'},
//         items: ['glasses', 'plates', 'cutlery']
// }
// const boxString = JSON.stringify(box1)
// const box2 = JSON.parse(boxString)

// console.log("original box1 object:", box1)      //original box1 object: {
//                                                 //size: 'large',
//                                                 //dimensions: { width: 50, length: 70, height: 30, units: 'cm' },
//                                                 //items: [ 'glasses', 'plates', 'cutlery' ]
//                                                 //}
// console.log("JSON string of box1", boxString)   //original box1 object: {
//                                                 //size: 'large',
//                                                 //dimensions: { width: 50, length: 70, height: 30, units: 'cm' },
//                                                 //items: [ 'glasses', 'plates', 'cutlery' ]
// console.log("Parsed box 2  object:", box2)      //Parsed box 2  object: {
//                                                 //size: 'large',
//                                                 //dimensions: { width: 50, length: 70, height: 30, units: 'cm' },
//                                                 //items: [ 'glasses', 'plates', 'cutlery' ]
//                                                 //}