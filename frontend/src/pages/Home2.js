import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
// import Button from '@mui/material/Button';
export default function Home2() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Main getting data from backend starts here //

    const [data1, setdata1] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/get_medicines").then((res) => {

            setdata1(res.data)
        }).catch((error) => {
            console.log(error)
        })
    })









    // Main getting data from backend ends here //



    return (
        <>



            {/* modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Medicine name</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="medicine name"
                                autoFocus
                            />
                            <Form.Label>Company</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="company name"
                                autoFocus
                            />
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Location"
                                autoFocus
                            />
                            <Form.Label>Donor/Seller Name</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="seller name"
                                autoFocus
                            />
                            <Form.Label>Phone #</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="phone number"
                                autoFocus
                            />

                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Contact online
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {
                window.onload = function () {
                    // Show the preloader and hide the main content initially
                    var preloader = document.getElementById('preloader');
                    var mainContent = document.getElementById('mainContent');

                    // Set a timeout to hide the preloader after 3 seconds
                    setTimeout(function () {
                        preloader.style.display = 'none';   // Hide preloader
                        mainContent.style.display = 'block'; // Show main content
                    }, 3000); // 3000 milliseconds = 3 seconds
                }
            }


            {/* <div id="preloader">
                <div id="status">
                    <img src={require("../assets/images/preloader.gif")} id="preloader_image" alt="loader" />
                </div>
            </div>
            <a href="javascript" id="return-to-top"><i className="fas fa-angle-double-up"></i></a> */}

            {/* header section */}
            <div className="banner-section-wrapper float_left" id='mainContent'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="sb-banner-section ">
                                <h4>We Are Here For You</h4>
                                <h2 className="wow fadeIn" data-wow-duration="2s" data-wow-delay=".5ms">Reliable and <br />
                                    Convenient Medicine <span>Supply</span> <br />
                                    for Your Health
                                </h2>
                                <p>It’s well-known that finding the right medication can be time-consuming. Our service simplifies the process, ensuring easy access to the medicines you need without distractions. </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* available medicines */}








            <div className="available-medicines">
                <h4 className="avalaible-mdcn">Available medicines</h4>

                <div className="my-ads-cards">
                    <section className="text-gray-600 body-font">
                        <div className="container px-4 py-14 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                {/* card start from */}
                                {
                                    data1.map((res) => {
                                        const { name, price, expiry_date, image, company } = res;
                                        return (
                                            <>

                                                <div className="p-3 md:w-1/4 " >
                                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt="blog" />
                                                        <div className="p-6">
                                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{company}</h2>
                                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{name}</h1>
                                                            <p className="leading-relaxed mb-3">Price:{price}</p>
                                                            <div className="cards-buttons">
                                                                <button className=" float-right mx-auto   text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleShow} >Get</button>
                                                                <p className="expirydate">expiry date: {expiry_date}</p>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>



                                            </>
                                        )
                                    })
                                }



                            </div>
                        </div>
                    </section>

                </div>

            </div>




            {/* our dedicated team */}
            <div className="team-main-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="sb-team-section">
                                {/* <h6 className="home1-section-heading1">Our Team</h6> */}
                                <h5 className="home1-section-heading2">Our Dedicated Staff</h5>
                                <p>It's well-known that attention to detail is key. Our dedicated staff ensures <br /> that your needs are met with precision, focusing on delivering quality care without distractions.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="team-section">
                                <div className="image">
                                    <img src={require("../assets/images/team-3.png")} alt="img" />
                                    <div class='contact-action '>
                                        <div class='item plus-sign '
                                        // onclick="actionToggleOne();"
                                        > + </div>
                                        <span class='item icon-bg'> <i className="fab fa-facebook-f"></i></span>
                                        <span class='item icon-bg'> <i className="fab fa-twitter"></i> </span>
                                    </div>
                                </div>
                                <h5><a href="dr-single.html">Dr. Aimee Devlin</a></h5>
                                <p><a href="dr-single.html">Psychiatrist</a></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="team-section">
                                <div className="image">
                                    <img src={require("../assets/images/team-2.png")} alt="img" />
                                    <div class='contact-action action-1'>
                                        <div class='item plus-sign'
                                        // onclick="actionToggleTwo();"
                                        > + </div>
                                        <span class='item icon-bg'> <i className="fab fa-facebook-f"></i></span>
                                        <span class='item icon-bg'> <i className="fab fa-twitter"></i> </span>
                                    </div>
                                </div>
                                <h5><a href="dr-single.html">Dr. Khalid Abbed</a></h5>
                                <p><a href="dr-single.html">Oncologist</a></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="team-section">
                                <div className="image">
                                    <img src={require("../assets/images/team-3.png")} alt="img" />
                                    <div class='contact-action action-2'>
                                        <div class='item plus-sign'
                                        // onclick="actionToggleThree();"
                                        > + </div>
                                        <span class='item icon-bg'> <i className="fab fa-facebook-f"></i></span>
                                        <span class='item icon-bg'> <i className="fab fa-twitter"></i> </span>
                                    </div>
                                </div>
                                <h5><a href="dr-single.html">Dr. Arthur Reese</a></h5>
                                <p><a href="dr-single.html">Hepatologist</a></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="team-section">
                                <div className="image">
                                    <img src={require("../assets/images/team-4.png")} alt="img" />
                                    <div class='contact-action action-3'>
                                        <div class='item plus-sign'
                                        //  onclick="actionToggleFour();"
                                        > + </div>
                                        <span class='item icon-bg'> <i className="fab fa-facebook-f"></i></span>
                                        <span class='item icon-bg'> <i className="fab fa-twitter"></i> </span>
                                    </div>
                                </div>
                                <h5><a href="dr-single.html">Dr. Nisha Ohri</a></h5>
                                <p><a href="dr-single.html">Dr. Nisha Ohri</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >








        </>
    )
}
