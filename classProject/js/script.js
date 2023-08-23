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
    // console.log("the grid", grid)
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
    // console.log('in make grid',theGrid)
    // console.log('the grid length', theGrid.length)
    for(let y = 0; y < theGrid.length; y++) {
        // Make a div for each row and give it a class name
        let rowDiv = document.createElement('div')
        rowDiv.className = 'gridRow'
        // console.log('the grid y length', theGrid[y].length)
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

// makeGrid()

function plotQuake(theId) {
    var spot = document.getElementById(theId)
    spot.style.color = 'red'
    spot.style.fontSize = '10em'
    spot.style.display = 'inline-block'
}
// plotQuake('0,0')


// Block Game Functions
let startBox = document.getElementById('box')
function addBox() {
    let next = document.createElement('div')
    next.className = 'box next'
    startBox.appendChild(next)
}
// addBox()
let APIKey=`&appid=179fcd38509ce9a4671ca1be23eac6ba`
// let theZip= 18603
// let lat = 41.0665
// let lon = -76.2443
// let theZip
let lat
let lon
let geoUrl = `http://api.openweathermap.org/geo/1.0/zip?zip=${theZip}${APIKey}`
console.log(geoUrl)
let weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily&units=imperial${APIKey}`
console.log(weatherUrl)

function getZip(zip) {
    let aZip = document.getElementById(zip).value
    let theResult = document.getElementById('theResults')
    console.log(aZip)
    theResult.innerHTML += `
        <h1>The Results:</h1>
        <h2 id="newZip">${aZip}</h2>
        <button onclick="getCoords('newZip')">Show my Lat and Long</button>
    `
}

function getCoords(newZip) {
    let theZip = document.getElementById(newZip)
    let theResult = document.getElementById('theResults')
    console.log(theZip)
    theZip = parseInt(theZip.innerText)
    console.log(theZip)
    setTimeout(function() {
        getLocation(theZip)
        setTimeout(function() {
            theResult.innerHTML += `
                <ul>
                    <li>The Latitude: <span id="myLat">${lat}</span></li>
                    <li>The Longitude: <span id="myLon">${lon}</span></li>
                </ul>
                <button onclick="getConditions('myLat', 'myLon')">Get My Conditions</button>
                `
        }, 2000)
    }, 2000)
}




async function getLocation(theZip) {
    let response = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${theZip}${APIKey}`)
    let data =  await response.json()
    console.log('data', data)
    // data {zip: '18603', name: 'Berwick', lat: 41.0665, lon: -76.2443, country: 'US'}
    // returning an object -  we want to look up the definition or value of lat
    console.log('the lat', data.lat)
    lat = data.lat
    lon = data.lon
    console.log('updated lat/long', lat, lon)
}
function getConditions(aLat, aLon) {
    let lat = document.getElementById(aLat)
    let lon = document.getElementById(aLon)
    let theResult = document.getElementById('theResults')
    lat = parseInt(lat.innerText)
    lon = parseInt(lon.innerText)
    setTimeout(function() {
        let show = showConditions(lat, lon)
        setTimeout(function(){
            let temp = show
            console.log(temp)
            // theResult.innerHTML += `
            // <h2>Current Conditions</h2>
            //     <table>
            //         <tr>
            //             <th>Temp</th>
            //             <th>Humidity</th>
            //             <th>Pressure</th>
            //             <th>Description</th>
            //             <th>Icon</th>
            //         </tr>
            //         <tr>
            //             <td>${show.current.temp}&#8457;</td>
            //             <td>${show.current.humidity}%</td>
            //             <td>${show.current.pressure}mB</td>
            //             <td>${show.current.weather[0].description}</td>
            //         /tr>
            //     </table>
            // `
        }, 2000)
    }, 2000)
}

async function showConditions(lat, lon) {
    let res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily&units=imperial${APIKey}`)
    let weather = await res.json()
    console.log('weather', weather)
    console.log('weather', weather.current.temp)
    console.log('weather', weather.current.weather[0].description)
    return weather
}

// getConditions()