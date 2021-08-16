import React from 'react';
import Ticket from "./Ticket";
import { useTicketsContext } from './../contexts/ticketsContext'

function Tickets() {
    const { tickets } = useTicketsContext();

    return (
        <div className="col">
            {tickets.map(ticket => (
                <Ticket key={ticket._id} ticket={ticket} />
            ))}
        </div>
    )
}

export default Tickets
