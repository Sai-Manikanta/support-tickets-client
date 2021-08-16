import React, { useState , createContext, useEffect, useContext } from 'react';
import axios from './../utils/axios'

const TicketsContext = createContext();

export const useTicketsContext = () => {
    return useContext(TicketsContext);
}

function TicketsContextProvider({ children }) {
    const [data, setData] = useState({ tickets: [], count: 0 });
    const [filteredData, setFilteredData] = useState({ 
        tickets: data.tickets, 
        count: data.tickets.length
    });
    const [selectedTicket, setSelectedTicket] = useState({});

    useEffect(() => {
        axios.get('/v1/tickets')
            .then(res => {
                const { tickets } = res.data.data;

                setData({ tickets, count: tickets.length });
                setFilteredData({ tickets, count: tickets.length })
            })
            .catch(err => console.log(err.message))
    }, [])

    const filterTickets = status => {
        if(status === 'all'){
            axios.get('/v1/tickets')
            .then(res => {
                const { tickets } = res.data.data;

                setData({ tickets, count: tickets.length });
                setFilteredData({ tickets, count: tickets.length })
            })
            .catch(err => console.log(err.message))

            setSelectedTicket({});
            return 
        }

        const tickets = data.tickets.filter(ticket => ticket.status === status);
        setFilteredData({ count: tickets.length, tickets  });
        setSelectedTicket({});
    }

    const searchTickets = searchQuery => {
        axios.get(`/v1/tickets?searchBy=subject&search=${searchQuery}`)
         .then(res => {
            const { tickets } = res.data.data;
                
            setData({ tickets, count: tickets.length });
            setFilteredData({ tickets, count: tickets.length });
         })
         .catch(err => console.log(err))
    }

    return (
        <TicketsContext.Provider value={{ 
            ...filteredData, 
            filterTickets,
            selectedTicket,
            searchTickets,
            setSelectedTicket
        }}>
            { children }
        </TicketsContext.Provider>
    )
}

export default TicketsContextProvider
