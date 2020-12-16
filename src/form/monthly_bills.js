import React from 'react';

function Monthly(props) {
    return <div>
        <label for="montly_bill_name">
            <input type="text" name="montly_bill_name"/>
        </label>
        <label for="montly_bill_number">
            <input type="number" name="montly_bill_number"/>
        </label>
    </div>
}

export default Monthly