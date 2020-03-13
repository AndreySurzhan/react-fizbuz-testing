import React from 'react';
import './MyComponent.css';
import ChildComponent from '../Child/ChildComponent';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            calcValue: 'no value'
        };

        this.fisBuzOnClick = this.fisBuzOnClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    fisBuzOnClick() {
        const inputValue = this.state.inputValue;
        const calcValue = this.calcFizBuz(inputValue)
        this.setState({ calcValue });
    }

    calcFizBuz(input){
      if (input % 3 === 0 && input % 5 === 0) {
        return 'fizBuz';
      }

      if (input % 3 === 0) {
        return 'fiz';
      }        
      
      if (input % 5 === 0) {
        return 'buz';
      }

      return input
    }

    handleChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    render() {
        return (
            <div id="test">
                <input className="my-input" type="text" value={this.state.inputValue} onChange={this.handleChange} />
                <button onClick={this.fisBuzOnClick}>Calc</button>
                <ChildComponent name={this.state.calcValue}></ChildComponent>
            </div>
        );
    }
}

export default MyComponent;
