import React, { useState } from 'react'
import Budget from './Budget';

import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Monthly() {
    const [sal,setsal] = useState('');
    const {budget,dispatch} = useContext(AppContext);
    

    function clickHandler(){
        dispatch({
            type: 'SALARY',
            payload: parseInt(sal)
        }) 
    }

  return (
    <div >
        <label for='sal'></label>
                <input
                    required='required'
                    type='text'
                    className='form-control '
                    id='sal'
                    value={sal}
                    onChange={(event)=>setsal(event.target.value)}
                    placeholder='Enter Income'

                ></input>
                <button onClick={clickHandler} className='ADD_button bg-[#558052] ml-3'>Save</button>
    </div>
  )
}

export default Monthly