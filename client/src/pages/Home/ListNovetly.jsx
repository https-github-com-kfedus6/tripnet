import { t } from 'i18next';
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
            <h3 style={{"text-align":"center"}}>{t("home.we_will_comfortably_deliver_to_such_countries")}</h3>
            <div className="list__novetly">
                {novetly.map(x=><Novetly key={x.id} novetly={x}/>)}
            </div>
        </div>
  )
}

export default ListNovetly;