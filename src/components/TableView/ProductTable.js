/**
 * @author ${Sajjadur Rahman}
 * @email ${sajjadurrahman3434@gmail.com}
 */

import React, { useState, useEffect } from "react";
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
import logo from "../../asset/images/logo.png"





const ProductTable = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(7);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    useEffect(() => {
        setProducts(props.data);
    }, []);

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
                                    setSearchTerm(e.target.value);
                                }}
                            />
                        </InputGroup>
                    </div>
                </span>
            </div>

            <Paper sx={{ width: "100%", overflow: "hidden" }} className="table-margin">
                <TableContainer sx={{ maxHeight: '450px' }}>
                    <Table id="rentaldata" stickyHeader>
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
                                .filter((val) => {
                                    if (searchTerm === "") {
                                        return val;
                                    } else if (
                                        val.name.toLowerCase().includes(searchTerm.toLowerCase())
                                    ) {
                                        return val;
                                    }
                                    return 0;
                                })
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((val) => {
                                    return (
                                        <TableBody key={val.code}>
                                            <TableRowDesign name={val.name} mileage={val.mileage}>
                                                <TableCellDesign component="" scope="row">
                                                    {val.name}
                                                </TableCellDesign>
                                                <TableCellDesign align="right">
                                                    {val.type}
                                                </TableCellDesign>
                                                <TableCellDesign align="right">
                                                    {val.availability ? <span className="success">Available</span> : <span className="required">Not Available</span>}
                                                </TableCellDesign>
                                                <TableCellDesign align="right">
                                                    {val.needing_repair ? <span className="required">Yes</span> : <span className="success">No</span>}
                                                </TableCellDesign>
                                                <TableCellDesign align="right">
                                                    {val.price}
                                                </TableCellDesign>
                                                <TableCellDesign align="right">
                                                    {val.durability}
                                                </TableCellDesign>
                                                <TableCellDesign align="right">
                                                    {val.mileage ? val.mileage : "N/A"}
                                                </TableCellDesign>
                                                <TableCellDesign align="right">
                                                    {val.minimum_rent_period ? val.minimum_rent_period : "N/A"}
                                                </TableCellDesign>
                                            </TableRowDesign>
                                        </TableBody>
                                    );
                                }) : ""
                        }
                    </Table>
                </TableContainer>
                {
                    products ?
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 20]}
                            component="div"
                            count={products.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        /> : ""
                }

            </Paper>
        </>
    );
};

export default ProductTable;