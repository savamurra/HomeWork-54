import React from 'react';
import './Reset.css';
interface Props {
    onReset: () => void;
}

const Reset:React.FC<Props> = ({onReset}) => {
    return (
        <div style={{width: 'max-content', margin: 'auto'}}>
            <button onClick={onReset} type='button'>RESET</button>
        </div>
    );
};

export default Reset;