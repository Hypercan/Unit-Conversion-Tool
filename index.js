/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/ 
let input = document.getElementById("input-field")
const convertBtn = document.getElementById("convert-btn")
let lengthCal = document.getElementById("res-length")
let volumeCal = document.getElementById("res-volume")
let massCal = document.getElementById("res-mass")


convertBtn.addEventListener("click", function(){
    calculateLength()
    calculateVolume()
    calculateMass()
    
})
function calculateLength(){
    let realValue = input.value
    let metToFeet = realValue * 3.281;
    let feetToMet = realValue / 3.281;
    lengthCal.textContent = `${realValue} meters = ${metToFeet.toFixed(3)} feet | ${realValue} feet = ${feetToMet.toFixed(3)} meter` 
}
function calculateVolume(){
    let realValue = input.value
    let literToGallon = realValue * 0.264;
    let gallonToLiter = realValue / 0.264;
    volumeCal.textContent = `${realValue} liters = ${literToGallon.toFixed(3)} gallons | ${realValue} gallons = ${gallonToLiter.toFixed(3)} liter` 
}
function calculateMass(){
    let realValue = input.value
    let kiloToPound = realValue * 2.204;
    let poundToKilo = realValue / 2.204;
    massCal.textContent = `${realValue} kilos = ${kiloToPound.toFixed(3)} pounds | ${realValue} pounds = ${poundToKilo.toFixed(3)} kilos` 
}
