import React, { Component } from 'react';


class UserInput extends Component{
    render(){
        return(
            <div className="UserInput">
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </div>
           
        );
    }
}

export default UserInput;