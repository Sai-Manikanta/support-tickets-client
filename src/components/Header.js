import Search from "./Search";

function Header() {
    return (
        <div className="p-1 mt-3 d-flex justify-content-between align-items-center">
            <h1 className="display-4 fw-bold">SUPPORT</h1>
            <Search />
        </div>
    )
}

export default Header
