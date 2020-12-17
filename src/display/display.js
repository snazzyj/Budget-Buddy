import React, {Component, Fragment} from 'react';

class Display extends Component {

    render() {
        console.log(this.props)
        const {income, expenses} = this.props.user;
        const total = expenses.reduce((sum, curr) => sum + curr.amount, 0);
        const difference = income - total || 0;
        return (
            <Fragment>
            <section>
                <div>
                    <h3>Income</h3>
                    <span>${income || 0}</span>
                </div>
                <div>
                    <h3>Total</h3>
                    <span>${total}</span>
                </div>
                <div>
                    <h3>Difference</h3>
                    <span>${difference}</span>
                </div>
            </section>
            <section>
                {expenses && expenses.map((expense, index) => {
                    return <p key={index}>
                        <span>
                        {expense.name}{': '}
                        </span>
                        <span>
                        ${expense.amount}
                        </span>
                        <button onClick={() => this.props.removeExpense(index)}>
                            X
                        </button>
                        </p>
                })}
            </section>

            </Fragment>
        )
    }
} 

export default Display