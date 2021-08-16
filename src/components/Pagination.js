import React from 'react';
import { usePagesContext } from './../contexts/pagesContext'

function Pagination() {
    const { currentPage, pagesArray, setCurrentPage } = usePagesContext();
    const lastPage = pagesArray[pagesArray.length - 1];

    return (
        <nav aria-label="">
            <ul className="pagination d-flex justify-content-center mt-2">
                <li className="page-item" onClick={() => {
                    if(currentPage > 1){
                        setCurrentPage(currentPage - 1)
                    }
                }}>
                    <span className="page-link" tabIndex="-1" aria-disabled="true">Previous</span>
                </li>

                {pagesArray.map(page => (
                    <li 
                        key={page} 
                        className={`page-item ${currentPage === page && 'active'}`}
                        onClick={() => setCurrentPage(page)}
                    >
                        <span className="page-link">{page}</span>
                    </li>
                ))}
                
                <li className="page-item" onClick={() => {
                    if(currentPage < lastPage){
                        setCurrentPage(currentPage + 1)
                    }
                }}>
                    <span className="page-link">Next</span>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
