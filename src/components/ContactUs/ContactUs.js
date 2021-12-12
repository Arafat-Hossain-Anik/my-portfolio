import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9qzqlla', 'template_gzfxvml', form.current,
            'user_aw6B6cr6wOalJ3A3QGK55')
            .then((result) => {
                console.log(result.text);
                alert('Message Sent Successfully');
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div className='contactus-container aboutus-container pb-5'>
            <div className='container'>
                <h2 className='fw-bold text-center mb-5'>-Contact Me-</h2>
                <div className='row'>
                    <div className="col-12 col-lg-6">

                    </div>
                    <div className="col-12 col-lg-6 contact-part rounded p-3">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='d-flex flex-wrap'>
                                <div className="col-12 col-lg-6 form-floating mb-3">
                                    <input type="text" className="form-control ps-1" placeholder="Name" name='name' />
                                    <label >Your Name</label>
                                </div>
                                <div className="ps-lg-2 col-12 col-lg-6 form-floating mb-3 ">
                                    <input type="text" className="form-control" placeholder="Name" name='phone' />
                                    <label htmlFor="floatingInput" >Phone</label>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap">
                                <div className="col-12 col-lg-6 form-floating mb-3">
                                    <input type="text" className="form-control" placeholder="Subject" name='subject' />
                                    <label htmlFor="floatingInput">Subject</label>
                                </div>
                                <div className="ps-lg-2 col-12 col-lg-6 form-floating mb-3">
                                    <input type="email" className="form-control" placeholder="name@example.com" name='email' required />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" placeholder="Email-Body" id="floatingTextarea2" style={{ height: "200px" }} name='body' required></textarea>
                                <label htmlFor="floatingTextarea2">Body</label>
                            </div>
                            <input type="submit" className="resume-btn rounded" value='Send Message' />
                        </form>
                    </div>
                </div >
            </div >
        </div>
    );
};

export default ContactUs;