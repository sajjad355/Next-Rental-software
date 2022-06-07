import React from "react";
import "../style.css"
import { Table } from "react-bootstrap";


export default function TableView(props) {

    return (
        <div className="App">
            <div className="">
                <div className="table-design">

                    <Table responsive="sm md xs lg xl" striped hover bordered>
                        <thead className="header-background">
                            <tr>
                                {props.tableHeader.map((header, index) => (
                                    <th>{header}</th>
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
                                    <td>{data.availability === true ? <span className="success">Available</span> : <span className="required">Not Available</span>}</td>
                                    {/* <td>{data.needing_repair === true ? "Yes" : "No"}</td> */}
                                    <td>{data.needing_repair === true ? <span className="required">Yes</span> : <span className="success">No</span>}</td>

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
