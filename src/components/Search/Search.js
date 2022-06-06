import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import "../style.css"
import DataTable from '../../components/DataTable/DataTable'


export default function Search() {
    const [serarchTerm, setSearchTerm] = useState("");

    return (
        <div className="Search">
            <div className="center">
                <div className="float-right mt-4" style={{ marginRight: 20 }}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        </InputGroup.Text>
                        <FormControl
                            placeholder="Name or Type"
                            aria-label="Search"
                            style={{ height: 40 }}
                            aria-describedby="basic-addon1"
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                            }}
                        />
                    </InputGroup>
                </div>
                <div>
                    <DataTable
                        searchKey={serarchTerm}
                    />
                </div>
            </div>
        </div >
    );
}
