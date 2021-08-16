import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import TicketsContextProvider from './contexts/ticketsContext';

ReactDOM.render(
    <React.StrictMode>
        <TicketsContextProvider>
            <App />
        </TicketsContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
)