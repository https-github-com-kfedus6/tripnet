import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store'
import { Provider } from 'react-redux';
import './utils/i18next';

import 'swiper/css/bundle'

import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
           <Provider store={store}>
                <GoogleOAuthProvider clientId='357033640863-eptls0vgv7h5rq9dq25m6kedsgfuj8l4.apps.googleusercontent.com'>
                    <App />                    
                </GoogleOAuthProvider>
            </Provider>
        </Suspense>
    </React.StrictMode>
);

