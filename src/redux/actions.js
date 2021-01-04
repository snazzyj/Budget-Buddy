export function startAddingExpense(expense) {
    let currentItems = JSON.parse(localStorage.getItem('expenses')) || [];
    return (dispatch) => {
        currentItems.push(expense)
        localStorage.setItem('expenses', JSON.stringify(currentItems));
        dispatch(addExpense(expense))
    }
}

export function addExpense(expense) {
    return {
        type: 'ADD_EXPENSE',
        expense
    }
}

export function startLoadingExpenses() {
    return (dispatch) => {
        let expenses = JSON.parse(localStorage.getItem('expenses'));
        dispatch(loadExpenses(expenses))
    }
}

export function loadExpenses(expenses) {
    return {
        type: 'LOAD_EXPENSES',
        expenses
    }
}

export function removeExpense(index) {
    return {
        type: 'REMOVE_EXPENSE',
        index
    }
}

export function setIncomeStorage(income) {
    return (dispatch) => {
        localStorage.setItem('income', income);
        dispatch(addIncome(income))
    }
}

export function addIncome(income) {
    return {
        type: 'ADD_INCOME',
        income
    }
}

export function getIncomeStorage() {
    return (dispatch) => {
        let income = localStorage.getItem('income');
        dispatch(loadIncome(income))
    }
}

export function loadIncome(income) {
    return {
        type: 'LOAD_INCOME',
        income
    }
}