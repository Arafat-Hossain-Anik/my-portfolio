import React from 'react';
import './AboutUs.css';
import myImg from '../../images/another-s-min.png'

const AboutUs = () => {
    return (
        <div className='aboutus-container' data-aos="fade-up">
            <div id='about' className='container pb-3'>
                <h2 className='text-center fw-bold pt-3 mb-5 fs-custom section-header'>A Little Bit About Me</h2>
                <div className='row align-items-center fs-5'>
                    <div className='col-12 col-lg-6'>
                        <img className='img-fluid' src={myImg} alt="" />
                        {/* <div className='fw-bold text-center'>
                            <h5>Arafat Hossain Anik</h5>
                            <h6>Full Stack Web Developer</h6>
                        </div> */}
                    </div>
                    <div className='col-12 col-lg-6'>
                        <div className='text-secondary' style={{ textAlign: "justify" }}>
                            <p>Currently, I am studying Computer Science and Engineering in Patuakhali Science and Technology University. My enthusiasm for learning about technology in the IT field is boundless. I have actively participated in several programming competitions and continuously strive to improve my skills in this domain I have solved 300+ problems in Codeforces and BeeCrowd. Still, learning new algorithm and problem solving techniques.</p>
                            <p>My future goal is to contribute significantly to the IT field, aiming to bring values through my expertise and technical skills. Additionally, I want to make a positive impact on society by continuously learning and adapting to new technologies and advancements in the field.</p>
                        </div>
                        <h3 className='text-center fw-bold mt-3 mb-3'>Personal Info</h3>
                        <div className='row'>
                            <div className='col-12 col-sm-6'>
                                <p><span className='fw-bold'>Name: </span>Arafat Hossain Anik</p>
                                <p><span className='fw-bold'>DOB: </span>17-04-1999</p>
                                <p><span className='fw-bold'>Nationality: </span>Bangladesh</p>

                            </div>
                            <div className='col-12 col-sm-6'>
                                <p><span className='fw-bold'>Address: </span>Patuakhali, Bangladesh</p>
                                <p><span className='fw-bold'>Phone: </span>+8801757176953</p>
                                <p><span className='fw-bold'>E-mail: </span> <a href="mailto:arafat15@cse.pstu.ac.bd" style={{ color: "black" }}>arafat15@cse.pstu.ac.bd</a></p>
                            </div>
                        </div>
                        <div className='mt-4 pb-4'>
                            <a className='resume-btn rounded fs-6' href='/resume/AH_Anik_Software_Engineer_CV.pdf' download="AH_Anik_Software_Engineer_CV.pdf" target='_blank'>Download Resume</a>
                        </div>
                    </div>
                </div>
                {/* <hr /> */}
            </div>
        </div>
    );
};

export default AboutUs;