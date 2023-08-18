// Quake Data Functions
// grid lat x long
// lat = n-s 90 - -90
// long = e-s 180 - -180
// rows = 180
// columns = 360

let rows = 181
// let rows = 10
let cols = 361
// let cols = 10
let shape = '&#9744;'
let thelat = 90
let thelong = -180

function setGrid() {
    let grid = []
    for (let y = 0; y < rows; y++) {
        grid.push([])
        // Make cells in each row
        for (let x = 0; x < cols; x++) {
            grid[y].push(shape)
        }
    }
    console.log("the grid", grid)
    return grid
    // var plot =  document.getElementById('grid')
    // plot.innerText = grid
}
// setGrid()

// pa = 41 lat -76 long
// lat north = + lat south = -
// long west = - long east = +
// grid starts top left = 90 -180

function makeGrid() {
    var grid = document.getElementById('grid')
    let theGrid = setGrid()
    console.log('in make grid',theGrid)
    console.log('the grid length', theGrid.length)
    for(let y = 0; y < theGrid.length; y++) {
        // Make a div for each row and give it a class name
        let rowDiv = document.createElement('div')
        rowDiv.className = 'gridRow'
        console.log('the grid y length', theGrid[y].length)
        for(let x = 0; x < theGrid[y].length; x++) {
            // Make a div for each cell and give it a class in side 1 row
            let cell = document.createElement('div')
            // places each cell inside the row
            cell.innerHTML = theGrid[y][x]
            cell.className = 'cell'
            var lat = (y+thelat)
            // loop 1 lat = 0 + 90
            // loop 2 lat = 1 + 88
            // loop 2 lat = 2 + 86
            var long = (x+thelong)
            cell.setAttribute('id', long+','+lat)
            // push the cells to the row
            rowDiv.appendChild(cell)
        }
        // rowDiv.innerHTML = theGrid[y]
        // add row with cells to the main board div
        grid.appendChild(rowDiv)
        thelat-=2
    }
}

makeGrid()

function plotQuake(theId) {
    var spot = document.getElementById(theId)
    spot.style.color = 'red'
    spot.style.fontSize = '10em'
    spot.style.display = 'inline-block'
}
plotQuake('0,0')


// Block Game Functions
let startBox = document.getElementById('box')
function addBox() {
    let next = document.createElement('div')
    next.className = 'box next'
    startBox.appendChild(next)
}
// addBox()