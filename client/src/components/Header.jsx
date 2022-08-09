import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul>
                <li><NavLink to="/">Головна</NavLink></li>
                <li><NavLink to="/flights">Всі рейси</NavLink></li>
                <li><NavLink to="/flightsCategory">Категорія рейсів</NavLink></li>
                <li><NavLink to="/flight">Рейс</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;