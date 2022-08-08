
let budget = 0
let totalExpenses = 0

const alert = document.querySelector(".alert");
const list = document.querySelector(".expense-list"); 
const container = document.querySelector(".expense-list-container");
const element = document.createElement('article');

// Takes budget updates 
function updateBudget() {
    var budgetInput = document.getElementById("budgetInput");
    budget = Number(budgetInput.value);
    document.querySelector(".current-budget").innerText = "Current Budget: $" + budget;

    console.log(document.querySelector(".current-budget").innerText);

    budgetInput.value = '';
} 

// Factors in expenses to budget to current budget and total expenses
function updateExpense() {

    //edit option
    let editElement;
    let editFlag = false;
    let editID = "";

    //inputs and special id for input
    var expenseName = document.getElementById("expenseInput");
    var expenseType = document.getElementById("expenseTypeInput");
    var expenseAmount = document.getElementById("expenseAmountInput");
    const id = new Date().getTime().toString();

    if (expenseName.value && expenseAmount.value && !editFlag) {


        //Add class
        element.classList.add("expense-item");

        //Add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = 
        `<p class="newItemTitle listText">${expenseName.value}</p>
        <p class="newItemType listText">${expenseType.value}</p>
        <p class="newItemAmount listText">$${expenseAmount.value}</p>

        <div class="button-container">
            <button type="button" class="edit-btn">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button type="button" class="dlt-btn">
                <i class="fa-solid fa-eraser"></i>
            </button>
        </div>`
        //append child
        list.appendChild(element);


   
        var clearButton = document.querySelector(".clear-button-container");

        if (clearButton.style.display === "none") {
            clearButton.style.display = "block";
        }
        
        //display alert
        alert.textContent = "Item added to list."; 
        alert.classList.add("alert-success");

        setTimeout(function () {
            alert.textContent = "";
            alert.classList.remove("alert-success"); 
        }, 2000);


        //update budget and expense totals
        budget -= Number(expenseAmount.value);
        totalExpenses += Number(expenseAmount.value);

        const xpenseTot = document.querySelector(".current-expense-total");

        document.querySelector(".current-budget").innerText = "Current Budget: $" + budget;
        xpenseTot.innerText = "Current Expenses: $" + totalExpenses;

        console.log(xpenseTot.innerText);

        //revert to orginal state
        expenseName.value = '';
        expenseType.value = '';
        expenseAmount.value = '';

        editFlag = false;
        editID = false;
    }
    else if (expenseName.value && expenseAmount.value && editFlag) {


    }
    //Displays error message if the user doesn't submit enough data
    else if (!expenseName.value || !expenseAmount.value){

        alert.textContent = "Please enter expense name and value."; 
        alert.classList.add("alert-danger");

        setTimeout(function () {
            alert.textContent = ""; 
            alert.classList.remove("alert-danger"); 
        }, 2000);
    }
}

function clearItems () {
    const items = document.querySelectorAll(".expense-item");

    console.log(items.length);

    if (items.length > 0) {
        items.forEach(e => e.remove());
    }

    budget += totalExpenses;

    document.querySelector(".current-budget").innerText = "Current Budget: $" + budget;

    totalExpenses = 0;

    document.querySelector(".current-expense-total").innerText = "Current Expenses: $" + totalExpenses;

} 

function deleteItem(e) {

    const element = e.currentTarget.parentElement.parentElement;
    list.removeChild(element);

    if(list.children.length === 0) {
        hideClearButton();
    }
}

function hideClearButton() {

    var clearButton = document.querySelector(".clear-button-container");

    if (clearButton.style.display !== "none") {
        clearButton.style.display = "none";
    } 
}

document
    .querySelector(".clear-button")
    .addEventListener("click", function() {
        clearItems();

    hideClearButton();
} );


//Event Listeners 
document
    .querySelector(".add-expense-button")
    .addEventListener("click", function() {
        updateExpense();
} );

document
    .querySelector(".enter-expense-amount")
    .addEventListener("keyup", function(event) {
        if (event.key=="Enter") {
            updateExpense();
        }
} );

document
    .querySelector(".enter-budget-button")
    .addEventListener("click", function() {
        updateBudget();
} );

document
    .querySelector(".enter-budget")
    .addEventListener("keyup", function(event) {
        if (event.key=="Enter") {
            updateBudget();
        }
} );

element.querySelector(".dlt-btn").addEventListener("click", deleteItem);
element.querySelector(".edit-btn").addEventListener("click", editItem);
