import React, { useState } from 'react'
import '../assets/css/style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()

    const [data1, setdata1] = useState("")

    const handleinput = (e) => {
        setdata1({
            ...data1, [e.target.name]: e.target.value
        })
    }


    const submit = (e) => {
        e.preventDefault();
        if (data1.email && data1.password) {
            axios.post("http://localhost:4000/user_login", { data1 }).then((res) => {
                alert(res.data.msg)
                // console.log(res.data.d)
                sessionStorage.setItem('name', res.data.d[0].name)
                sessionStorage.setItem('email', res.data.d[0].email)
                sessionStorage.setItem('random_id', res.data.d[0].random_id)

                navigate('/home2')
                // alert("login successfully")
            }).catch((error) => {
                console.log(error)
            })
        } else {
            alert("please enter data")
        }
    }

    return (
        <>
            <div className="login-main-wrapper" >
                <div className="container-fluid" >
                    <div className="row align-items-center" >
                        <div className="col-lg-6 col-md-12 col-12 p-0" >
                            <div className="form-sidebar" >
                                <div className="logo-section" >
                                    <img src={require('../assets/images/logo3.png')} alt="img" />

                                </div>
                                <div className="form-image d-xl-block d-lg-block d-none">
                                    <img src={require('../assets/images/form-img.png')} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 p-0">
                            <div className="login-main">
                                <form onSubmit={submit} >
                                    <h4>Welcome Back</h4>
                                    <p className="mb-3">Login by entering the information below</p>
                                    <div className="mt-2">
                                        <input type="text" className="my-width" name='email' placeholder="Email*" onChange={handleinput} />
                                    </div>
                                    <div className="mt-2">
                                        <input type="text" className="my-width" name='password' placeholder="Password*" onChange={handleinput} />
                                    </div>
                                    <ul className="">
                                        <li>
                                            <input type="checkbox" name="remember" id="confirm" />
                                            <label htmlFor="confirm">Remember me</label>
                                        </li>
                                        <li><a href="javascript">
                                            Forget Passsword?
                                        </a>
                                        </li>
                                    </ul>
                                    <div className="d-flex align-items-baseline ">


                                        <button type='submit' className='login-btn' >Login</button>
                                        <a href="/register" className="ms-4 form-resp-display">Create Account</a>
                                    </div>
                                    <p className="mt-3"> Or you can join with</p>
                                    <ul className="form-media">
                                        <li><a href="javascript">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                        </li>
                                        <li><a href="javascript">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        </li>
                                        <li><a href="javascript">
                                            <i className="fab fa-google"></i>
                                        </a>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div >





        </>
    )
}
