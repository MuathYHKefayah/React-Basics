import React from 'react';

const CharComponent = (props) => {
return <p onClick={props.clicked}>{props.letter}</p>
};

export default CharComponent;