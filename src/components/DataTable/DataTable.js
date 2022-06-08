import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import BookProduct from '../BookProduct/Booking'
import ReturnProduct from '../ReturnProduct/Return'
import "../style.css"
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
            <br></br>
            <div className="mb-5 BookReturn">
                <Button onClick={toggleModal} className="book" >Book</Button>
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
        </div >
    );
}
