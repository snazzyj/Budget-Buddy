import React, {Component} from 'react';
import Income from './income_input';
import Expenses from './expenses';

class Form extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let incomeVal = e.target.elements.income.value;
        let expense = {
            name: e.target.elements.expense_name.value,
            amount: Number(e.target.elements.expense_amount.value)
        };

        if(incomeVal > 0) {
            this.props.setIncomeStorage(incomeVal);
        } else {
            this.props.startAddingExpense(expense);
        }

        e.target.elements.expense_name.value = '';
        e.target.elements.expense_amount.value = '';
        e.target.elements.income.value = '';
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Income />
                <Expenses />
            </form>
        )
    }
}

export default Form