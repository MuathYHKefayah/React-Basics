import React from 'react';

const CharComponent = (props) => {
return <p onClick={props.click}>{props.letter}</p>
};

export default CharComponent;