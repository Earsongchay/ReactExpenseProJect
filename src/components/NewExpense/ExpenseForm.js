import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")
    // const [userInput, SetUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    // const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value)
    // SetUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredTitle: event.target.value
    //     }
    // })
// }
// const amountChangeHandler = (event) => {
//     setEnteredAmount(event.target.value)
// }

// const dateChangeHandler = (event) => {
//     setEnteredDate(event.target.value)
// }

const inputChangeHandler = (identifier, value) => {
    if (identifier === 'title') {
        setEnteredTitle(value)
    } else if (identifier === 'amount') {
        setEnteredAmount(value)
    } else {
        setEnteredDate(value)
    }
}
const submitHandler = (event) => {
    event.preventDefault()

    const expenseData ={
        title : enteredTitle,
        amount : enteredAmount,
        date : new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData)

    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
}

return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={(event) => { inputChangeHandler('title', event.target.value) }}></input>
            </div>
        </div>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.1" step="0.01" value={enteredAmount} onChange={(event) => { inputChangeHandler('amount', event.target.value) }}></input>
            </div>
        </div>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2024-01-01" value={enteredDate} onChange={(event) => { inputChangeHandler('date', event.target.value) }}></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add New Expense</button>
        </div>
    </form>
)
}

export default ExpenseForm
