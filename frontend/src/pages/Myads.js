import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Myads() {


    const [data, setdata] = useState([])
    const email2 = sessionStorage.getItem('email')

    useEffect(() => {
        axios.post("http://localhost:4000/get_medicines_by_email", { email: email2 }).then((res) => {
            setdata(res.data)
        }).catch((error) => {
            console.log(error)
        })
    });
    const deletepost = (e) => {
    
        axios.delete("http://localhost:4000/delete_medicine", { data: e }).then((res) => {
            alert(res.data.msg)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <div className="contact-main-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="sb-contact-section">
                                <nav aria-label="breadcrumb">
                                    <h4>My Ads</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Medicines</a></li>
                                        <li className="breadcrumb-item " aria-current="page">Gallery Tour</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-ads-cards">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">

                        <div className="flex flex-wrap -m-4">

                            {
                                data && data.length > 0 ? (
                                    <h1></h1>
                                ) : (
                                    <h1 id='nofoundh1'>data not found</h1>
                                )
                            }
                            {/* <h1 id='nofoundh1'></h1> */}

                            {
                                data.map((res) => {
                                    const { name, price, expiry_date, company, image } = res;
                                    return (
                                        <>
                                            <div className="p-4 md:w-1/4 " style={{ border: "2px solid white" }}>
                                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt="blog" />
                                                    <div className="p-4">
                                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{company} </h2>
                                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-2">{name}</h1>
                                                        <p className="leading-relaxed mb-1">{price}</p>
                                                        <p className="leading-relaxed mb-1">{expiry_date}</p>
                                                        <div className="cards-buttons">
                                                            <button className=" mx-auto mt-7 text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => { deletepost(res) }}>Delete</button>
                                                            <button className="  ml-3 mt-7  text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg" >Edit</button>
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

        </>
    )
}
