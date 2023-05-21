import React from 'react';
import ReactDOM from 'react-dom/client';

import { theme } from './Theme/themes';
import { ThemeProvider } from '@mui/material/styles';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Dashboard, SignIn, SignUp } from './components';// THIS IS HOW WE PASS IT IN!

import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import { FirebaseAppProvider } from 'reactfire'; // note that this is reactfire without the dash
import 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';


import './styles.css';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Router>
                        <Routes>
                            {/* components go here, just as Blueprints would function in Flask */}
                            <Route path='/' element={<Home title={'Marvelicious!'} />} />
                            <Route path='/dashboard' element={<Dashboard />} />
                            <Route path='/signin' element={<SignIn />} />
                            <Route path='/signup' element={<SignUp />} />
                        </Routes>
                    </Router>
                </ThemeProvider>
            </Provider>
        </FirebaseAppProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
