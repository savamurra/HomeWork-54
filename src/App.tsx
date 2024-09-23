import './App.css';
import {useState} from 'react';
import {IProps} from './types';
import Table from './components/Table/Table.tsx';
import Attempts from './components/Attempts/Attempts.tsx';
import Reset from './components/Reset/Reset.tsx';

const App = () => {
    const createCell = (): IProps[] => {
        const cellArray: IProps[] = [];

        for (let i = 0; i < 36; i++) {
            cellArray.push({hasItem: false, clicked: false, id: crypto.randomUUID()});
        }

        const randomCell = Math.floor(Math.random() * cellArray.length);
        cellArray[randomCell].hasItem = true;

        return cellArray;
    };

    const [items, setItems] = useState(createCell());
    const [attempts, setAttempts] = useState(0);
    const [gameStop, setGameStop] = useState(false);


    const cellClick = (id: string) => {
        if (gameStop) {
            alert('Вы уже нашли колечко и что бы играть нужно начать заново');
            return;
        }

        setItems((prevItems) =>
            prevItems.map((item) => {
                if (item.id === id && !item.clicked) {
                    return {...item, clicked: true};
                }
                return item;
            })
        );


        const index = items.findIndex((item) => item.id === id);

        if (items[index].clicked || gameStop) return;

        const newItems = [...items];
        newItems[index] = {...newItems[index], clicked: true};

        setItems(newItems);
        setAttempts(attempts + 1);

        if(newItems[index].hasItem){
            setGameStop(true);
            alert('Вы нашли колечко');
        }
    };

    const ResetGame = () => {
        setItems(createCell());
        setAttempts(0);
        setGameStop(false);
    };

    return (
        <>
            <Table items={items} cellClicked={cellClick}/>
            <Attempts count={attempts}/>
            <Reset onReset={ResetGame}/>
        </>
    );
};

export default App;