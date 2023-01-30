import React from 'react';
import './Header.css';
import headerImg from '../../images/second-circle-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const githubIcon = <FontAwesomeIcon icon={faGithubSquare} />
const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />

const Header = () => {
    return (
        <div>
            {/* top banner */}
            <div className="banner container mt-lg-5 lh-lg">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        {/* <p className='fs-5 text-secondary'>Welcome To My World</p> */}
                        <h1 className='fs-custom fw-bold'>Hi,This is <br /> <span className='header-color'>Arafat Hossain Anik </span></h1>
                        <h1 className='fs-custom fw-bold'> <span className='header-color'> Front-End </span> Developer</h1>
                        <p className='fs-5 text-secondary' style={{ textAlign: "justify" }}>Welcome to my portfolio website, showcasing my diverse skill set as a front-end developer. I specialize in React Js and have a deep understanding of programming concepts, allowing me to create innovative solutions and improve existing ones.</p>
                        {/* <a className='resume-btn rounded' href='/resume/my-resume.pdf' download="MERN STACK resume of Ah_Anik">Download Resume</a> */}
                        {/* find me at */}
                        <div>
                            <h4 className='mt-4'>Find Me</h4>
                            <div className='fs-3 mt-4 d-flex'>
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
                    <div className="col-12 col-lg-6">
                        <img className='img-fluid mt-4 mt-lg-0' src={headerImg} alt="" />
                    </div>
                </div>
                {/* <hr /> */}
            </div>
        </div >
    );
};

export default Header;