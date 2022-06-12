/**
 * @author ${Sajjadur Rahman}
 * @email ${sajjadurrahman3434@gmail.com}
 */

import ErrorBoundary from "../../utils/ErrorBoundary"
import DataTable from "../../components/DataTable/DataTable"
import { saveProducts } from "../../utils/localStroageProduct"
import React, { useState } from "react";




function Products() {
    const [dataObj, setDataObj] = useState("");

    return (
        <div className="App">
            {saveProducts(dataObj)}
            <ErrorBoundary>
                <DataTable />
            </ErrorBoundary>
        </div>
    );
}

export default Products;
