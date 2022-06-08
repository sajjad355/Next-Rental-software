import Data from '../../../src/data/data.json'
import ErrorBoundary from "../../utils/ErrorBoundary"
import DataTable from "../../components/DataTable/DataTable"
import { saveProducts } from "../../utils/localStroageProduct"


function Products() {
    return (
        <div className="App">
            {saveProducts()}
            <ErrorBoundary>
                <DataTable />
            </ErrorBoundary>
        </div>
    );
}

export default Products;
