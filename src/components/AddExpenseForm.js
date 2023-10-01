import React, { useState } from 'react'
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
// import {v4 as uuidv4} from 'uuid';
import {v4 as uuidv4} from 'uuid'

function AddExpenseForm() {
    const {dispatch} = useContext(AppContext) 
    const [name,setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit=(event)=>{
        event.preventDefault();
        // alert('name '+name+ 'cost '+ cost);
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        })
    };
    

  return (
    <form onSubmit={onSubmit}>
        <div className='flex gap-2 mt-9'>
            <div>
                {/* <label for='name'>Name</label> */}
                <input
                    required='required'
                    type='text'
                    className='form-control'
                    placeholder='Add Expense'
                    id='name'
                    value={name}
                    onChange={(event)=>setName(event.target.value)}
                ></input>
            </div>
            <div className='box1'>
                <label for='cost'></label>
                <input
                    required='required'
                    type='text'
                    className='form-control2'
                    placeholder='00,00'
                    id='cost'
                    value={cost}
                    onChange={(event)=>setCost(event.target.value)}
                ></input>
                <div className='box'>$</div>
            </div>
            <div >
                <button className='ADD_button bg-[#558052] ml-9' type='submit' >ADD</button>    
            </div>
        </div>
    </form>
  )
}

export default AddExpenseForm