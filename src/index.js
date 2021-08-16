import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import PagesConntextProvider from './contexts/pagesContext';
import TicketsContextProvider from './contexts/ticketsContext';

ReactDOM.render(
    <React.StrictMode>
        <TicketsContextProvider>
            <PagesConntextProvider>
                <App />
            </PagesConntextProvider>
        </TicketsContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
)