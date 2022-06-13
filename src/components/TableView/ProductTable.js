/**
 * @author ${Sajjadur Rahman}
 * @email ${sajjadurrahman3434@gmail.com}
 */

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import { InputGroup, FormControl } from "react-bootstrap";





const ProductTable = (props) => {
    const [searchVal, setSearchVal] = useState("");

    const [pageNo, setPageNo] = React.useState(0);
    const [dataPerPage, setDataPerPage] = React.useState(7);

    const handleChangePageNo = (event, newPage) => {
        setPageNo(newPage);
    };

    const handleChangeDataPerPage = (event) => {
        setDataPerPage(+event.target.value);
        setPageNo(0);
    };

    const TableCellDesign = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#2621a0',
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const TableRowDesign = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },

    }));

    return (
        <>
            <div className="float-left">
                <p className="title">RENTAL LEDGER BOOK</p>
            </div>

            <div>
                <span>
                    <div className="float-right mt-3 search-root">
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                            </InputGroup.Text>
                            <FormControl
                                placeholder="Enter product name"
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                                onChange={(e) => {
                                    setSearchVal(e.target.value);
                                }}
                            />
                        </InputGroup>
                    </div>
                </span>
            </div>

            <Paper sx={{ width: "100%", overflow: "hidden" }} className="table-margin">
                <TableContainer sx={{ maxHeight: '450px' }}>
                    <Table stickyHeader>
                        <TableHead className="table-header">
                            <TableRow className="table-header">
                                <TableCellDesign>Name</TableCellDesign>
                                <TableCellDesign align="right">Type</TableCellDesign>
                                <TableCellDesign align="right">Availability</TableCellDesign>
                                <TableCellDesign align="right">Repair</TableCellDesign>
                                <TableCellDesign align="right">Price</TableCellDesign>
                                <TableCellDesign align="right">Durability</TableCellDesign>
                                <TableCellDesign align="right">Mileage</TableCellDesign>
                                <TableCellDesign align="right">Minimum Rent Period</TableCellDesign>
                            </TableRow>
                        </TableHead>

                        {
                            props.data ? props.data
                                .filter((value) => {
                                    if (searchVal === "") {
                                        return value;
                                    } else if (
                                        value.name.toLowerCase().includes(searchVal.toLowerCase())
                                    ) {
                                        return value;
                                    }
                                    return 0;
                                })
                                .slice(pageNo * dataPerPage, pageNo * dataPerPage + dataPerPage)
                                .map((value) => {
                                    return (
                                        <TableBody>
                                            <TableRowDesign>
                                                <TableCellDesign>
                                                    {value.name}
                                                </TableCellDesign>
                                                <TableCellDesign align="right">
                                                    {value.type}
                                                </TableCellDesign>
                                                <TableCellDesign align="right">
                                                    {value.availability ? <span className="success">Available</span> : <span className="required">Not Available</span>}
                                                </TableCellDesign>
                                                <TableCellDesign align="right">
                                                    {value.needing_repair ? <span className="required">Yes</span> : <span className="success">No</span>}
                                                </TableCellDesign>
                                                <TableCellDesign align="right">
                                                    {value.price}
                                                </TableCellDesign>
                                                <TableCellDesign align="right">
                                                    {value.durability}
                                                </TableCellDesign>
                                                <TableCellDesign align="right">
                                                    {value.mileage ? value.mileage : "N/A"}
                                                </TableCellDesign>
                                                <TableCellDesign align="right">
                                                    {value.minimum_rent_period ? value.minimum_rent_period : "N/A"}
                                                </TableCellDesign>
                                            </TableRowDesign>
                                        </TableBody>
                                    );
                                }) : ""
                        }
                    </Table>
                </TableContainer>
                {
                    props.data ?
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 20]}
                            component="div"
                            count={props.data.length}
                            rowsPerPage={dataPerPage}
                            page={pageNo}
                            onPageChange={handleChangePageNo}
                            onRowsPerPageChange={handleChangeDataPerPage}
                        /> : ""
                }

            </Paper>
        </>
    );
};

export default ProductTable;