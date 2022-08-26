import { t } from 'i18next'
import React from 'react';
import { useSelector } from 'react-redux'
import {useAction} from "../../hooks/useAction";
import { useEffect } from 'react';

const Responce = () => {
  const {GetResponceNovetly}=useAction()
  const {responce}=useSelector(state=>state.responce);

  useEffect(()=>{
    GetResponceNovetly();
  },[])
  
  return (
    responce==undefined?<div>loading...</div>:
    <div className="list__responce__main">
      {responce.map((x,idx)=><>
        <div className="responce__main">
            <h2 className='responce__name'>
                {t("home.responce")}
            </h2>
            <div className="responce__name__author">

            </div>
            <div className='responce__description'>

            </div>
        </div>

        <div className='responce__pagination'></div>
      </>)}

    </div>
  )
}

export default Responce