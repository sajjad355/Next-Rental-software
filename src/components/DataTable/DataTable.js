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
            <div className="mb-5 book-return">
                <Button onClick={toggleModal} className="book" data-testid="button">Book</Button>
                <Button onClick={toggleModalReturn} className="return" variant="danger">Return</Button>
            </div>
            <div>
                {isOpen ?
                    <ErrorBoundary>
                        <BookProduct status={isOpen} />
                    </ErrorBoundary>
                    : ""
                }
                {isOpenReturn ?
                    <ErrorBoundary>
                        <ReturnProduct status={isOpenReturn} />
                    </ErrorBoundary> : ""}

            </div>
            <div className="">
                <p className="copy-right">©2022 Sajjadur Rahman</p>
                <p className="email">sajjadurrahman3434@gmail.com</p>
            </div>
        </div >
    );
}
