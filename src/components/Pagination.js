function Pagination() {
    return (
        <nav aria-label="...">
            <ul className="pagination d-flex justify-content-center mt-2">
                <li className="page-item disabled">
                    <span className="page-link" tabIndex="-1" aria-disabled="true">Previous</span>
                </li>
                <li className="page-item"><span className="page-link">1</span></li>
                <li className="page-item active" aria-current="page">
                    <span className="page-link">2</span>
                </li>
                <li className="page-item">
                    <span className="page-link">Next</span>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
