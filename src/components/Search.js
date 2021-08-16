import React, { useState } from 'react';
import { useTicketsContext } from './../contexts/ticketsContext';

function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const { searchTickets } = useTicketsContext();

    const handleSubmit = e => {
        e.preventDefault();
        searchTickets(searchQuery);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Search all orders"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="px-2"
            />  
        </form>
    )
}

export default Search
