import React, {Component} from 'react';
import Expenses from './expenses';

class Form extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Bill name: ', e.target.elements.montly_bill_name.value)
        console.log('Bill value: ', e.target.elements.montly_bill_number.value)
        let bill = {
            name: e.target.elements.montly_bill_name.value,
            value: e.target.elements.montly_bill_number.value
        }

        this.props.addBill(bill)
        e.target.elements.montly_bill_name.value = ''
        e.target.elements.montly_bill_number.value = ''

    }

    render() {
        console.log(this.props)
        return (
            <form onSubmit={this.handleSubmit}>
                <Expenses />
                <button >Add Expense</button>
            </form>
        )
    }
}

export default Form