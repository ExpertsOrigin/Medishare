import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';
import axios from 'axios'
// import { Experimental_CssVarsProvider } from '@mui/material';
export default function Account() {

    const [data1, setdata1] = useState({})
    const handle_input = (e) => {
        setdata1({
            ...data1, [e.target.name]: e.target.value
        })
    }

    const randomid = sessionStorage.getItem('random_id')

    const submit = () => {
        if (data1.name || data1.email || data1.contact || data1.address) {
            const formdata = new FormData();
            formdata.append('name', data1.name);
            formdata.append('email', data1.email);
            formdata.append('contact', data1.contact);
            formdata.append('address', data1.address);
            formdata.append('randomid', randomid);


            axios.post('http://localhost:4000/update_account_data', formdata).then((res) => {
                alert(res.data.msg)

            }).catch((error) => {
                console.log(error)
            })
        } else {
            alert("please enter data")
        }

    }

    return (
        <>

            <div className="account-div-main">


                <div className="div-third " style={{ margin: "0px auto" }}>

                    <section className="text-gray-600 body-font relative ">
                        <div className="container px-5 py-10 mx-auto ">
                            <div className="flex flex-col text-center w-full mb-4 ">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Edit you details here</h1>

                            </div>
                            <div className="lg:w-1/2 md:w-2/3 mx-auto form-section">
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handle_input} />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                            <input type="text" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handle_input} />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="contact" className="leading-7 text-sm text-gray-600">Contact #</label>
                                            <input type="text" id="contact" name="contact" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handle_input} />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                                            <input type="text" id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handle_input} />
                                        </div>
                                    </div>



                                    <div className="p-2 w-full">
                                        <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={submit} type="submit">Submit</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>





                </div>
            </div>
            <div className="faq-div">
                <h4 className="faq-h4-1">Frequently Asked Questions</h4>
                <div className="faq-questions">

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header" >
                            Can I take medicines for free from here
                        </AccordionSummary>
                        <AccordionDetails>
                            Yes, you can get medicines for free that have no price tag.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            Are the medicines cheap here other than the market price.
                        </AccordionSummary>
                        <AccordionDetails>
                            Yes, the medicines here are of low and affordable prices, as compare to market prices.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            How can I get medicines from here.
                        </AccordionSummary>
                        <AccordionDetails>
                            Medicines are showing on the page. Simply click on get button and you will see a form having the seller contact number. You can also contact online by clicking the chat online button.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            Are those medicines avalaible here that are not easily avalaible in market.
                        </AccordionSummary>
                        <AccordionDetails>
                            Yes, those medicines are available here that are not available in the market easily.
                        </AccordionDetails>

                    </Accordion>
                </div>
            </div>

            <div className="help-and-support">
                <h4 className="support-h4-1">Help And Support</h4>
                <div className="emergency-main-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="sb-emergency-main-wrapper ">
                                    <div className="content">
                                        <span><i className="fas fa-headphones-alt"></i></span>
                                        <h4>Emergency <br /> Medical Care 24/7</h4>
                                    </div>
                                    <h5>With our round-the-clock support, we ensure that you have access to the healthcare services and medications you need at any time. Your health is our priority.
                                    </h5>
                                    <p>With access to detailed medicine information 24/7, you can make informed decisions about the products you need, ensuring that you're always prepared.


                                    </p>
                                    <p>We prioritize providing trustworthy details, helping you understand the products better and maintain your health safely and effectively.
                                    </p>
                                    <div className="content">
                                        <span className="rotate"><i className="fas fa-phone-volume"></i></span>
                                        <h4>051-5274123</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
