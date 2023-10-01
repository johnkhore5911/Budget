import React from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

function ExpenseList() {
    const {expenses} = useContext(AppContext)
    
  return (
    <ul className='mt-4'>
        {expenses.map((expense)=>(
            <ExpenseItem 
            
                id={expense.id}
                name={expense.name}
                cost={expense.cost}/>
        ))}
    </ul>
  )
}

export default ExpenseList