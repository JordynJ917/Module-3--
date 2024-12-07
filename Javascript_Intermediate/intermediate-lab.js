// -Intermediate - Lab 1
// function ucFirstLetters(str) {
//     let newString = '';
//     let words = str.split(' ')
//     for(let word of words) {
//         if (newString.length !=0) newString += ' '
//         newString += word.charAt(0).toUpperCase() + word.substring(1)
//     }
//     return newString;
// }
// console.log(ucFirstLetters("los angelas"))  //Los Angelas
// console.log(ucFirstLetters("chicago windy city"))   //Chicago Windy City
// console.log(ucFirstLetters("texas"))    //Texas


// -Intermediate - Lab 2
// function truncate(str, max) {
//     if(str.length > max) {
//         return str.substring(0,max) + '...'
//     }
//     else {
//         return str
//     }
// }
// function truncate2(str, max) {
//     return (str.length > max) ? str.substring(0, max) + '...' :str
// }
// console.log(truncate('This text will be truncated if it is too long', 25))  //This text will be truncat...
// console.log(truncate2('This text will be truncated if it is too long',25))  //This text will be truncat...


// -Intermediate - Lab 3
// const animals = ['Biger,', 'Giraffe']
// console.log(animals)    //[ 'Tiger,', 'Giraffe' ]

// animals.push('Hippo')
// animals.push('Lion')
// console.log(animals)    //[ 'Tiger,', 'Giraffe', 'Hippo', 'Lion' ]

// animals.unshift('Squirrel')
// animals.unshift('Bird')
// console.log(animals)    //[ 'Bird', 'Squirrel', 'Tiger,', 'Giraffe', 'Hippo', 'Lion' ]

// animals.sort()
// console.log(animals)    //[ 'Bird', 'Giraffe', 'Hippo', 'Lion', 'Squirrel', 'Tiger,' ]

// function replaceMiddleAnimal(newValue) {
//     let halfway = animals.length / 2;
//     animals[halfway] = newValue
// }
// replaceMiddleAnimal('Cat')
// console.log(animals)    //[ 'Bird', 'Giraffe', 'Hippo', 'Cat', 'Squirrel', 'Tiger,' ]

// function findMatchingAnimals(beginsWith) {
//     return animals.filter(animal =>
//         animal.toLowerCase().startsWith(beginsWith.toLowerCase())
//     )
// }
// console.log(findMatchingAnimals('h'))   //[ 'Hippo' ]
// console.log(findMatchingAnimals('b'))   //[ 'Biger,', 'Bird' ]


// Intermediate - Lab 4
// function camelCase(cssProp) {
//     let words = cssProp.split('-')
//     let camelString = ''

//     words.forEach(word => {
//         if (camelString.length == 0) {
//             camelString = word
//         }
//         else {
//           camelString += word.charAt(0).toUpperCaase() + word.substring(1)
//         }
//     })
//     return camelString
// }

// const camelCase2 = (cssProp) => {
//     let camelString
//     for (let word of cssProp.split('-')) {
//         camelString += (camelString.length == 0) ? word : word.charAt(0).toUpperCaase() + word.substring(1)
//     }
// }
// console.log(camelCase('margin-left'))
// console.log(camelCase2('backgroung-image'))
// console.log(camelCase('display'))


// -Intermediate - Lab 5 
// let twentyCents = 0.20
// let tenCents = 0.10

// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
//                             //0.2 + 0.1 = 0.30000000000000004
// let fixedTwenty = twentyCents.toFixed(2)
// let fixedTen = tenCents.toFixed(2)

// console.log(fixedTwenty + fixedTen) //0.200.10
// // A - toFixed when adding + concatanates and returns as a string
// function currencyAddition(float1, float2) {
//     let wholeNumber1 = float1 * 100;
//     let wholeNumber2 = float2 * 100;
//     let wholeResult = 0;

//     return(wholeNumber1 + wholeNumber2) / 100
// }
// function currencyOperation(float1, float2, operation) {
//     let wholeNumber1 = float1 * 100;
//     let wholeNumber2 = float2 * 100;
//     let wholeResult = 0;

//     switch (operation) {
//         case '+' :
//             wholeResult = wholeNumber1 + wholeNumber2; break
//         case '*' :
//             wholeResult = wholeNumber1 * wholeNumber2; break
//         case '-' :
//             wholeResult = wholeNumber1 - wholeNumber2; break
//         case '/' :
//             wholeResult = wholeNumber1 / wholeNumber2; break
//         default :
//             wholeResult = wholeNumber1 + wholeNumber2
//     }

//     return wholeResult / 100
// }

// function currencyOperation2(float1, float2, operation, numDecimals) {
//     let factor = 10** numDecimals
//     let wholeNumber1 = float1 * factor
//     let wholeNumber2 = float2 * factor
//     let wholeResult = 0
//     switch (operation) {
//         case '+' :
//             wholeResult = wholeNumber1 + wholeNumber2; break
//         case '*' :
//             wholeResult = wholeNumber1 * wholeNumber2; break
//         case '-' :
//             wholeResult = wholeNumber1 - wholeNumber2; break
//         case '/' :
//             wholeResult = wholeNumber1 / wholeNumber2; break
//         default :
//             wholeResult = wholeNumber1 + wholeNumber2
//     }
//     return Math.round(wholeResult / factor)
// }

// console.log(0.3 == currencyAddition(0.1, 0.2))  //true
// console.log(0.3 == currencyOperation(0.1, 0.2)) //true
// console.log(currencyOperation2(0.2, 0.1, '+', 2))   //0


// -Intermediate - Lab 6
// const colours = ['Red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yello']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

// function unique(duplicatesArray) {
//     const uniques = [];
//     duplicatesArray.forEach(element => {
//         if (!uniques.includes(element)) {
//             uniques.push(element)
//         }
//     }
//     )
//     return uniques
// }

// console.log(unique(colours))    //[
//                                 //'Red',    'green',
//                                 //'blue',   'yellow',
//                                 //'orange', 'red',
//                                 //'yello'
//                                 //]
// console.log(unique(testScores)) //[
//                                 //55, 84, 97, 63,
//                                 //32, 91, 43
//                                 //]


// -Intermediate - Lab 7
//  const books = [
//     {id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
//     { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//     { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
//     { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
//     { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }
// ]

// function getBookTitle(bookId) {
//     let matchBook = books.find(book => bookId.id == bookTitle)
//     return matchBook.title
// }
// console.log(getBookTitle(3))

// function getOldBooks() {
//     return books.filter(book => book.year < 1950)
// }
// console.log(getOldBooks())  //[
                            // {
                            //  id: 1,
                            //  title: 'The Great Gatsby',
                            //  author: 'F. Scott Fitzgerald',
                            //  year: 1925
                            // },
                            // { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
                            // {
                            //   id: 4,
                            //   title: 'Brave New World',
                            //   author: 'Aldous Huxley',
                            //   year: 1932
                            //  }
                            //]

// function addGenre() {
//     books.map(book => book.genre = 'Classic')
// }
// addGenre()
// console.log(books)  //[
                    //  {
                    //   id: 1,
                    //   title: 'The Great Gatsby',
                    //   author: 'F. Scott Fitzgerald',
                    //   year: 1925,
                    //   genre: 'Classic'
                    //  },
                    //  {
                    //   id: 2,
                    //   title: 'To Kill a Mockingbird',
                    //   author: 'Harper Lee',
                    //   year: 1960,
                    //   genre: 'Classic'
                    //  },
                    //  {
                    //   id: 3,
                    //   title: '1984',
                    //   author: 'George Orwell',
                    //   year: 1949,
                    //   genre: 'Classic'
                    //  },
                    //  {
                    //   id: 4,
                    //   title: 'Brave New World',
                    //   author: 'Aldous Huxley',
                    //   year: 1932,
                    //   genre: 'Classic'
                    //  },
                    //  {
                    //   id: 5,
                    //   title: 'The Catcher in the Rye',
                    //   author: 'J.D. Salinger',
                    //   year: 1951,
                    //   genre: 'Classic'
                    //  }
                    // ]

// function getTitles(authorInitial) {
//     return books
//     .filter(book => book.author.startsWith(authorInitial))
//     .map(book => book.title)
// }
// console.log(getTitles('G')) //[ '1984' ]

// function latestBook() {
//     let latestYear = 0;
//     books.forEach(book => {
//         if (book.year > latestYear){
//             latestYear = book.year
//         }
//     })
//     return books.find(book => book.year === latestYear)
// }


// Intermedieate - Lab 8
// const phoneBookABC = new Map()
// phoneBookABC.set('Annabelle', ' 01412312343')
// phoneBookABC.set('Barry', ' 0433221117')
// phoneBookABC.set('Caroline', ' 0455221182')

// const phoneBookDEF = new Map([
//     ['Dave', ' 0123456789'],
//     ['Elizabeth', ' 0123456798'],
//     ['Fred', ' 0123456987']
// ])

// phoneBookABC.set('Caroline', ' 0123459876')

// function printPhoneBooks(contacts) {
//     contacts.forEach((phone, name) => {
//         console.log(`${name}: ${phone}`)
//     })  
//     }
// printPhoneBooks(phoneBookABC)   //Annabelle:  01412312343
//                                 //Barry:  0433221117
//                                 //Caroline:  0123459876
// const phoneBooks = new Map([...phoneBookABC, ...phoneBookDEF])
// console.log([...phoneBooks.keys()]) //[ 'Annabelle', 'Barry', 'Caroline', 'Dave', 'Elizabeth', 'Fred' ]


// -Intermediate - Lab 9 
// let salaries = {
//     "Timothy": 35000,
//     "David": 25000,
//     "Mary": 55000,
//     "Christina": 75000,
//     "James": 43000
// }

// function sumSalaries(salaries) {
//     let total = 0;
//     for (let salary of Object.values(salaries)) {
//         total += salary
//     }
//     return total
// }
// console.log(sumSalaries(salaries))      //233000

// function topEarner(salaries) {
//     let highestSalary = 0;
//     let highestEarner = 0;
//     for( let [name, salary] of Object.entries(salaries)) {
//         if (salary > highestSalary) {
//             highestSalary = salary
//             highestEarner = name
//         }
//     }
//     return `${highestEarner} earns the most of everyone`
// }

// console.log(topEarner(salaries))    //Christina earns the most of everyone


// -Intermediate - Lab 10
const today = new Date()
console.log(`Current time is ` + today.toLocaleTimeString())    //Current time is 6:02:16 PM

// console.log(today.getHours() + 'hours have passed today')   //18hours have passed today

// const today2 = new Date()
// console.log(`${today.getHours() * 60 + today.getMinutes()} minutes that have passed by`)    //1082 minutes that have passed by

// const today3 = new Date()
console.log(`${today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds()} seconds have gone by `)    // 1216 seconds have gone by

const birthday = new Date('1993-01-01')
let years = today.getFullYear() - birthday.getFullYear();
let months = today.getMonth() - birthday.getMonth();
let days = today.getDate() - birthday.getDate();
if (days < 0) {months -= 1; days += 30}
if (months < 0) {years -= 1; months += 12}

console.log(`I am ${years} years, ${months} months, ${days} days old`)  //I am 31 years, 10 months, 8 days old