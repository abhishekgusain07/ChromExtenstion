let myLeads = ["abhishek"]

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

//NEW
// Get the leads from the localStorage - PS: JSON.parse()
// store it in a variable, leadsFromLocalSotrage
// Log out the variable
let leadsfromlocalStorage = JSON.parse(localStorage.getItem("myleads"))

//checking if leadfromstorage is empty or not, if yes rendering out previous stored leads
if(leadsfromlocalStorage){
    myLeads = leadsfromlocalStorage
    renderLeads()
}



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    // Clear out the input field
    inputEl.value=" "
    
    //NEW
    //saving myleads array to localstorage
    //PS: remember JSON.stringigy()
    localStorage.setItem("myleads", JSON.stringify(myLeads))
    
    //renders
    renderLeads()
    
    //To verify that it works
    console.log( localStorage.getItem("myleads"))
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        //listItems += "<li> <a target = '_blank' href = ' " + myLeads[i] + "'>" +myLeads[i] + " </a></li>"
        listItems += `
            <li>
                <a target='_blank' href = '${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li> 
        `
    }
    ulEl.innerHTML = listItems  
}