import React, { Component } from 'react';

class UserOutput extends Component {
    render(){
        return(
            <div className="UserOutput">
                {this.props.name}
                <p>Paragraph 1</p>
                <p>Paragraph 2</p>
            </div> 
        );
    }
}

export default UserOutput;