import React from 'react';
import './AboutUs.css';
import myImg from '../../images/another-s.png'

const AboutUs = () => {
    return (
        <div className='aboutus-container'>
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
                        <div className='text-secondary'>
                            <p>Hi, I am a junior full stack developer with 7 projects experience. Currently, I am studying Computer Science and Engineering in Patuakhali Science and Technology University. I am very much interested to learning technology in IT field. I have perticipated in few programming competiton.Now, I am also trying to do better in this field. I have solved 100+ problems in URI online judge and  codeforces. Still, learning new algorithm and problem solving technique.</p>
                            <p>My future target is to be a senior full stack developer by learning new technology like php,laravel,vue js.</p>
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
                                <p><span className='fw-bold'>E-mail: </span>arafatskd@gmail.com</p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <a className='resume-btn rounded fs-6' href='/resume/Ah_Anik_MERN_STACK_RESUME.pdf' download="Ah_Anik_MERN_STACK_RESUME" target='_blank'>Download Resume</a>
                        </div>
                    </div>
                </div>
                {/* <hr /> */}
            </div>
        </div>
    );
};

export default AboutUs;