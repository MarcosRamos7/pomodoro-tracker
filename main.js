let number = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
  count += 1
  number.textContent = count
}

function save (){
  let countSave = count + "  -  "
  saveEl.textContent += countSave
  number.textContent = 0
  count = 0
}

let name = "Marcos Ramos"
let greeting = "hi, my name is "

let myGreeting = (greeting + name)

save()