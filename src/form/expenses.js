import React from 'react';

function Expenses(props) {
    return <div className="expenses_input">
        <h3>Expenses</h3>
        <label htmlFor="expense_name">
            <input type="text" name="expense_name" placeholder="Expense Name"/>
        </label>
        <label htmlFor="expense_amount">
            <input type="text" name="expense_amount" placeholder="Cost" />
        </label>
        <button>Add Expense</button>
    </div>
}

export default Expenses