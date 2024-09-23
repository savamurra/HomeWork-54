import * as React from 'react';

interface Attempts {
    count: number;
}

const Attempts: React.FC<Attempts> = ({count}) => {
    return (
        <div>
            <p>Количество попыток: {count}</p>
        </div>
    );
};

export default Attempts;