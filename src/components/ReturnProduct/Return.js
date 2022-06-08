import React, { useState, useEffect } from "react";
import { Modal, Button, InputGroup } from "react-bootstrap";

export default function ReturnProduct(props) {
    const [isOpenReturn, setIsOpenReturn] = useState(false);
    const [isOpenReturnValue, setIsOpenReturnvalue] = useState(false);
    const [product, setProduct] = useState("");
    const [amount, setAmount] = useState("");
    const [amountPreview, setamountPreview] = useState("");
    const [repair, setRepair] = useState("");
    const [rentPeriod, setRentPeriod] = useState("");
    const [returnModal, setReturnModal] = useState(true);
    const [returnError, setReturnError] = useState("");


    useEffect(() => {
        setReturnModal(props.status);
    }, []);

    function toggleModalReturn() {
        setIsOpenReturn(!isOpenReturn);
        setReturnModal(!returnModal);
        window.location.reload();
    }

    function toggleModalReturnValueFinal() {
        setIsOpenReturnvalue(!isOpenReturnValue);
        setIsOpenReturn(!isOpenReturn);
        const code = product.split('/').pop();


        var dataObj = JSON.parse(localStorage.getItem("data"));
        for (var i = 0; i < dataObj.length; i++) {
            // console.log(dataObj[i].code)
            if (dataObj[i].code === code) {
                console.log("Update")
                dataObj[i].availability = true;
                dataObj[i].mileage = dataObj[i].mileage === null ? amount : parseInt(dataObj[i].mileage) + parseInt(amount);

                // return;
                break;
            }
        }
        localStorage.removeItem("data");
        { localStorage.setItem('data', JSON.stringify(dataObj)) }
        window.location.reload();
    }
    function toggleModalReturnValue() {
        if (product && amount) {
            setIsOpenReturnvalue(!isOpenReturnValue);
            var a = JSON.parse(localStorage.getItem("data")).filter(item => item.name + "/" + item.code === product)
            // setamountPreview(a[0].price * amount);

            const code = product.split('/').pop();
            var dataObj = JSON.parse(localStorage.getItem("data"));
            for (var i = 0; i < dataObj.length; i++) {
                // console.log(dataObj[i].code)
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
        <div className="App">

            {/* Return Product Initialize */}
            <Modal
                show={returnModal !== false ? true : false}
                onRequestClose={toggleModalReturn}
                contentLabel="My dialog"
            >
                <Modal.Header>
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

                            {JSON.parse(localStorage.getItem("data")).filter((c) => c.availability === false).map((val) => (
                                <option text={val.code}>
                                    {val.name}/{val.code}
                                </option>
                            ))}
                        </select>
                    </InputGroup>

                    {/* Information Start */}
                    {JSON.parse(localStorage.getItem("data")).filter(allProduct => allProduct.name + "/" + allProduct.code === product).map(products => (
                        <p className="product-desc">
                            <p>Name:&nbsp;{products.name}</p>
                            <p>Rental Period:&nbsp;{products.minimum_rent_period}</p>
                            <p>Mileage:&nbsp;{products.mileage === null ? "N/A" : products.mileage}</p>
                            <p>Repair Needed:&nbsp;{products.needing_repair === true ? "Yes" : "No"}</p>
                        </p>
                    ))}
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

                <Modal.Header>
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
