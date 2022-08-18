import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');

    // function clickHandler() {}
    const clickHandler = () => {
        setTitle('Updated!');
        console.log('title = ', title);
    };
    
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                {/* <button onClick={() => { console.log('Clicked!') }}>Change Title</button> */}
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    )
}

export default ExpenseItem;