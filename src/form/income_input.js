import React from 'react';

function Income() {
    return <div className="income_input">
        <h3>Income</h3>
        <label htmlFor="income">
            <input type="text" name="income" placeholder="Enter your Montly or Yearly Income" />
        </label>
        <button>Add Income</button>
    </div>
}

export default Income