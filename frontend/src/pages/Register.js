import React, { useState } from 'react'
import axios from 'axios'
export default function Register() {

    const [data1, setdata1] = useState({})

    const handleinput = (e) => {
        setdata1({
            ...data1, [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        if (data1.name && data1.email && data1.password && data1.confirmpassword) {
            axios.post("http://localhost:4000/user_registration", { data1 }).then((res) => {
                alert(res.data.msg)
            }).catch((error) => {
                console.log(error)

            })
        } else {
            alert('Please enter data')
        }
    }

    return (
        <>
            <div className="login-main-wrapper">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12 p-0">
                            <div className="form-sidebar">
                                <div className="logo-section">
                                    <img src={require("../assets/images/logo3.png")} alt="img" />
                                </div>
                                <div className="form-image d-xl-block d-lg-block d-none">
                                    <img src={require("../assets/images/form-img.png")} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 p-0">
                            <div className="login-main">
                                <form onSubmit={submit}>
                                    <h4>Register Now</h4>
                                    <p className="mb-3">Register by entering the information below</p>
                                    <div className="mt-2">
                                        <input type="text" name='name' className="my-width" placeholder="Name**" onChange={handleinput} />
                                    </div>
                                    <div className="mt-2">
                                        <input type="email" name='email' className="my-width" placeholder="Email**" onChange={handleinput} />
                                    </div>
                                    <div className="mt-2">
                                        <input type="password" name='password' className="my-width" placeholder="Password**" onChange={handleinput} />
                                    </div>
                                    <div className="mt-2">
                                        <input type="password" name='confirmpassword' className="my-width" placeholder="Confirm Password**" onChange={handleinput} />
                                    </div>
                                    <div className="mt-2">
                                        <input type="checkbox" id="accept" className="me-2" />
                                        <label for="accept">Yes, I understand and agree <a href="javascript" className="text-color-pink">Terms & Conditions</a>.</label>
                                    </div>
                                    <button type='submit' className='login-btn' >Register</button>
                                    <p className="mt-2">Already have an Account. <a href="login.html" className="text-color-pink">Login Now</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
