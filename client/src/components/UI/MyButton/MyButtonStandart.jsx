import React from 'react'
import classes from './MyButton.module.css';

const MyButtonStandart = (props) => {
  return (
    <button className={classes.MyButtonStandart} {...props}/>
  )
}

export default MyButtonStandart