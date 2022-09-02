import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderNavigate = () => {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate('/order')}>OrderNavigate</button>
    )
}

export default OrderNavigate