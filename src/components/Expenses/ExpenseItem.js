import Card from '../UI/Card';
import ExpenseDate from '../Expenses/ExpenseDate';
import './ExpenseItem.css'
import { useState } from 'react';

function ExpenseItem({date,title,price}){

    const [newTitle,setNewTitle] = useState(title)
    const handleClick = ()=>{
        setNewTitle("Update")
    }
    return(
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{newTitle}</h2>
                <div className='expense-item__price'>${price}</div>
            </div>
            <button onClick={handleClick}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;