import Search from '../../components/Search/Search'
import Data from '../../../src/data/data.json'
import ErrorBoundary from "../../utils/ErrorBoundary"


function Products() {
    return (
        <div className="App">
            {localStorage.getItem('data') ? "" : localStorage.setItem('data', JSON.stringify(Data))}
            <ErrorBoundary>
                <Search />
            </ErrorBoundary>
        </div>
    );
}

export default Products;
