array = [2,4,6,5,7,8,9,10,4,24]
sum = 0

for(var i = 0; i < array.length; i++) {
    if(array[i] % 2 == 0) {  // if the value of i divided by 2 has 0 remainders then it is even
        sum = sum + array[i]
    }
    console.log(sum)
    
}
return sum


// let x = 5

if(x < 5) {
    console.log(x, 'is less than 5')
} 
else if (x<=5) {
    console.log(x, 'is less than or equal to 5')
}else {
    console.log(x,'is bigger than 5')
}

let x = -77
if(x < 5) {
    console.log('less than 5')
}
if(x == 10) {
    console.log('less than 10')
}
else if(x < -20) { // this will still trigger because it will only print if the if directly above it is false but this is true
    console.log('less than -20')
} else (
    console.log('just to darn big')
)