import React, { Component } from 'react';
import './UserOutput.css'

class UserOutput extends Component {
    
    render(){
        style = {
            backgoundcolor: 'red';
        };
        return(
            <div className="UserOutput">
                <p style={this.style}>{this.props.name}</p>
                <p>Paragraph 1</p>
                <p>Paragraph 2</p>
            </div> 
        );
    }
}

export default UserOutput;