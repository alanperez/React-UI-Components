import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const CalculatorDisplay = () => {
    return (
        <div id="parent">
        <div className="display">
            <h1>0</h1>
        </div>
        <div className="buttons">
            <div className="left-side">
                <ActionButton styles="big white" text="Clear" />
                <NumberButton styles="white" text="7" />
                <NumberButton styles="white" text="8" />
                <NumberButton styles="white" text="9" />
                <NumberButton styles="white" text="4" />
                <NumberButton styles="white" text="5" />
                <NumberButton styles="white" text="6" />
                <NumberButton styles="white" text="1" />
                <NumberButton styles="white" text="2" />
                <NumberButton styles="white" text="3" />
                <NumberButton styles="big white" text="0" />
            </div>
        <div className="right-side">
                <ActionButton styles="red" text="÷"  />
                <ActionButton styles="red" text="X"  />
                <ActionButton styles="red" text="-"  />
                <ActionButton styles="red" text="+"  />
                <ActionButton styles="red" text="="  />
        
        </div>

        </div>
        </div>
    )
}

export default CalculatorDisplay;
