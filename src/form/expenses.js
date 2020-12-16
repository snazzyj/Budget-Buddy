import React from 'react';

function Expenses(props) {
    return <div>
        <label htmlFor="montly_bill_name">
            <input type="text" name="montly_bill_name"/>
        </label>
        <label htmlFor="montly_bill_number">
            <input type="number" min={1} name="montly_bill_number"/>
        </label>
    </div>
}

export default Expenses