import React, { Component } from 'react';
import classes from './UserOutput.css'

class UserOutput extends Component {
    
    render(){
        const style = {
            backgroundColor: 'lightcyan',
            fontStyle: 'oblique',
            fontSize: '30px'
        };
        return(
            <div className={classes.UserOutput}>
                <p style={style}>{this.props.name}</p>
                <p>Paragraph 1</p>
                <p>Paragraph 2</p>
            </div> 
        );
    }
}

export default UserOutput;