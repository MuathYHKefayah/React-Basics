import React, { Component } from 'react';


class UserInput extends Component{
    render(){
        const style = {
            fontSize: '16px',
            fontFamily: 'inherit',
            padding: '0.25em 0.5em',
            backgroundColor: '#fff',
            border: '2px solid #8b8a8b',
            borderRadius: '4px',
            textaline: 'center'
        }
        return(
            <div className="UserInput">
                <input
                    style= {style} 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </div>
           
        );
    }
}

export default UserInput;