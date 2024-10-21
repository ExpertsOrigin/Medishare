import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Navibar() {


    const Logout = () => {
        sessionStorage.clear();
        navigate("/login");
    }










    const email = sessionStorage.getItem('email')
    // console.log(email)
    const navigate = useNavigate()
    const login = () => {
        navigate("/login")
    }
    const signup = () => {
        navigate("/register")
    }

    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/get_companies").then((res) => {
            setdata(res.data)
        }).catch((error) => {
            console.log(error)
        })
    })

    const logout = () => {

    }

    return (
        <>

            <div className="menu-items-wrapper d-xl-block d-lg-block d-md-none d-sm-none d-none ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-6" style={{ width: "38%", marginLeft: "11%", marginRight: "1.5%" }}>
                            <nav className="navbar navbar-expand-lg">
                                <ul className="navbar-nav">
                                    <li className="nav-item ps-rel">
                                        <Link className="nav-link" to="/home2">Home
                                            <span><i className="fas fa-chevron-right"></i></span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/chat">Chat
                                            <span><i className="fas fa-chevron-right"></i></span>
                                        </Link>

                                    </li>
                                    <li className="nav-item ps-rel">
                                        <Link className="nav-link">Sell or Donate
                                            <span><i className="fas fa-chevron-right"></i></span>
                                        </Link>
                                        <div className="dropdown-items mega-menu">
                                            <div className="outer-ul">
                                                <h6 className='nav-h6'>Select the company</h6>
                                                <div className="company-div">
                                                    <ul className='company_ul'>
                                                        {
                                                            data.map((res) => {
                                                                const { c_name } = res;
                                                                return (
                                                                    <>
                                                                        <li><Link to={`/newmedicine/${c_name}`}>{c_name}</Link></li>

                                                                    </>
                                                                )
                                                            })
                                                        }

                                                    </ul>
                                                </div></div></div>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/myads">My-Ads
                                            <span><i className="fas fa-chevron-right"></i></span>
                                        </Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/account">Account
                                            <span><i className="fas fa-chevron-right"></i></span>
                                        </Link>

                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-4 col-md-6 nav-form">
                            <form className="d-flex  justify-content-start ps-rel nav-input">
                                <input className="" placeholder="Search" />
                                <span><i className="fas fa-search"></i></span>
                            </form>
                            {/* <button>login</button>
                            <button>signup</button> */}
                            <div className="login-links">
                                {
                                    email && email.length > 0 ? (
                                        <>
                                            <p className='email_h6'>{email}</p>
                                            <button className='logout_btn' onClick={Logout}>Logout</button>
                                        </>
                                    ) : (
                                        <>
                                            <button className='login_btn' onClick={login}>Login</button> /
                                            <button className='signup_btn' onClick={signup}>Signup</button>
                                        </>
                                    )
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}
