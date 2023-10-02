import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './app/styles/index.scss'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "shared/theme/ThemeProvider";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
