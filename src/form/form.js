import React, {Component} from 'react';
import Income from './income_input';
import Monthly from './monthly_bills';

class Form extends Component {
    render() {
        console.log(this.props)
        return (
            <form>
                <Income />
                <Monthly />
            </form>
        )
    }
}

export default Form