 
 let count = 0
 let countEl = document.getElementById("count-el")
 let saveEl = document.getElementById("save-el")
 
 function increment() {
  count +=  1
  console.log(count)
  countEl.textContent = count

 }

function save() {
    let bothVar = count + " - "
    saveEl.textContent += bothVar 
    console.log(count)
    countEl.textContent = 0
    count = 0

}


function clean() {
    saveEl.textContent = "PREVIOUS ENTRIES: " 
}
