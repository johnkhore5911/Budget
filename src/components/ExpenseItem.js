import React from 'react'
import {TiDelete} from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () =>{
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        })
    };

  return (
    <div className='list1 flex justify-between items-center mb-2' >
        <div className='name flex ml-2 '>
            {props.name}
            <div className='date ml-6'>
                06-Sep-2023
            </div>
        </div>
        
        <div className='flex'>
            <span className='cost mt-1 mr-2' >
                {props.cost} $
            </span>
            <TiDelete className='mr-2' size='1.5em' onClick={handleDeleteExpense}></TiDelete>
        </div>
        
    </div>
  )
}

export default ExpenseItem