
import { IProps } from '../../types';
import * as React from 'react';
import Cell from './Cell/Cell.tsx';

interface TableProps {
    items: IProps[];
    cellClicked: (id: string) => void;
}

const Table: React.FC<TableProps> = ({ items, cellClicked }) => {
    return (
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6, 50px)',
                    gap: '4px',
                    border: '1px solid black',
                    width: '350px',
                    justifyContent: 'center',
                    padding: '10px',
                    margin: 'auto',
                }}
            >
                {items.map((item) => (
                    <Cell
                        key={item.id}
                        item={item}
                        cellClicked={() => cellClicked(item.id)}
                    />
                ))}
            </div>
    );
};

export default Table;