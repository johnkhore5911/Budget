import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Monthly from './Monthly';

function Budget() {

    const {budget,dispatch} = useContext(AppContext);

    
    
  return (
    <div >
        <span className='show_Budget ml-2'>{budget} $</span>
        
    </div>
  )
}

export default Budget