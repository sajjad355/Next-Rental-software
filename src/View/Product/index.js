import Data from '../../../src/data/data.json'
import ErrorBoundary from "../../utils/ErrorBoundary"
import DataTable from "../../components/DataTable/DataTable"


function Products() {
    return (
        <div className="App">
            {localStorage.getItem('data') ? "" : localStorage.setItem('data', JSON.stringify(Data))}
            <ErrorBoundary>
                <DataTable />
            </ErrorBoundary>
        </div>
    );
}

export default Products;
