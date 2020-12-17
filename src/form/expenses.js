import React from 'react';

function Expenses(props) {
    return <div>
        <label htmlFor="expense_name">
            <input type="text" name="expense_name"/>
        </label>
        <label htmlFor="expense_amount">
            <input type="number" min={1} name="expense_amount"/>
        </label>
    </div>
}

export default Expenses