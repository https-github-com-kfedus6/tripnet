import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAction } from '../../hooks/useAction';
import HomeFAQ from './HomeFAQ'

const HomeListFAQ = () => {
    const {FAQ}=useSelector(state=>state.FAQ);
    const {GetFAQ}=useAction();
    useEffect(()=>{
      if(FAQ==undefined){
        GetFAQ();
      }
    },[])
  return (
    FAQ==undefined?<div>loading...</div>:
    <div className='list__FAQ__main'>
      {FAQ.map((x,idx)=><HomeFAQ key={x.id} FAQ={x}/>)}
    </div>  
  )
}

export default HomeListFAQ