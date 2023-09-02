// javascript
let incrementBtn = document.querySelector("#increment-btn")
let saveBtn = document.querySelector("#save-btn")

let saveEL = document.querySelector("#save-el")
let countEl = document.querySelector("#count-el")
let count = 0

incrementBtn.onclick = function increment() {
    count =+ 1
    countEl.textContent = count
}

saveBtn.onclick = function save() {
    let countStr = count + " - "
    saveEL.textContent += countStr
    countEl.textContent = 0
    count = 0
}