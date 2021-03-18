let number = 0 
let value = 0
let length = 0
let width = 0
let area = length * width
let sentence ='This is the area of a square'

document.getElementById('button').addEventListener('click', addition)

function addition () {
  width = document.getElementById('addition').value
  length = document.getElementById('addition').value
  number=parseInt(value)
  number = length * width
  alert(number)

}