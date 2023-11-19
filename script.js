let myLeads = ['hello','whasas','suppppp','rolando']
const inputEL = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click" , function() {
 myLeads.push(inputEL.value)
 console.log(myLeads)
})

for (let i = 0; i < myLeads.length ; i++) {
    // ulEl.innerHTML += "<li>" +  myLeads[i] + ' ' + "</li>"

    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)
}