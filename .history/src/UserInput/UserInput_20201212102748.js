import React, { Component } from 'react';


class UserInput extends Component{
    render(){
        const style = {
            margin: '5px'
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