//call the function from utilities.js file to select the player and disable the select button using common function
playerName('mashrafi-name', 'mashrafi-select-btn');
playerName('ashraful-name', 'ashraful-select-btn');
playerName('shakib-name', 'shakib-select-btn');
playerName('mushfiq-name', 'mushfiq-select-btn');
playerName('riyad-name', 'riyad-select-btn');
playerName('liton-name', 'liton-select-btn');
playerName('sabbir-name', 'sabbir-select-btn');
playerName('tamim-name', 'tamim-select-btn');
playerName('nasir-name', 'nasir-select-btn');
playerName('rubel-name', 'rubel-select-btn');
playerName('mustafiz-name', 'mustafiz-select-btn');
playerName('taskin-name', 'taskin-select-btn');


// calculate the expense for per player
document.getElementById('calculate').addEventListener('click', function () {

    const perPlayerExpenseInputField = document.getElementById('per-player');

    console.log(perPlayerExpenseInputField.value);

    // validation of per player expense input field
    if (perPlayerExpenseInputField.value == '' || perPlayerExpenseInputField.value < 0) {
        alert('Invalid Amount/Type');
        perPlayerExpenseInputField.value = '';
        return;
    }

    // find the number of players added in the list and calculate expense for them
    let orderderList = document.querySelectorAll("li");

    let order = parseInt(orderderList.length);

    const playerExpenseShown = document.getElementById('palyer-expenses');

    const perPlayerExpense = parseFloat(perPlayerExpenseInputField.value);
    const playerExpense = perPlayerExpense * (order - 5);

    playerExpenseShown.innerText = parseFloat(playerExpense.toFixed('2'));
})

// calculate the total amount
document.getElementById('calculate-total').addEventListener('click', function () {

    const playerExpenses = document.getElementById('palyer-expenses');
    const managerExpenses = document.getElementById('manager');
    const coachExpenses = document.getElementById('coach');

    const totalCost = document.getElementById('total');

    // validation for manager,coach input field and calculate the total expense
    if (playerExpenses.innerText == '' || managerExpenses.value == '' || managerExpenses.value < 0 || coachExpenses.value == '' || coachExpenses.value < 0) {
        alert('invalid Amount/Type');
        managerExpenses.value = '';
        coachExpenses.value = '';
        return;
    }

    const total = parseFloat(playerExpenses.innerText) + parseFloat(managerExpenses.value) + parseFloat(coachExpenses.value);

    totalCost.innerText = parseFloat(total);
})