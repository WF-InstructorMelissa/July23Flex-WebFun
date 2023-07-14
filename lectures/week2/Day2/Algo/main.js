// CodePen Link - https://codepen.io/WolfsVeteran/pen/BaNozJa

// 1. What is the difference between let var and const

// let - can be changed (mutable) - can only be declared 1 time per page
let b = 'Hi'
// let b = 'Hello'
b = "Hello"

// var - can be changed (mutable) - can be redeclared
var a = 10
var a = 12
a = 14
a = 'Is this ok?'

// const -  stays the same (immutable)
const c = 'cool'
// const c = 'hot'
// c = 'warm'


// 1a data types
// string = ''
// integer = 1
// boolean = True/False
// array
// objects

// 2. What does and array and an object look like and their uses


// array - basically a list of items
let arr01 = [1, 2, 3, 4, 5, 6, 7, ]
let arr02 = ['Hello', 'from', 'the', 'array']
let arr03 = [a, b, c, arr01]
console.log('this is arr03', arr03)


// object - a dictionary a container holding a key/value pairs
obj01 = {
    'name': 'Melissa',
    'age': 'old as dirt'
}
console.log('line 44 value of name:', obj01.name)


// What are the basic instructions for a for loop
// for(where to start, where you want to end, how to move about) {instructions}

// create a for loop that goes through an array of numbers and prints a new array that contains only odd numbers

let arr04 = [4,6,7,9,1,2,4,5,6,10,22,34,45,78]
let odd = []
for(let i =0; i < arr04.length; i++) {
    if(arr04[i] % 2 != 0) {
        odd.push(arr04[i]) // push into odd array the value at index i from arr04
    }
}
console.log('the odd array:', odd)


// for loop using an obj
obj02 = [
    {'name': 'Melissa', 'age': 45},
    {'name': 'Corey', 'age': 35}
]
for(let i = 0; i< obj02.length; i++) {
    console.log(obj02[i].name)
}

let playing = true
while(playing) {
    console.log('while loop keeps running')
    playing = false
}