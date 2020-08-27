import React from 'react';
import './style.css';

const ColorPicker = (props) => {
    return(
        <div className="pickerbox">
            <span>Choose Your Color</span>
            <input type="color" onChange={props.onChange} />
            <span>{props.currentColor}</span>
        </div>
    );
};

export default ColorPicker;