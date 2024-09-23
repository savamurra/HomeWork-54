
import './App.css';
import { useState } from 'react';
import { IProps } from './types';
import Table from './components/Table/Table.tsx';

const App = () => {
    const createCell = (): IProps[] => {
        const cellArray: IProps[] = [];

        for (let i = 0; i < 36; i++) {
            cellArray.push({ hasItem: false, clicked: false, id: crypto.randomUUID() });
        }

        const randomCell = Math.floor(Math.random() * cellArray.length);
        cellArray[randomCell].hasItem = true;

        return cellArray;
    };

    const [items, setItems] = useState(createCell());

    const cellClick = (id: string) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, clicked: true } : item
            )
        );
    };

    return (
        <>
            <Table items={items} cellClicked={cellClick} />
        </>
    );
};

export default App;