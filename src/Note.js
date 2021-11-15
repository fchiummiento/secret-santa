import React from 'react';
import present from './images/present.svg';

const Note = (props) => {
    return (
        <div className="people-container">
            <div className="note">
                <h5 className="note__title">Hola {props.name.replace("%20", " ")},</h5>
                <h5>serás el Papá Noel secreto de...</h5>
                <span className="note__santa">{props.decryptHash(props.mykey)}</span>
                <img src={present} className="note__image" alt="present"/>
                <h5>¡Felicidades!</h5>
            </div>
        </div>
    )
}

export default Note;