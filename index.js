// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button
// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button
const inputBtn = document.getElementById("input-btn")



// Push the value "www.awesomelead.com" to myArray when the input button is clicked
// Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
})


// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

const inputEl = document.getElementById("input-el")

console.log(inputEl)

// Log out the items in the myLeads array using a for loop 

for (i = 0; i < myLeads.length; i++){
    console.log(myLeads[i])
}
