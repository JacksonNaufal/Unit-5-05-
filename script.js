let number = 0
const value = 0
let length = 0
let area = length * length

document.getElementById('button').addEventListener('click', addition)

function addition () {
  length = document.getElementById('addition').value
  number= parseInt(area)
  number = length * length
  alert(number)
}
