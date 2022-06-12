/**
 * @author ${Sajjadur Rahman}
 * @email ${sajjadurrahman3434@gmail.com}
 */

import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import BookProduct from '../BookProduct/Booking'
import ReturnProduct from '../ReturnProduct/Return'
import "../../asset/css/style.css"
import ErrorBoundary from "../../utils/ErrorBoundary"
import TableView from "../TableView/ProductTable"


export default function DataTable(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenReturn, setIsOpenReturn] = useState(false);

    useEffect(() => {
    }, []);

    function toggleModal() {
        setIsOpen(true);
    }
    function toggleModalReturn() {
        setIsOpenReturn(true);
    }
    return (
        <div className="App">
            <div className="">
                <ErrorBoundary>
                    <TableView />
                </ErrorBoundary>
            </div>

            <div>
                <div id="outer">
                    <div class="inner">
                        <ErrorBoundary>
                            <BookProduct status={isOpen} />
                        </ErrorBoundary>
                    </div>
                    <div class="inner return-button-home">
                        <ErrorBoundary>
                            <ReturnProduct status={isOpenReturn} />
                        </ErrorBoundary>
                    </div>
                </div>
            </div>

            <div className="">
                <p className="footer">©2022 Sajjadur Rahman</p>
                <p className="email">sajjadurrahman3434@gmail.com</p>
            </div>
        </div >
    );
}
