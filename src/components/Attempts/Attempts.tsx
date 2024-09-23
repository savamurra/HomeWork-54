import * as React from 'react';
import './Attempts.css';
interface Attempts {
    count: number;
}

const Attempts: React.FC<Attempts> = ({count}) => {
    return (
        <div style={{width: 'max-content',  margin: 'auto'}}>
            <p>КОЛИЧЕСТВО ПОПЫТОК: {count}</p>
        </div>
    );
};

export default Attempts;