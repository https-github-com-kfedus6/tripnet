import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAction } from '../hooks/useAction';

const Layout = () => {
    const {isShow,text}=useSelector(state=>state.message);
    const {SetShowMessgeFalse}=useAction()
    return (
        <div className='layout'>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
            {!isShow?<></>:
                <div className='alert__main'>
                    <div className="alert__text">
                        {text}
                    </div>    
                    <div onClick={()=>SetShowMessgeFalse()} className="alert__exit">
                        &times;
                    </div>
                </div>}
        </div>
    )
}

export default Layout;