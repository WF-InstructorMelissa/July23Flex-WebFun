console.log("I am connected")

let x = 10

function condition() {
    let h1 = document.getElementById('hi')
    if(x > 10) {
        console.log('if statement triggered')
        h1.innerText = 'Hello'
    } else {
        console.log('else was triggered')
        h1.innerText = 'Bad h1'
    }
}
condition()