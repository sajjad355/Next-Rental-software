import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import BookProduct from '../BookProduct/Booking'
import ReturnProduct from '../ReturnProduct/Return'
import TableView from '../TableView/TableView'
import "../style.css"

export default function DataTable(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenReturn, setIsOpenReturn] = useState(false);
    const [tableHeader, setTableHeader] = useState(["", "Name", "Type", "Availability", "Repair Needed", "Durability", "Maximum Durability", "Mileage", "Price", "Minimum Rent Period"
    ])

    function toggleModal() {
        setIsOpen(true);
    }
    function toggleModalReturn() {
        setIsOpenReturn(true);
    }
    return (
        <div className="App">
            <div className="">
                <TableView
                    searchKey={props.searchKey}
                    tableHeader={tableHeader}
                />
            </div>
            <div className="mb-5 BookReturn">
                <Button onClick={toggleModal} className="book" >Book</Button>
                <Button onClick={toggleModalReturn} className="return" variant="danger">Return</Button>
            </div>
            <div>
                {isOpen ? <BookProduct status={isOpen} /> : ""}
                {isOpenReturn ? <ReturnProduct status={isOpenReturn} /> : ""}
            </div>
        </div >
    );
}
