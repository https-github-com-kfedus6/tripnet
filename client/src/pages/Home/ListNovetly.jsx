import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useAction } from '../../hooks/useAction';
import Novetly from './Novetly';

const ListNovetly = () => {

    const {novetly}=useSelector(state=>state.novetly);
    const {GetNovetly}=useAction();

    useEffect(()=>{
        GetNovetly();
    },[])
    
    return (
        <div className='list__novetly__main'>
            <div className="list__novetly">
                {novetly.map(x=><Novetly key={x.id} novetly={x}/>)}
            </div>
        </div>
  )
}

export default ListNovetly;