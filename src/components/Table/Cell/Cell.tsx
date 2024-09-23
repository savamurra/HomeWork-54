import {IProps} from '../../../types';

interface CellProps {
    item: IProps;
    cellClicked: () => void;
}

const Cell: React.FC<CellProps> = ({ item, cellClicked }) => {
    return (
        <div
            onClick={cellClicked}
            style={{
                display: 'flex',
                width: '50px',
                height: '50px',
                backgroundColor: item.clicked ? '' : 'grey',
                cursor: 'pointer',
            }}
        >
            {item.hasItem && item.clicked ? '💍' : ''}
        </div>
    );
};

export default Cell;
