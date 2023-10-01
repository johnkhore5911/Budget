import React from 'react'
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

function ExpenseTotal() {
    const {expenses} = useContext(AppContext);
    
    let totalExpense=0;
    expenses.forEach(expense => {
        totalExpense = totalExpense + expense.cost;
    });

  return (
    <div className='bg-red-300 rounded-md'>
        <span className='show_Budget rounded-lg ml-2'>{totalExpense} $</span>
    </div>
  )
}

export default ExpenseTotal