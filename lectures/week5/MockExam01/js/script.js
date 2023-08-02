console.log("js connected")

function callAlert() {
    alert("Contact 555-555-5555")
}

function sold(ele) {
    let pic = ele
    console.log('the ele', pic)
    console.log(pic.src)
    pic.src = './images/sold.png'
}

function increaseBid(a) {
    let span = document.getElementById(a)
    console.log('the span', a)
    console.log('the value', span.innerText)
    newValue = parseInt(span.innerText)
    console.log('the value 02', newValue)
    span.innerText = newValue + 10
}