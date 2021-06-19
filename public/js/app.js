console.log('client side js file load')

const weatherForm = document.querySelector('form')
const dataElement = document.querySelector('input')
const msg1 = document.querySelector('#message-1')
const msg2 = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const location = dataElement.value
    msg1.textContent = 'Searching...'
    msg2.textContent = ''
    fetch('http://localhost:3000/weather?address=' + location).then((res) => {
    res.json().then((dataWeather) => {
        if(dataWeather.error) {
            msg1.textContent = dataWeather.error
        } else {
            msg1.textContent = dataWeather.forecast
            msg2.textContent = dataWeather.location
        }
    })
})

    
})