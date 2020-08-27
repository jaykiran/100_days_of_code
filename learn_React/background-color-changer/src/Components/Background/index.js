import React from 'react';
import './style.css';
import ColorPicker from '../ColorPicker/index.js';

class Background extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            color: "white"
        };
    }

    onColorChange = (e) => {
        
        this.setState({
            color: e.target.value
        });
    };


    render(){
        return(
            <div className="background-container" style={{backgroundColor: this.state.color}} >
                <ColorPicker
                    onChange={this.onColorChange}
                    currentColor={this.state.color}
                />
            </div>
        );
    };
}

export default Background;