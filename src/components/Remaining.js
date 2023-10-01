import React from 'react'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'

function Remaining() {
    const {budget} = useContext(AppContext);
    const {expenses} = useContext(AppContext);
    
    let totalExpense=0;
    expenses.forEach(expense => {
        totalExpense = totalExpense + expense.cost;
    });

    const alertType = totalExpense >budget ? 'bg-red-300' : 'bg-green-300';

  return (
    <div className={`${alertType} rounded-md`}>
        <span className='show_Budget rounded-lg ml-2'>{budget-totalExpense} $</span>
    </div>
  )
}

export default Remaining