import React, { useState } from 'react'
import ExpenseItem from '../Expenses/ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'

function Expenses({ expenses, key }) {
  const [filterYear, setFilterYear] = useState('2020');


  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear)
  }
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter onFilterChange={filterChangeHandler}></ExpensesFilter>
        {
          expenses.map(expense => {
            if (expense.date.getFullYear().toString() === filterYear)
              return <ExpenseItem price={expense.amount} title={expense.title} date={expense.date}></ExpenseItem>
            return ''
          })
        }
      </Card>
    </div>
  )
}

export default Expenses
