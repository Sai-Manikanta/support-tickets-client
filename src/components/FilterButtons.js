import React from 'react';
import { useTicketsContext } from './../contexts/ticketsContext'
import { usePagesContext } from './../contexts/pagesContext'

function FilterButtons() {
    const { filterTickets } = useTicketsContext(); 
    const { setCurrentPage } = usePagesContext();

    const handleBtnClick = type => {
        filterTickets(type);
        setCurrentPage(1);
    }

    const getBtnStyles = (type, color) => {
        return `bg-${color} text-white mx-2 px-3 py-1 rounded border-0`; 
    };

    return (
        <div className="mt-3 d-flex justify-content-center">
            <button className={getBtnStyles('all', 'secondary')} onClick={() => handleBtnClick('all')}>
                ALL TICKETS
            </button>
            <button className={getBtnStyles('open', 'primary')} onClick={() => handleBtnClick('open')}>
                OPEN TICKETS
            </button>
            <button className={getBtnStyles('replied', 'info')} onClick={() => handleBtnClick('replied')}>
                REPLIED TICKETS
            </button>
            <button className={getBtnStyles('closed', 'success')} onClick={() => handleBtnClick('closed')}>
                CLOSED TICKETS
            </button>
            <button className={getBtnStyles('reopened', 'warning')} onClick={() => handleBtnClick('reopened')}>
                REOPENED TICKETS
            </button>
        </div>
    )
}

export default FilterButtons
