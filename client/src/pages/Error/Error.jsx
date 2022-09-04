import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../Error/error.css'

const Error = () => {
    const navigate = useNavigate()

    return (
        <div className='container-error'>
            <div className='block-error'>
                <div className='item-error-img'>
                    <img src={process.env.REACT_APP_API_URL + 'error.png'} alt="error" />
                </div>
                <div className='item-error-message'>
                    <h1>Вибачте, нам не вдалося знайти сторінку, яку ви шукали.</h1>
                    <h2>Код помилки: 404</h2>
                    <div>
                        <p>Ось кілька корисних посилань:</p>
                        <p className='item-error-navigate' onClick={() => navigate('/')}>Головна</p>
                        <p className='item-error-navigate' onClick={() => navigate('/flightsCategory')}>Категорія рейсів</p>
                        <p className='item-error-navigate' onClick={() => navigate('/aboutUs')}>Про нас</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error