// #1 I want to calculate a special value based on any given number I chose.  I need to add all the numbers upto but excluding the given number and print it but return that value plus 10
// Number is provided
// For loop to add all the numbers before the given number
// Find the value or sum of numbers
// Return value plus 10
// Console.log the value

function one(num) {
    var sum = 0
    for(var i = 1; i < num; i++) {
        sum = sum + i
    }
    console.log(sum)
    return sum + 10
}
// console.log(one(5))


// function called one taking 1 parameter called num
// variable called sum setting equal to 0
// start for loop i starting at 1 going till no longer less than the parameter increasing by 1 each loop
// taking the current value of sum making it equal to the value of sum plus the value of i
// printing the final value sum after loop is done
// return the final value of sum plus 10

// #2 I have a rectangular garden that I want to divide into smaller sections for planting different crops.  Using given dimensions how can I determine then number of sections I can have?

function two(x, y) {

}

// #3  The auto grader broke.  It graded some tests with a negative value.  Since all the grades are all in the computer I want to create a function where all the tests that were graded wrong are automatically marked with the word Dojo for easy identification and then return the final list of grades.

// Some grades will be negative or positive
// We know that there is a list of these grades
// Negative / bad grade will be changing it to the word Dojo
// Return the updated list of grades

// an array of grades both negative and positive
// loop through the array of grades
// if negative change to Dojo otherwise do nothing (to check if negative value < 0)
// return array
var array = [78, -5, 92, -1, 0, -10, 87]

function three(array) {
    for(var i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            array[i] = 'Dojo'
        }
    }
    return array
}
// console.log(three(array))

// #4  Now that we have this new list of grades I would like to find the average of the remaining good grades and printing that to the console while returning the count of grades that were bad

// Augmented list of grades
// Take the actual grades and find the average of them (add grades divide by number of grades = average)
// Count the number of good grades
// Add the good grades together
// Then divide good / number of good
// Count the number of Dojos that are in the list

// For loop to look at each of the items in the updated array
// if loop value is Dojo add to the bad count value
// otherwise add to the good count value and add to the sum
// after loop find average by sum / good grade
// console.log avg
// return bad count

function four(array) {
    var good = 0
    var bad = 0
    var sum = 0
    var avg = 0
    var arr = three(array)
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == 'Dojo') {
            bad++
        } else {
            good++
            sum = sum + arr[i]
        }
    }
    avg = sum / good
    console.log(avg)
    return bad
}

console.log(four(array))

// #5  I want to organize a special event, but I an exclusive list.  I have decided to put a number next to the names so that I can invite those that have an even number next to their name.  Return the list of lucky friends that I will invite

function five(num) {

}

// #6 I am organizing a game for a programmers summer camp.  Everyone already knows the classic Fizz Buzz problem but it is a classic for a reason so instead we will call it Jungle Jump and use 7 and 11.  So if the number is divisible by 7 they yell Jungle divisible by 11 Jump and both Jungle Jump

function jungleJump(maxNumber) {

}

