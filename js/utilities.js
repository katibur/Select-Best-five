// find the name using function and disable the buttons after selecting

function playerName(playerNameId, playerButton) {

    document.getElementById(playerButton).addEventListener('click', function () {
        const nameShown = document.getElementById(playerNameId);
        const name = nameShown.innerText;

        const node = document.createElement("li");
        const textnode = document.createTextNode(name);

        node.appendChild(textnode);

        const list = document.getElementById('ordered-list');
        list.appendChild(node);

        const disableButton = document.getElementById(playerButton);
        disableButton.disabled = true;
        disableButton.style.background = 'white';
        disableButton.style.color = 'red';

        let orderderList = document.querySelectorAll("li");

        let order = parseInt(orderderList.length);
    })
}



function perPlayerExpense() {
    const perPlayerExpenseInput = document.getElementById('per-player');
    if (perPlayerExpenseInput.value < 0) {
        alert('Budget For A Player Can Not Be Lower Than Zero(0)');
        perPlayerExpenseInput.value = '';
        return;
    }
}


document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerExpenseInputField = document.getElementById('per-player');



    const perPlayerExpense = parseFloat(perPlayerExpenseInputField.value);
    const playerExpense = perPlayerExpense * 5;

    const playerExpenseShown = document.getElementById('palyer-expenses');
    playerExpenseShown.innerText = parseFloat(playerExpense.toFixed('2'));

})



function managerExpense() {
    const managerExpenseInput = document.getElementById('manager');
    if (managerExpenseInput.value < 0) {
        alert('Budget For A Manager Can Not Be Lower Than Zero(0)');
        managerExpenseInput.value = '';
        return;
    }
}

function coachExpense() {
    const coachExpenseInput = document.getElementById('coach');
    if (coachExpenseInput.value < 0) {
        alert('Budget For A Coach Can Not Be Lower Than Zero(0)');
        coachExpenseInput.value = '';
        return;
    }
}


document.getElementById('calculate-total').addEventListener('click', function () {

    const playerExpenses = document.getElementById('palyer-expenses');
    const managerExpenses = document.getElementById('manager');
    const coachExpenses = document.getElementById('coach');

    const totalCost = document.getElementById('total');

    const total = parseFloat(playerExpenses.innerText) + parseFloat(managerExpenses.value) + parseFloat(coachExpenses.value);

    totalCost.innerText = parseFloat(total);
})