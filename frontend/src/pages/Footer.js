import React from 'react'

export default function Footer() {
    return (
        <>

            <div className="footer-main-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="sb-footer-section">
                                <div className="footer-logo">
                                    <img src={require("../assets/images/footer-logo.png")} alt="img" />
                                </div>
                                <ul>
                                    <li><a href="javascript"><i className="fas fa-map-marker-alt"></i>ADDRESS<br />
                                        121 Waldeck Street, NY, USA</a>
                                    </li>
                                    <li><a href="javascript"><i className="fas fa-phone"></i>PHONE<br />
                                        0800-123456, 0800-123489</a>
                                    </li>
                                    <li><a href="javascript"><i className="fas fa-envelope"></i>EMAIL<br />
                                        medisch@example.com</a>
                                    </li>
                                    <li>
                                        <ul className="footer-media">
                                            <li><a href="javascript"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="javascript"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="javascript"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="javascript"><i className="fab fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><a href="about-us.html"><i className="fas fa-angle-right"></i>About Us</a></li>
                                    <li><a href="service.html"><i className="fas fa-angle-right"></i>Service</a></li>
                                    <li><a href="gallery.html"><i className="fas fa-angle-right"></i>Gallery</a></li>
                                    <li><a href="blog-single.html"><i className="fas fa-angle-right"></i>Blog</a></li>
                                    <li><a href="appoinment.html"><i className="fas fa-angle-right"></i>Appoinments</a></li>
                                    <li><a href="contact-us.html"><i className="fas fa-angle-right"></i>Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <h4>Recent Posts</h4>
                            <div className="img-link">
                                <ul>
                                    <li>
                                        <img src={require("../assets/images/post-img1.jpg")} alt="img" />
                                        <div className="content">
                                            <h5 className="pb-0"><a href="blog-single.html">Best Surgery</a></h5>
                                            <p>Our best surgery<br />
                                                available here.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={require("../assets/images/post-img2.jpg")} alt="img" />
                                        <div className="content">
                                            <h5 className="pb-0"><a href="blog-single.html">Best Doctors</a></h5>
                                            <p>Our best surgery<br />
                                                available here.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={require("../assets/images/post-img3.jpg")} alt="img" />
                                        <div className="content">
                                            <h5 className="pb-0"><a href="blog-single.html">Best Services</a></h5>
                                            <p>Our best surgery<br />
                                                available here.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={require("../assets/images/post-img4.jpg")} alt="img" />
                                        <div className="content">
                                            <h5 className="pb-0"><a href="blog-single.html">Best Rooms</a></h5>
                                            <p>Our best surgery<br />
                                                available here.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="time-wrapper">
                                <div>
                                    <h4>Days</h4>
                                    <ul>
                                        <li>Monday</li>
                                        <li>Tuesday</li>
                                        <li>Wednesday</li>
                                        <li>Thrusday</li>
                                        <li>Friday</li>
                                        <li>Saturday</li>
                                        <li>Sunday</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4>Opening Hours</h4>
                                    <ul>
                                        <li>08.00 - 10.00</li>
                                        <li>09.00 - 11.00</li>
                                        <li>10.00 - 12.00</li>
                                        <li>11.00 - 01.00</li>
                                        <li>12.00 - 02.00</li>
                                        <li>01.00 - 02.00</li>
                                        <li>02.00 - 04.00</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="newsletter">
                                <h5>Sign Up for Newsletter</h5>
                                <div className="input-box">
                                    <input type="text" name="text" id="text" placeholder="Enter Your Email" />
                                    <a href="javascript">
                                        <i className="fas fa-paper-plane"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <p>© Copyright 2022 - 23 Design by <a href="https://webstrot.com/">Webstrot</a>  | All Rights Reserved.</p>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <p className="last-para">Private Policy | Terms and Conditions.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>




        </>
    )
}
