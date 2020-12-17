import React, {Component} from 'react';
import Income from './income_input';
import Expenses from './expenses';

class Form extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let incomeVal = e.target.elements.income.value
        console.log('Income val:', e.target.elements.income.value)
        console.log('Bill name: ', e.target.elements.expense_name.value)
        console.log('Bill value: ', e.target.elements.expense_amount.value)
        let expense = {
            name: e.target.elements.expense_name.value,
            amount: Number(e.target.elements.expense_amount.value)
        }

        if(incomeVal > 0) {
            this.props.addIncome(incomeVal)
        } else {
            this.props.addExpense(expense)
        }

        e.target.elements.expense_name.value = ''
        e.target.elements.expense_amount.value = ''
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Income />
                <Expenses />
                <button >Add Expense</button>
            </form>
        )
    }
}

export default Form