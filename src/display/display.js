import React, { Component } from 'react';
import { AssessmentOutlined, AttachMoneyOutlined, ReceiptOutlined, RemoveCircleOutline } from '@material-ui/icons';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Display extends Component {

    render() {
        console.log(this.props)
        const { income, expenses } = this.props;
        const total = expenses.reduce((sum, curr) => sum + curr.amount, 0);
        const difference = income - total || 0;
        return (
            <table>
                <thead>
                    <tr>
                        <td className="income_display">
                            <h3>Income</h3>
                            <AttachMoneyOutlined style={{ fontSize: 40, color: 'green' }} />
                            <p>${income || 0}</p>
                        </td>
                        <td className="expenses_display">
                            <h3>Expenses</h3>
                            <ReceiptOutlined style={{ fontSize: 40, color: '#2489db' }} />
                            <p>${total}</p>
                        </td>
                        <td className="diff_display">
                            <h3>Difference</h3>
                            <AssessmentOutlined style={{ fontSize: 40 }} />
                            <p style={difference >= 0 ? { color: 'blue' } : { color: 'red' }}>${difference}</p>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Expense Name</strong></td>
                        <td><strong>Expense Amount</strong></td>
                        <td><strong>Remove</strong></td>
                    </tr>
                </thead>
                <TransitionGroup component="tbody">
                    {expenses && expenses.map((expense, index) => (
                        <CSSTransition key={index} timeout={200} classNames="fade">
                            <tr key={index} className="expense">
                                <td>
                                    {expense.name}
                                </td>
                                <td>
                                    ${expense.amount}
                                </td>
                                <td>
                                    <button onClick={() => this.props.removeExpense(index)} className="remove">
                                        <RemoveCircleOutline />
                                    </button>
                                </td>
                            </tr>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </table>
        )
    }
}

export default Display