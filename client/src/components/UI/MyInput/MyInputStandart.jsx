import React from 'react'
import classes from "./MyInput.module.css"

const MyInputStandart = (props) => {
  return (
    <input className={classes.MyInputStandart} {...props}/>
  )
}

export default MyInputStandart