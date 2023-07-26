console.log("I am connected")

function changeMe(a) {
    console.log("you hovered over me")
    var img01 = document.getElementById('hide')
    var img02 = document.getElementById('show')
    // console.log(img01, img02)
    if(a === 'hide') {
        img01.style.display = 'none'
        img02.style.display = 'flex'
        console.log('if trigggered')
    } else {
        img01.style.display = 'flex'
        img02.style.display = 'none'
        console.log('else triggered')
    }
}

function theCity() {
    var choice = document.alertForm.city.value
    console.log(choice)
    alert("The city chosen was: "+choice)
}