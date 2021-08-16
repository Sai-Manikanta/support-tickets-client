import React, { useState } from 'react';
import { useTicketsContext } from './../contexts/ticketsContext'

function FilterButtons() {
    const [activeBtn, setActiveBtn] = useState('all');
    const { filterTickets } = useTicketsContext();

    console.log(activeBtn);

    const handleBtnClick = type => {
        filterTickets(type);
        setActiveBtn(type);
    }

    const getBtnStyles = (type, color, activeBtn) => {
        return `bg-${color} text-white mx-2 px-3 py-1 rounded ${(activeBtn === type) && 'border-4 border-dark border-dark'}`;
    };

    return (
        <div className="mt-3 d-flex justify-content-center">
            <button className={getBtnStyles('all', 'secondary', activeBtn)} onClick={() => handleBtnClick('all')}>
                ALL TICKETS
            </button>
            <button className={getBtnStyles('open', 'primary', activeBtn)} onClick={() => handleBtnClick('open')}>
                OPEN TICKETS
            </button>
            <button className={getBtnStyles('replied', 'info', activeBtn)} onClick={() => handleBtnClick('replied')}>
                REPLIED TICKETS
            </button>
            <button className={getBtnStyles('closed', 'success', activeBtn)} onClick={() => handleBtnClick('closed')}>
                CLOSED TICKETS
            </button>
            <button className={getBtnStyles('reopened', 'warning', activeBtn)} onClick={() => handleBtnClick('reopened')}>
                REOPENED TICKETS
            </button>
        </div>
    )
}

export default FilterButtons
