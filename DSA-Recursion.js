// 1. Counting Sheep

const countingSheep = function(input) {
    if (input === 0) {
        console.log('All sheep jumped over the fence')
    } else {
        console.log(`${input}: Another sheep jumps over the fence`)

        const newNumber = input - 1;
        countingSheep(newNumber)
    }
}

// console.log(countingSheep(3))


// Power Calculator

const powerCalculator = function(base, exp) {
    if (exp < 0) {
        console.log('exponent should be >= 0')
    } else if (exp === 0) {
        return 1
    } else {
        return base * powerCalculator(base, exp - 1)
    }
}

// console.log(powerCalculator(10, 2))


// Reverse String

const reverseString = function(str) {
    if (str === '') {
        return '';
    } else {
        return reverseString(str.substr(1)) + str.charAt(0)
    }
}

// console.log(reverseString('How much wood would a woodchuck chuck if a woodchuck could chuck wood?'))


// nth Triangle Number

const triangleNumber = function(n) {
    if (n === 0) {
        return 0
    } else {
        return n + triangleNumber(n - 1)
    }
} 

// console.log(triangleNumber(3))


// String Splitter - I have no idea


// Fibonacci

const fibonacci = function(num) {
    if (num === 1) {
        return [0, 1]
    } else {
        const s = fibonacci(num - 1)
        s.push(s[s.length - 1] + s[s.length - 2])
        return s
    }
}

// console.log(fibonacci(10))


// Factorial

const factorial = function(num) {
    if (num === 1) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}

// console.log(factorial(5))


// Find a way out of the maze -- what the hell...



// Anagrams

const anagrams = function(str) {

}











// Binary representation

const binary = function(num) {
    if (num === 0) {
        return 0
    } else {
        return num % 2 + 10 * binary(Math.floor(num / 2))
    }
}

console.log(binary(12))