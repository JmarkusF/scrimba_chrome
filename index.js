const ulEl = document.getElementById("ul-el")
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})
// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems = ""
for ( let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>"
}

// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems