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
        }
        else {
            alert("Please Fill all the required Fields");
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
                    <div><span style={{ fontSize: 20, fontFamily: "Lucida Console", fontWeight: 'bold' }} >RETURN PRODUCT</span></div>
                </Modal.Header>

                <Modal.Body>
                    <div><span style={{ fontSize: 19, fontFamily: "Lucida Console" }} >SELECT PRODUCT</span><span style={{ color: 'red' }}>*</span></div>

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
                    <br />

                    {/* Information Start */}
                    {JSON.parse(localStorage.getItem("data")).filter(allProduct => allProduct.name + "/" + allProduct.code === product).map(products => (
                        <p style={{ fontSize: 22, fontFamily: "Lucida Console" }}>
                            <p>Name:&nbsp;{products.name}</p>
                            <p>Rental Period:&nbsp;{products.minimum_rent_period}</p>
                            <p>Mileage:&nbsp;{products.mileage === null ? "N/A" : products.mileage}</p>
                            <p>Repair Needed:&nbsp;{products.needing_repair === true ? "Yes" : "No"}</p>
                        </p>
                    ))}
                    {/* Information End */}

                    <div><span style={{ fontSize: 19, fontFamily: "Lucida Console" }} >USED MILEAGE</span><span style={{ color: 'red' }}>*</span></div>
                    <input
                        type="number"
                        placeholder="Enter Mileage"
                        value={amount}
                        min="0"
                        style={{ width: '100%' }}
                        className="form-control"
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                    />
                    <br />
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={toggleModalReturnValue} style={{ width: 58, fontSize: 18, fontFamily: "Lucida Console", height: 40, marginBottom: 10, backgroundColor: '#2621a0', color: 'white' }}>Yes</Button>
                    &nbsp;
                    <Button variant="danger" onClick={toggleModalReturn} style={{ width: 58, marginTop: -2, fontSize: 18, fontFamily: "Lucida Console", height: 40, color: 'white' }}>No</Button>
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
                    <span style={{ fontFamily: "Lucida Handwriting", fontSize: 22 }}> RETURN A PRODUCT!</span> <br /> <br />
                </Modal.Header>

                <Modal.Body>
                    <span style={{ fontsize: 22, fontFamily: "Lucida Console" }}>YOU ARE GOING TO RETUEN PRODUCT...</span> <br /><br />
                    <span style={{ fontSize: 20, fontFamily: "Lucida Console" }}>Your Total Price is</span>($)
                    <input
                        value={amountPreview}
                        style={{ border: "0", fontSize: 22, fontFamily: "Lucida Handwriting", background: 'white', fontWeight: 'bold', marginBottom: 10 }}
                        disabled
                    /><br />
                </Modal.Body>

                <Modal.Footer>
                    <span style={{ fontsize: 22, fontFamily: "Lucida Console" }}>DO you want to procedure?</span> <br /><br />
                    <Button onClick={toggleModalReturnValueFinal} style={{ fontSize: 18, fontFamily: "Lucida Console", width: 120, height: 41, background: '#2621a0', color: 'white' }}>Confirm</Button><br />
                </Modal.Footer>
            </Modal>
            {/* Return Product Confirmation */}
        </div>
    );
}
