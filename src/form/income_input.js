import React from 'react';

function Income(props) {
    console.log(props)
    return <div>
        <form onSubmit={props.addIncome}>
        <label htmlFor="income">
            <input type="text" name="income" placeholder="Income" />
        </label>
        <button>Add Income</button>
        </form>
    </div>
}

export default Income