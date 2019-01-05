import React from 'react';

const validation = (props) => {
    let message = 'Text too short';
    if(props.wordLength >= 5){
        message = 'Text long enough'
    }
    return (
    <div>
  <h1>{message}</h1>
    </div>
    
    )
}

export default validation;
