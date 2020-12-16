import React, {Component, Fragment} from 'react';

class Display extends Component {

    render() {
        console.log(this.props)
        return (
            <Fragment>
            <div>
                <h3>Income</h3>
                <span>${this.props.income}</span>
            </div>
            <div>
                {this.props.bills && this.props.bills.map((bill, index) => {
                    return <p key={index}>
                        <span>
                        {bill.name}
                        </span>
                        {': '}
                        <span>
                        ${' '}{bill.value}
                        </span>
                        <button onClick={() => this.props.removeBill(index)}>
                            X
                        </button>
                        </p>
                })}
            </div>
            </Fragment>
        )
    }
} 

export default Display