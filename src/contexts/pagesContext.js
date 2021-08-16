import React, { createContext, useState, useContext } from 'react';
import { useTicketsContext } from './ticketsContext';

const PagesContext = createContext();

export const usePagesContext = () => {
    return  useContext(PagesContext);
}

function PagesConntextProvider({ children }) {
    const [currentPage, setCurrentPage] = useState(1);
    const { count: numOfTickets } = useTicketsContext();
    const numOfPages = Math.ceil(numOfTickets / 5);
    let pagesArray = [];
    for(let i = 1; i <= numOfPages; i++){
        pagesArray.push(i)
    }
    
    return (
        <PagesContext.Provider value={{
            currentPage, 
            setCurrentPage,
            pagesArray
        }}>
            { children }
        </PagesContext.Provider>
    )
}

export default PagesConntextProvider
