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
            <div className="mb-5" style={{ marginRight: 21, display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={toggleModal} style={{ width: 85 }} >Book</Button>
                <Button onClick={toggleModalReturn} style={{ marginLeft: 5, width: 85 }} variant="danger">Return</Button>
            </div>
            <div>
                {isOpen ? <BookProduct status={isOpen} /> : ""}
                {isOpenReturn ? <ReturnProduct status={isOpenReturn} /> : ""}
            </div>
        </div >
    );
}
