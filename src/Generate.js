import React from 'react';
import santahat from './images/santa-hat.svg';

const Generate = (props) => {
    return (
        <button className="generate-button" onClick={props.handleGenerate}>
            <img src={santahat} className="santa-icon" alt="santa-icon" />
            Generar sorteo
        </button>
    )
}

export default Generate;