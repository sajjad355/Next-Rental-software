import React, { useState } from "react";
import { Modal, Form, Button, InputGroup } from "react-bootstrap";
import { dayDifferenceCalculate } from "../../utils/dayDifferenceCalculate";
import { saveProducts } from "../../utils/localStroageProduct"



export default function BookProduct(props) {
    const [isOpenBookingValue, setIsOpenBookingvalue] = useState(false);
    const [isOpenBookingValueCompleted, setIsOpenBookingvalueCompleted] = useState(false);
    const [productBooking, setProductBooking] = useState("");
    const [amountPreview, setamountPreview] = useState("");
    const [fromDate, setFromdate] = useState("");
    const [toDate, setToDate] = useState("");
    const [bookModal, setBookModal] = useState(true);
    const [productId, setProductId] = useState("");
    const [bookError, setBookError] = useState("");

    function toggleModal() {
        setBookModal(false);
        window.location.reload();
    }

    function toggleModalBookingValueComplted() {
        setIsOpenBookingvalueCompleted(!isOpenBookingValueCompleted);
        setIsOpenBookingvalueCompleted(!isOpenBookingValueCompleted);
        setIsOpenBookingvalue(!isOpenBookingValue);
    }
    function toggleModalBookingValueCompltedFinal() {

        setIsOpenBookingvalueCompleted(!isOpenBookingValueCompleted);
        const code = productBooking.split('/').pop();


        var dataObj = JSON.parse(localStorage.getItem("data"));
        for (var i = 0; i < dataObj.length; i++) {
            if (dataObj[i].code === code) {
                dataObj[i].availability = false;
                dataObj[i].returnPrice = amountPreview;
                break;
            }
        }
        localStorage.removeItem("data");
        { saveProducts(dataObj) }

        window.location.reload();
    }

    function toggleBookingValueCancel() {
        setIsOpenBookingvalue(!isOpenBookingValue);
    }
    function toggleModalBookingValue() {
        if (productBooking && fromDate && toDate) {
            var a = JSON.parse(localStorage.getItem("data")).filter(item => item.name + "/" + item.code === productBooking)
            const date1 = new Date(toDate);
            const date2 = new Date(fromDate);
            // const diffTime = Math.abs(date2 - date1);
            // const dayDiff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            const dayDiff = dayDifferenceCalculate(date1, date2);
            if (fromDate > toDate) {
                setBookError("To Date must be Greater than From Date!")
                setIsOpenBookingvalue(isOpenBookingValue);
            }
            else {
                if (dayDiff >= a[0].minimum_rent_period) {
                    setIsOpenBookingvalue(!isOpenBookingValue);
                    setBookError("");

                }
                else {
                    setBookError("You have to Rent this for minumum " + a[0].minimum_rent_period + " Days")

                }
            }
            setamountPreview(a[0].price * dayDiff);
        }
        else {
            setBookError("Please Fill all the required Fields")

        }
    }
    return (

        <div className="App">

            {/* Book Product Initialize */}
            <Modal
                show={bookModal ? true : false}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
            >
                <Modal.Header>
                    <div><span className="book-product" >BOOK A PRODUCT</span></div>
                </Modal.Header>

                <Modal.Body>
                    <div><span className="select-product">SELECT PRODUCT</span><span className="required">*</span></div>

                    <InputGroup className="mb-3">
                        <select
                            align="center"
                            className="form-control"
                            name="product"
                            value={productBooking}
                            onChange={(e) => setProductBooking(e.target.value)}
                            required={true}
                        >
                            <option value="" disabled>-- Product --</option>

                            {
                                localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")).filter((c) => c.availability === true).map((val) => (
                                    <option text={val.code}>
                                        {val.name}/{val.code}
                                    </option>
                                )) : ""
                            }
                        </select>
                    </InputGroup>

                    {/* Information Start */}
                    {
                        localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")).filter(product => product.name + "/" + product.code === productBooking).map(products => (
                            <p className="product-desc">
                                <p>Name:&nbsp;{products.name}</p>
                                <p>Rental Period:&nbsp;{products.minimum_rent_period}</p>
                                <p>Mileage:&nbsp;{products.mileage === null ? "N/A" : products.mileage}</p>
                                <p>Repair Needed:&nbsp;{products.needing_repair === true ? "Yes" : "No"}</p>
                                <p>Price:&nbsp;{products.price}</p>
                            </p>
                        )) : ""
                    }

                    {/* Information End */}

                    <span className="input-title" >FROM</span><span className="required">*</span> &nbsp;
                    <Form.Control type="date" value={fromDate} min={new Date().toISOString().split("T")[0]}

                        onChange={(e) => {
                            setFromdate(e.target.value);
                        }} />

                    <p className="input-title to-margin">
                        <span>TO</span>
                        <span className="required">*</span>
                        &nbsp;
                        <Form.Control type="date" value={toDate} onChange={(e) => {
                            setToDate(e.target.value);
                        }} />
                    </p>
                    <p className="required"> {bookError}</p>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={toggleModalBookingValue} className="yes-button">Yes</Button>
                    &nbsp;
                    <Button variant="danger" onClick={toggleModal} className="no-button">No</Button>

                </Modal.Footer>
            </Modal>
            {/* Book Product Initialize */}


            {/* Estimated Price After Booking Product */}
            <Modal
                show={isOpenBookingValue ? true : false}
                onRequestClose={toggleModalBookingValue}
                contentLabel="My dialog"
            >
                <Modal.Header>
                    <div><span className="book-product" >BOOK A PRODUCT</span></div>
                </Modal.Header>

                <Modal.Body>
                    <span className="price-info">Your Estimated Price</span>($)<input
                        type="number"
                        placeholder="Enter Amount"
                        value={amountPreview}
                        className="estimated-price"
                        disabled

                    />
                </Modal.Body>

                <Modal.Footer>
                    <span className="">Do you want to procedure?</span>


                    <Button onClick={toggleModalBookingValueComplted} className="yes-button-confirm">Yes</Button>
                    &nbsp;
                    <Button variant="danger" onClick={toggleBookingValueCancel} className="no-button-confirm">No</Button>
                </Modal.Footer>
            </Modal>
            {/* Estimated Price After Booking Product */}

            {/* Booking Product Confirmation */}
            <Modal
                show={isOpenBookingValueCompleted ? true : false}
                onRequestClose={toggleModalBookingValueComplted}
                contentLabel="My dialog"
            >
                <Modal.Header>
                    <span className="congrats">CONGRATULATIONS!</span>
                </Modal.Header>

                <Modal.Body>
                    <span className="price-info">YOU HAVE BOOKED THIS PRODUCT!</span>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={toggleModalBookingValueCompltedFinal} className="done">Done</Button>
                </Modal.Footer>
            </Modal>
            {/* Booking Product Confirmation */}
        </div>
    );
}
