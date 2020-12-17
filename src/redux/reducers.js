import expenseData from '../data/expenseData';
import {combineReducers} from 'redux';

function expenses(state = expenseData, action) {
    switch(action.type) {
        case 'ADD_EXPENSE': return [...state, action.expense]
        case 'LOAD_EXPENSES': return state
        case 'REMOVE_EXPENSE': return [...state.filter((_, index) => index !== action.index)]
        default: return state
    }
}

function income(state = 3200, action) {
    switch(action.type) {
        case 'ADD_INCOME': return action.income
        case 'LOAD_INCOME': return state
        default: return state
    }
}

const rootReducer = combineReducers({expenses, income});

export default rootReducer