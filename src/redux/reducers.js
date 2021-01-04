import {combineReducers} from 'redux';

function expenses(state = [], action) {
    switch(action.type) {
        case 'ADD_EXPENSE': return [...state, action.expense]
        case 'LOAD_EXPENSES': return action.expenses ? action.expenses : state
        case 'REMOVE_EXPENSE': return [...state.filter((_, index) => index !== action.index)]
        default: return state
    }
}

function income(state = 0, action) {
    switch(action.type) {
        case 'ADD_INCOME': return Number(action.income)
        case 'LOAD_INCOME': return action.income ? action.income : state
        default: return state
    }
}

const rootReducer = combineReducers({expenses, income});

export default rootReducer