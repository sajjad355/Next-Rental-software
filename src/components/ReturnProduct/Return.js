/**
 * @author ${Sajjadur Rahman}
 * @email ${sajjadurrahman3434@gmail.com}
 */

import React, { useState } from "react";
import { Modal, Button, InputGroup } from "react-bootstrap";
import { saveProducts } from "../../utils/localStroageProduct"
import Swal from "sweetalert2";
import { getProducts } from "../../utils/localStroageProduct"
import { removeProducts } from "../../utils/localStroageProduct"



export default function ReturnProduct(props) {
    const [isOpenReturn, setIsOpenReturn] = useState(false);
    const [isOpenReturnValue, setIsOpenReturnvalue] = useState(false);
    const [product, setProduct] = useState("");
    const [amount, setAmount] = useState("");
    const [amountPreview, setamountPreview] = useState("");
    const [repair, setRepair] = useState("");
    const [rentPeriod, setRentPeriod] = useState("");
    const [returnModal, setReturnModal] = useState(false);
    const [returnError, setReturnError] = useState("");



    function toggleModalReturn() {
        setIsOpenReturn(!isOpenReturn);
        setReturnModal(!returnModal);
        setAmount("");
        setReturnError("");
        setProduct("");
    }

    function toggleModalReturnValueFinal() {
        setIsOpenReturnvalue(!isOpenReturnValue);
        setIsOpenReturn(!isOpenReturn);
        const code = product.split('/').pop();


        var dataObj = getProducts();
        for (var i = 0; i < dataObj.length; i++) {
            if (dataObj[i].code === code) {
                dataObj[i].availability = true;
                dataObj[i].mileage = dataObj[i].mileage === null ? amount : parseInt(dataObj[i].mileage) + parseInt(amount);
                break;
            }
        }
        removeProducts()
        saveProducts(dataObj)
        setReturnModal(!returnModal);

        Swal.fire(
            "Success!",
            "Product Returned.",
            "success"
        ).then(function () {
            setAmount("");
            setReturnError("");
            setProduct("");
            props.updateData();
        });
    }
    function toggleModalReturnValue() {
        if (product && amount) {
            setIsOpenReturnvalue(!isOpenReturnValue);
            var a = getProducts().filter(item => item.name + "/" + item.code === product)
            const code = product.split('/').pop();
            var dataObj = getProducts();
            for (var i = 0; i < dataObj.length; i++) {
                if (dataObj[i].code === code) {
                    setamountPreview(dataObj[i].returnPrice)
                    break;
                }
            }
            setRepair(a[0].needing_repair === "false" ? "No" : "Yes");
            setRentPeriod(a[0].minimum_rent_period);
            setReturnError("")
        }
        else {
            setReturnError("Please Fill all the required Fields")
        }
    }

    return (
        <div className="">

            <div className="mb-5 book-return">
                <Button onClick={() => setReturnModal(true)} className="return" variant="danger">Return</Button>
            </div>

            {/* Return Product Initialize */}
            <Modal
                show={returnModal !== false ? true : false}
                onRequestClose={toggleModalReturn}
                contentLabel="My dialog"
            >
                <Modal.Header className="model-header">
                    <div><span className="book-product" >RETURN PRODUCT</span></div>
                </Modal.Header>

                <Modal.Body>
                    <div><span className="select-product" >SELECT PRODUCT</span><span className="required">*</span></div>

                    <InputGroup className="mb-3">
                        <select
                            className="form-control"
                            name="product"
                            value={product}
                            onChange={(e) => setProduct(e.target.value)}
                            required
                        >
                            <option value="" disabled>-- Product --</option>

                            {
                                getProducts() ?
                                    getProducts().filter((c) => c.availability === false).map((val) => (
                                        <option text={val.code}>
                                            {val.name}/{val.code}
                                        </option>
                                    )) : ""
                            }
                        </select>
                    </InputGroup>

                    {/* Information Start */}
                    {
                        getProducts() ? getProducts().filter(allProduct => allProduct.name + "/" + allProduct.code === product).map(products => (
                            <p className="product-desc">
                                <p>Name:&nbsp;{products.name}</p>
                                <p>Rental Period:&nbsp;{products.minimum_rent_period}</p>
                                <p>Mileage:&nbsp;{products.mileage === null ? "N/A" : products.mileage}</p>
                                <p>Repair Needed:&nbsp;{products.needing_repair === true ? "Yes" : "No"}</p>
                            </p>
                        )) : ""
                    }
                    {/* Information End */}

                    <div><span className="input-title">USED MILEAGE</span><span className="required">*</span></div>
                    <input
                        type="number"
                        placeholder="Enter Mileage"
                        value={amount}
                        min="0"
                        className="form-control mileage"
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                    />
                    <p className="required"> {returnError}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={toggleModalReturnValue} className="yes-button">Yes</Button>
                    &nbsp;
                    <Button variant="danger" onClick={toggleModalReturn} className="no-button">No</Button>
                </Modal.Footer>
            </Modal>
            {/* Return Product Initialize */}

            {/* Return Product Confirmation */}
            <Modal
                show={isOpenReturnValue ? true : false}
                onRequestClose={toggleModalReturnValue}
                contentLabel="My dialog"
            >

                <Modal.Header className="model-header">
                    <span className="book-product"> RETURN A PRODUCT!</span>
                </Modal.Header>

                <Modal.Body>
                    <span className="input-title">YOU ARE GOING TO RETUEN PRODUCT...</span>
                    <span className="input-title">Your Total Price is</span>($)
                    <input
                        value={amountPreview}
                        className="estimated-price"
                        disabled
                    />
                </Modal.Body>

                <Modal.Footer>
                    <span className="is-confirm">Do you want to procedure?</span>
                    <Button onClick={toggleModalReturnValueFinal} className="return-confirm">Confirm</Button>
                </Modal.Footer>
            </Modal>
            {/* Return Product Confirmation */}
        </div>
    );
}
