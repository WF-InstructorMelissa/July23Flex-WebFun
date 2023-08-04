console.log("js connected")
let news  = document.getElementById('hidden')
function breakingNews() {
    
    setTimeout(function() {
        news.style.display = 'flex'
    }, 2000)
}
breakingNews()

function rehide() {
    console.log('button activated')
    news.style.display = 'none'
}
console.log('js still working')
function watchAlert() {
    console.log('alert triggered')
    alert("Sorry, Live Watch is not available in your area")
}


// big function thoughts
// if b7 clicked just ++ b7, br, bh and bc
// if b8 clicked updated s8 to 0 if - then ++ b8, br, bh, bc
// if b9 same as above

// Current Scores
let sc = document.getElementById('sc')
let bc = document.getElementById('bc')
// Current Inning
let inn = document.getElementById('inning')
// Savage runs
let sr = document.getElementById('sr')
let sh = document.getElementById('sh')
// Bomber runs
let br = document.getElementById('br')
let bh = document.getElementById('bh')
let currCell
// Savage Cells
let s8 = document.getElementById('s8')
let s9 = document.getElementById('s9')
// Bomber Cells
let b7 = document.getElementById('b7')
let b8 = document.getElementById('b8')
let b9 = document.getElementById('b9')

function addRun(a) {
    currCell = document.getElementById(a)
    // console.log('value of clicked item', currCell.innerText)
    if(a == 'b7') {
        console.log('bomber +1 run')
        if(currCell.innerText == '-') {
            currCell.innerText = 1
            br.innerText++
            bh.innerText++
            bc.innerText++
            console.log('bomber +1 run')
        }
        else if(currCell.innerText != '-') {
            console.log('bomber +1 run')
            currCell.innerText++
            br.innerText++
            bh.innerText++
            bc.innerText++
        }
    }
    if(a == 'b8') {
        inn.innerText = 'Bot 8th'
        console.log('bomber +1 run')
        if(b7.innerText == '-') {
            b7.innerText = 0
        }
        if(s8.innerText == '-') {
            s8.innerText = 0
        }
        if(currCell.innerText == '-') {
            currCell.innerText = 1
            br.innerText++
            bh.innerText++
            bc.innerText++
            console.log('bomber +1 run')
        }
        else if(currCell.innerText != '-') {
            console.log('bomber +1 run')
            currCell.innerText++
            br.innerText++
            bh.innerText++
            bc.innerText++
        }
    }
    if(a == 'b9') {
        if(parseInt(br.innerText) > parseInt(sr.innerText)) {
            inn.innerText = 'Final Score'
            if(s8.innerText == '-') {
                s8.innerText = 0
            }
            if(s9.innerText == '-') {
                s9.innerText = 0
            }
            if(b7.innerText == '-') {
                b7.innerText = 0
            }
            if(b8.innerText == '-') {
                b8.innerText = 0
            }
            setTimeout(function() {
                alert("Game Over Bombers win!")
            }, 1000)
        }
        else {
            inn.innerText = 'Bot 9th'
            if(s8.innerText == '-') {
                s8.innerText = 0
            }
            if(s9.innerText == '-') {
                s9.innerText = 0
            }
            if(b7.innerText == '-') {
                b7.innerText = 0
            }
            if(b8.innerText == '-') {
                b8.innerText = 0
            }
            if(currCell.innerText == '-'){
                currCell.innerText = 1
                br.innerText++
                bh.innerText++
                bc.innerText++
            }
            else if(currCell.innerText != '-') {
                console.log('bomber +1 run')
                currCell.innerText++
                br.innerText++
                bh.innerText++
                bc.innerText++
            }
        }
    }
    if(a == 's8') {
        inn.innerText = 'Top 8th'
        if(b7.innerText == '-') {
            b7.innerText = 0
        }
        if(currCell.innerText == '-') {
            currCell.innerText = 1
            sr.innerText++
            sh.innerText++
            sc.innerText++
        }
        else if(currCell.innerText != '-') {
            currCell.innerText++
            sr.innerText++
            sh.innerText++
            sc.innerText++
        }

    }
    if(a == 's9') {
        inn.innerText = 'Top 9th'
        if(s8.innerText == '-') {
            s8.innerText = 0
        }
        if(b7.innerText == '-') {
            b7.innerText = 0
        }
        if(b8.innerText == '-') {
            b8.innerText = 0
        }
        if(currCell.innerText == '-') {
            currCell.innerText = 1
            sr.innerText++
            sh.innerText++
            sc.innerText++
        }
        else if(currCell.innerText != '-') {
            currCell.innerText++
            sr.innerText++
            sh.innerText++
            sc.innerText++
        }
    }
}



// Final Time 2 hours 14 min 3 functions working styling is ok but could be better for sure