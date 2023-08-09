// #1 I want to calculate a special value based on any given number I chose.  I need to add all the numbers upto but excluding the given number and print it but return that value plus 10

function one(num) {
    var sum = 0
    for(var i = 0; i < num; i++) {
        sum = sum +i
    }
    console.log(sum)
    return sum+10
}

// #2 I have a rectangular garden that I want to divide into smaller sections for planting different crops.  Using given dimensions how can I determine then number of sections I can have?

function two(x, y) {
    for(var i = 0; i < x; i++) {
        for(var j = 0; j < y; j++) {
            console.log(i * j)
        }
    }
    return x * y
}

// #3  The auto grader broke.  It graded some tests with a negative value.  Since all the grades are all in the computer I want to create a function where all the tests that were graded wrong are automatically marked with the word Dojo for easy identification and then return the final list of grades.

function three(array) {
    for(var i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            array[i] = 'Dojo'
        }
    }
    return array
}

// #4  Now that we have this new list of grades I would like to find the average of the remaining good grades and printing that to the console while returning the count of grades that were bad

function four(array) {
    var count = 0
    var sum = 0
    var good = 0
    var avg = 0
    for(var i = 0; i < array.length; i++) {
        if(array[i] == 'Dojo') {
            count++
        } else {
            sum = sum + array[i]
            good++
        }
    }
    avg = sum / good
    console.log(avg)
    return count
}

// #5  I want to organize a special event, but I an exclusive list.  I have decided to put a number next to the names so that I can invite those that have an even number next to their name.  Return the list of lucky friends that I will invite

function five(num) {
    var arr = []
    for(var i = 0; i < num; i++) {
        if(i % 2 == 0) {
            arr.push(i)
        }
    }
    return arr
}

// #6 I am organizing a game for a programmers summer camp.  Everyone already knows the classic Fizz Buzz problem but it is a classic for a reason so instead we will call it Jungle Jump and use 7 and 11.  So if the number is divisible by 7 they yell Jungle divisible by 11 Jump and both Jungle Jump

function jungleJump(maxNumber) {
    for (var i = 1; i <= maxNumber; i++) {
        if (i % 7 === 0 && i % 11 === 0) {
            console.log("Jungle Jump");
        } else if (i % 7 === 0) {
            console.log("Jungle");
        } else if (i % 11 === 0) {
            console.log("Jump");
        } else {
            console.log(i);
        }
    }
}

