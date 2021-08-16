import React from 'react';
import Ticket from "./Ticket";
import { useTicketsContext } from './../contexts/ticketsContext'
import { usePagesContext } from './../contexts/pagesContext'


function Tickets() {
    const { tickets } = useTicketsContext();
    const { currentPage } = usePagesContext();
    const pageLastTicket = currentPage * 5;
    const pageFirstTicket = pageLastTicket - 5;

    return (
        <div className="col">
            {tickets.slice(pageFirstTicket, pageLastTicket).map(ticket => (
                <Ticket key={ticket._id} ticket={ticket} />
            ))}
        </div>
    )
}

export default Tickets
