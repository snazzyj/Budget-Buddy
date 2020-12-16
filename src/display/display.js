import React, {Component, Fragment} from 'react';

class Display extends Component {
    render() {
        return (
            <Fragment>
            <div>
                <h3>Income</h3>
                <span>${this.props.income}</span>
            </div>
            <div>
                {this.props.bills && this.props.bills.map((bill) => {
                    return <p>
                        <span>
                        {bill.name}
                        </span>
                        {': '}
                        <span>
                        ${' '}{bill.value}
                        </span>
                        </p>
                })}
            </div>
            </Fragment>
        )
    }
} 

export default Display