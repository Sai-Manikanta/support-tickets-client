import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterButtons from "./components/FilterButtons";
import Tickets from "./components/Tickets";
import MessageInfo from "./components/MessageInfo";
import Pagination from "./components/Pagination";

function App() {
    return (
        <div className="container">
            <Header />
            <FilterButtons />
            <div className="row gap-3 mt-4">
                <Tickets />
                <MessageInfo />
            </div>
            <Pagination />
        </div>
    )
}

export default App
