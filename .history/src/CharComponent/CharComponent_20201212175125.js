import React from 'react';
import ReactToolTip from 'react-tooltip'

const CharComponent = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    };
    return(

        <div
            data-tip
            style={style}
            onClick={props.clicked}>

            <p>{props.letter}</p>
            <ReactToolTip>
                <span>Click to remove</span>
            </ReactToolTip>
    </div>
        
        
       
    ) 
    };

export default CharComponent;