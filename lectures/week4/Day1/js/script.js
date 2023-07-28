console.log("I am connected")

// Possibly on Test
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

// Possibly on Test
function theCity() {
    var choice = document.alertForm.city.value
    console.log(choice)
    alert("The city chosen was: "+choice)
}

// Possibly on Test
function acceptCookie() {
    var cookieBox = document.getElementById('cookie')
    cookieBox.style.display = 'none'
}

// Possibly on Test
function likes(a) {
    var p = document.getElementById(a)
    // console.log(p)
    var currLike = parseInt(p.innerText)
    // console.log(currLike)
    currLike++
    // currLike = currLike + 1
    // console.log(currLike)
    p.innerText = currLike
}

function denied() {
    var dangerBox = document.getElementById('hiddenDanger')
    console.log('infunction')
    var div01 = document.createElement('div')
    var div02 = document.createElement('div')
    var img = new Image()
    var div03 = document.createElement('div')
    var button = document.createElement('button')
    var a = document.createElement('a')
    var h2 = document.createElement('h2')
    var script = document.createElement('script')
    div01.className = "popup"
    div02.className = "innerPopup"
    div03.className = "row"
    img.src = "./images/danger.jpg"
    img.alt = "Danger"
    a.className = "close"
    a.innerText = "Close"
    a.href = ""
    h2.innerText = "You have just been hacked close me and accept cookies"
    script.src = "./js/popup.js"
    button.appendChild(a)
    div03.appendChild(img)
    div03.appendChild(button)
    div02.appendChild(div03)
    div02.appendChild(h2)
    div01.appendChild(div02)
    div01.appendChild(script)
    dangerBox.appendChild(div01)
}
function addImg() {
    var box = document.getElementById('imgText')
    var img = new Image()
    var p = document.createElement('h3')
    img.src = "./images/danger.jpg"
    img.alt = "Danger"
    p.innerText = 'Programming Danger Skull'
    box.appendChild(img)
    box.appendChild(p)
}
// This is for the denied function
{/* <div class="popup">
                <div class="innerPopup">
                    <div class="row">
                        <img src="./images/danger.jpg" alt="Danger">
                        <button><a href='' class='close'>Close</a></button>
                    </div>
                    <h2>You have just been hacked close me and accept cookies</h2>
                </div>
            </div> */}
            // <script src="./js/popup.js"></script>