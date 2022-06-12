/**
 * @author ${Sajjadur Rahman}
 * @email ${sajjadurrahman3434@gmail.com}
 */

import Data from '../../../src/data/data.json'
import ErrorBoundary from "../../utils/ErrorBoundary"
import DataTable from "../../components/DataTable/DataTable"
import { saveProducts } from "../../utils/localStroageProduct"
import React, { useState, useEffect } from "react";




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
