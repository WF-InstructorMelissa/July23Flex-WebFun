// Quake Data Functions
// grid lat x long
// lat = n-s 90 - -90
// long = e-s 180 - -180
// rows = 180
// columns = 360

let rows = 361
let cols = 181
let shape = '&#9744;'
let lat = 90
let long = -180

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
            
            cell.setAttribute('id', lat+','+long)
            // push the cells to the row
            rowDiv.appendChild(cell)
            lat--
            long++
        }
        // rowDiv.innerHTML = theGrid[y]
        // add row with cells to the main board div
        grid.appendChild(rowDiv)
    }
    grid.appendChild(board)
}

makeGrid()





// Block Game Functions
let startBox = document.getElementById('box')
function addBox() {
    let next = document.createElement('div')
    next.className = 'box next'
    startBox.appendChild(next)
}
// addBox()