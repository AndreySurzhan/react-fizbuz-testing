import React from 'react';
import './MyComponent.css';
import ChildComponent from '../Child/ChildComponent';


class MyComponent extends React.Component {
    fisBuz(){
        return "I AM CHILD1111";
    }

    render() {
      return (
        <div id="test">
            TEST
            <ChildComponent name={this.fisBuz()}></ChildComponent>
        </div>
      );
    }
  }

export default MyComponent;
