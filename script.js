const container = document.querySelector('.container')
const select = document.getElementById('movie')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const price = document.getElementById('price')

let ticketPrice = +select.value

//functions
//save selected movie index and price
const setMovieData = function(movieIndex, movieValue){
    localStorage.setItem('movieIndex', movieIndex)
    localStorage.setItem('movieValue', movieValue)
}

const priceCalculator = function(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected')

    const seatsIndex = [...selectedSeats].map(element => [...seats].indexOf(element))
    
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

    const selectedSeatCount = selectedSeats.length
    count.innerText = selectedSeatCount
    price.innerText = selectedSeatCount * ticketPrice
}

//on click for seat selection
/*seats.forEach(element => element.addEventListener('click', function(e){
    e.target.classList.add('selected')
    priceCalculator()
}))*/

//on click for seat selection
container.addEventListener('click', (e) => {
    if(
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    ){
        e.target.classList.toggle('selected')
        priceCalculator()
    }
})

//on select change event listener
select.addEventListener('change', function(e){
    ticketPrice = e.target.value
    setMovieData(e.target.selectedIndex, e.target.value)
})