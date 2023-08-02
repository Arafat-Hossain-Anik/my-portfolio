import React, { useEffect, useRef } from 'react';
import './Header.css';
import headerImg from '../../images/second-circle-s-min.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Typed from 'typed.js';
const githubIcon = <FontAwesomeIcon icon={faGithubSquare} />
const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />

const Header = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Software Developer", 'ML Enthusiast'],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
        })
    })
    return (
        <div>
            {/* top banner */}
            <div className="banner container mt-lg-5 lh-lg">
                <div className="row">
                    <div className="col-12 col-lg-6" data-aos="fade-right" data-aos-easing="linear">
                        {/* <p className='fs-5 text-secondary'>Welcome To My World</p> */}
                        <h1 className='fs-custom fw-bold'>Hello Everyone,This is <br /> <span className='header-color'>Arafat Hossain Anik </span></h1>
                        <h2 className='fw-bold fs-1'> I'm A <span className='header-color type-writter' ref={el}></span></h2>
                        <p className='fs-5 text-secondary' style={{ textAlign: "justify" }}>Welcome to my portfolio. I'm a software engineer specializing in React and truly passionate about the field of Machine Learning, specially in Natural Language Processing. With strong programming concepts, I love crafting innovative solutions. Let's explore technology together!</p>
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
                    <div className="col-12 col-lg-6" data-aos="fade-left" data-aos-easing="linear">
                        <img className='img-fluid mt-4 mt-lg-0' src={headerImg} alt="" />
                    </div>
                </div>
                {/* <hr /> */}
            </div>
        </div >
    );
};

export default Header;