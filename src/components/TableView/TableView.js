import React from "react";
import "../style.css"
import { Table } from "react-bootstrap";


export default function TableView(props) {

    return (
        <div className="App">
            <div className="">
                <div style={{ marginRight: 20, border: '1px solid white', marginBottom: 10 }} className="TableDesign">

                    <Table responsive="sm md xs lg xl" striped hover>
                        <thead className="" style={{ backgroundColor: '#2621a0' }}>
                            <tr>
                                {props.tableHeader.map((header, index) => (
                                    <th style={{ fontsize: 21, color: "white", fontFamily: "Lucida Console" }}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {JSON.parse(localStorage.getItem("data")).filter((val) => {
                                if (props.searchKey === "") {
                                    return val;
                                }
                                else if (val.name.toLowerCase().includes(props.searchKey.toLowerCase())) {
                                    return val;
                                }
                            }).map((data, index) => (
                                <tr key={data.code}>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.type}</td>
                                    <td>{data.availability === true ? "Available" : "Not Available"}</td>
                                    <td>{data.needing_repair === true ? "Yes" : "No"}</td>
                                    <td>{data.durability}</td>
                                    <td>{data.max_durability}</td>
                                    <td>{data.mileage === "" || data.mileage === null ? "N/A" : data.mileage}</td>
                                    <td>{data.price}</td>
                                    <td>{data.minimum_rent_period}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div >
    );
}
