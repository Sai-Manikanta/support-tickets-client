import { useTicketsContext } from './../contexts/ticketsContext'

function Ticket({ ticket }) { 
    const { subject, posted_date, status } = ticket;
    const { setSelectedTicket } = useTicketsContext();

    return (
        <div 
            onClick={() => setSelectedTicket(ticket)} 
            className="bg-black text-white rounded mb-2 d-flex justify-content-between p-3"
            style={{ cursor: 'pointer' }}
        >
            <p className="mb-0">{subject}</p>
            <div className="d-flex">
                <span>{posted_date.split('T')[0]} ,</span>
                <span className="ms-2">{status}</span>
            </div>
        </div>
    )
}

export default Ticket