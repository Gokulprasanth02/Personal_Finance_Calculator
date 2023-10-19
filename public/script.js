const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const addButton = document.getElementById('add');
const transactionList = document.getElementById('transaction-list');
const incomeDisplay = document.getElementById('income');
const expenseDisplay = document.getElementById('expense');
const balanceDisplay = document.getElementById('balance');

let income = 0;
let expense = 0;
let balance = 0;

addButton.addEventListener('click', addTransaction);

function addTransaction() {
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);

    if (description.trim() === '' || isNaN(amount)) {
        alert('Please enter a valid description and amount.');
        return;
    }
    const listItem = document.createElement('li');
    listItem.innerHTML = `${description} : ₹ <strong>${amount.toFixed(2)}</strong>`;

    transactionList.appendChild(listItem);

    if (amount > 0) {
        income += amount;
    } else {
        expense += amount;
    }

    updateDisplay();
}

function updateDisplay() {
    incomeDisplay.textContent = income.toFixed(2);
    expenseDisplay.textContent = Math.abs(expense).toFixed(2);
    balance = income + expense;
    balanceDisplay.textContent = balance.toFixed(2);

    if (balance < 0) {
        balanceDisplay.style.color = 'red';
    } else {
        balanceDisplay.style.color = 'black';
    }

    descriptionInput.value = '';
    amountInput.value = '';
}