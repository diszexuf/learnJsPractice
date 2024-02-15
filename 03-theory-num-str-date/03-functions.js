// function declaration
// function greet(name) {
// 	console.log(`Hello, ${name}`)
// }

// // funcrion expression
// const greet2 = function (name) {
// 	console.log(`2 Hello, ${name}`)
// }

// greet('Alex')
// greet2('Alex')

// console.dir(greet)

// setTimeout(function () {
// 	greet('asda')
// }, 1500)

// let counter = 0
// setInterval(function () {
// 	counter === 5 ? clearInterval : console.log(++counter)
// }, 100)

// Arrow functions

// function greet(name) {
// 	console.log(`Hello, ${name}`)
// }

// const arrow = (name, age) => {
// 	console.log(`Hello, ${name} ${age}`)
// }

// const arrow2 = (name) => console.log(`Hello ${name}`)

// arrow('asd', 12)
// arrow2('asd')

// function pow(num, exp) {
// 	return Math.pow(num, exp)
// }

// const pow2 = (num, exp) => Math.pow(num, exp)

// console.log(pow(2, 3))
// console.log(pow2(2, 3))

// Default params

const sum = (a = 40, b = a / 2) => a + b
// console.log(sum(40, 2))
// console.log(sum())

function sumAll(...numbers) {
	// let res = 0
	// for (let num of numbers) {
	// 	res += num
	// }
	// return res
	return numbers.reduce((acc, cur) => (acc += cur), 0)
}

console.log(sumAll(1, 2, 3, 4, 5))

// Closures

function createPerson(name) {
	return function (lastname) {
		console.log(`${name} ${lastname}`)
	}
}

const addLastName = createPerson('alex')
addLastName('Minin')
addLastName('MESHAKOV')
