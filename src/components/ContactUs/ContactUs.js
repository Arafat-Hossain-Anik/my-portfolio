import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import msgImg from '../../images/message.jpg';

const githubIcon = <FontAwesomeIcon icon={faGithubSquare} />
const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />

const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />

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
                alert('Opsss! Technical Difficulty.')
            });
        e.target.reset();
    };
    return (
        <div className='contactus-container aboutus-container pb-5'>
            <div className='container'>
                <h2 className='fw-bold text-center mb-5 pt-5 fs-custom section-header'>Get In Touch</h2>
                <div className='row justify-content-center'>
                    <div className="col-12 col-lg-5 ml-lg-5 contact-part rounded">
                        <div className='text-center'>
                            <img className='img-fluid' src={msgImg} alt="" style={{ height: '250px' }} />
                        </div>
                        <div className=''>
                            <h4>Hi,There</h4>
                            <h6 className='text-secondary fw-bold'>Thank You For Being Interested In Me</h6>
                            <p className='text-secondary'>Send me direct message for any query and connect with me through facebook, linkedIn and have a look on my work through github. <br /> <span className='fw-bold'>Have A Great Day.</span></p>
                            <h6 className='text-secondary'><span className='fw-bold'>Phone:</span> +8801757176953</h6>
                            <h6 className='text-secondary'><span className='fw-bold'>E-mail:</span> arafatskd@gmail.com</h6>
                        </div>
                        <div className='pb-3'>
                            <h5 className='mt-2 text-secondary fw-bold'>Find Me</h5>
                            <div className='fs-4 mt-2 d-flex'>
                                <div className='icon-container'>
                                    <a className='socialIcon rounded' href="https://github.com/Arafat-Hossain-Anik" rel='noreferrer' target={"_blank"}> {githubIcon}</a>
                                </div>
                                <div className='icon-container'>
                                    <a className='socialIcon rounded ms-4' href="https://www.linkedin.com/in/ah-anik/" rel='noreferrer' target={"_blank"}> {linkedInIcon}</a>
                                </div>
                                <div className='icon-container'>
                                    <a className='socialIcon rounded ms-4' href="https://www.facebook.com/arafatskd/" rel='noreferrer' target={"_blank"}> {facebookIcon}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 ms-lg-5 contact-part rounded p-3">
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
                            <div className="">
                                <div className=" form-floating mb-3">
                                    <input type="email" className="form-control" placeholder="name@example.com" name='email' required />
                                    <label htmlFor="floatingInput">Your Email</label>
                                </div>
                                <div className=" form-floating mb-3">
                                    <input type="text" className="form-control" placeholder="Subject" name='subject' />
                                    <label htmlFor="floatingInput">Subject</label>
                                </div>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" placeholder="Email-Body" id="floatingTextarea2" style={{ height: "200px" }} name='body' required></textarea>
                                <label htmlFor="floatingTextarea2">Your Message</label>
                            </div>
                            {/* <input type="submit" className="msg-btn rounded" value={arrowIcon} /> */}
                            <div>
                                <button type="submit" className="msg-btn rounded">
                                    <div className='d-flex'>
                                        <div>Send Message</div> <div className='arrowIcon'>{arrowIcon}</div>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </div>
    );
};

export default ContactUs;