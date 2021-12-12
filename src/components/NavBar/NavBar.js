import React from 'react';

const NavBar = () => {
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
                            <a className="nav-link" href="#about">About Us</a>
                            <a className='nav-link' href='/resume/my-resume.pdf' download="MERN STACK resume of Ah_Anik" target='_blank'>Resume</a>
                            <a className="nav-link" href="#skill">Skills</a>
                            <a className="nav-link" href="/portfolio">Portfolio</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;