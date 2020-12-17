export function addExpense(expense) {
    return {
        type: 'ADD_EXPENSE',
        expense
    }
}

export function loadExpenses() {
    return {
        type: 'LOAD_EXPENSES'
    }
}

export function removeExpense(index) {
    return {
        type: 'REMOVE_EXPENSE',
        index
    }
}

export function addIncome(income) {
    return {
        type: 'ADD_INCOME',
        income
    }
}

export function loadIncome() {
    return {
        type: 'LOAD_INCOME'
    }
}