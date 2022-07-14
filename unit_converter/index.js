let input = document.getElementById('unit-input')
let length = document.getElementById('converted-length')
let volume = document.getElementById('converted-volume')
let mass = document.getElementById('converted-mass')

function convert() {
    let meters = input.value / 3.281
    let feet = input.value * 3.281
    let liters = input.value / 0.264
    let gallons = input.value * 0.264
    let kilograms = input.value / 2.204
    let pounds = input.value * 2.204
    let inputValue = input.value

    length.innerHTML = `${inputValue} meters = ${feet.toFixed(3)} feet | ${inputValue} feet = ${meters.toFixed(3)} meters`
    volume.innerHTML = `${inputValue} liters = ${gallons.toFixed(3)} gallons | ${inputValue} gallons = ${liters.toFixed(3)} liters`
    mass.innerHTML = `${inputValue} kilos = ${pounds.toFixed(3)} pounds | ${inputValue} pounds = ${kilograms.toFixed(3)} pounds`
}