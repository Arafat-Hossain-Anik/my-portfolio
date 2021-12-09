import React from 'react';
import './Header.css';
import headerImg from '../../images/second-circle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const githubIcon = <FontAwesomeIcon icon={faGithubSquare} />
const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid p-2">
                    <a className="navbar-brand fw-bold fs-4" href="/home">Anik's World</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav fs-5">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            <a className="nav-link" href="/home">Features</a>
                            <a className="nav-link" href="home">Pricing</a>
                        </div>
                    </div>
                </div>
            </nav>
            {/* top banner */}
            <div className="banner container mt-lg-5 lh-lg">
                <div className="row pt-lg-5">
                    <div className="col-12 col-lg-6">
                        <p className='fs-5 text-secondary'>Welcome To My World</p>
                        <h1 className='fs-custom fw-bold'>Hi,This is <br /> <span className='header-color'>Arafat Hossain Anik </span></h1>
                        <h1 className='fs-custom fw-bold'> <span className='header-color'> MERN Stack </span> Developer</h1>
                        <p className='fs-5 text-secondary'>I build both front-end and back-end by using react,express,node and mongodb. I am also familiar with python and My Sql. I have done 5 front-end projects and 2 back-end projects which are fully responsive.</p>
                        {/* find me at */}
                        <div>
                            <h4 className='mt-4'>Find Me</h4>
                            <div className='fs-3 mt-4 d-flex'>
                                <div className='icon-container'>
                                    <a className='socialIcon rounded text-dark' href="https://github.com/Arafat-Hossain-Anik" rel='noreferrer' target={"_blank"}> {githubIcon}</a>
                                </div>
                                <div className='icon-container'>
                                    <a className='socialIcon rounded ms-4 text-dark' href="https://www.linkedin.com/in/ah-anik/" rel='noreferrer' target={"_blank"}> {linkedInIcon}</a>
                                </div>
                                <div className='icon-container'>
                                    <a className='socialIcon rounded ms-4 text-dark' href="https://www.facebook.com/arafatskd/" rel='noreferrer' target={"_blank"}> {facebookIcon}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img className='img-fluid mt-4 mt-lg-0' src={headerImg} alt="" />
                    </div>
                </div>
                <hr />
            </div>
        </div >
    );
};

export default Header;