import React from 'react';
interface Props {
    onReset: () => void;
}

const Reset:React.FC<Props> = ({onReset}) => {
    return (
        <div>
            <button onClick={onReset} type='button'>Reset</button>
        </div>
    );
};

export default Reset;