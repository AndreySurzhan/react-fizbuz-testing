import React from 'react';
import './ChildComponent.css';

function ChildComponent(props) {
  return (
    <div id="child">
        {props.name}
    </div>
  );
}

export default ChildComponent;
