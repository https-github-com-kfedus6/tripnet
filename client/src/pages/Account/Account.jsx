import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'

import '../Account/account.css'

const Account = () => {

    const { is_admin, is_login, user } = useSelector(state => state.user)

    return (
        <div className='container-user'>
            <div сlassName='block-user'>
                <div className='block-user-icon'>
                    <span><FaUserCircle /></span>
                    <span>Привіт!</span>
                    <span>{user.email}</span>
                </div>
                <div className='block-user-info'>
                    <div>
                        <span>Адрес електроної почти</span>
                        <span>{user.name}</span>
                    </div>
                    <div>
                        <span>Ім'я</span>
                        <span>{user.email}</span>
                    </div>
                </div>
                <div className='block-user-btn'>
                    <button>Видалити особистий кабінет</button>
                    <button>Вийти</button>
                </div>
            </div>
        </div>
    )
}

export default Account;