import React from 'react';
import './AboutUs.css';
import myImg from '../../images/another.png'

const AboutUs = () => {
    return (
        <div id='about' className='container aboutus-container'>
            <h2 className='text-center fw-bold'>-About Us-</h2>
            <div className='row align-items-center'>
                <div className='col-12 col-lg-6'>
                    <img className='img-fluid' src={myImg} alt="" />
                </div>
                <div className='col-12 col-lg-6'>
                    <div>
                        <p>Hi, I am a junior full stack developer with 7 projects experience. Currently, I am studying Computer Science and Engineering in Patuakhali Science and Technology University. I am very much interested to learning technology in IT field. I have perticipated in few programming competiton.Now, I am also trying to do better in this field. I have solved 100+ problems in URI online judge and  codeforces. Still, learning new algorithm and problem solving technique.</p>
                        <p>My future target is to be a senior full stack developer by learning new technology like php,laravel,vue js.</p>
                    </div>
                    <h3>Personal Info</h3>
                    <div className='row'>
                        <div className='col'>
                            <p><span className='fw-bold'>Name: </span>Arafat Hossain Anik</p>
                            <p><span className='fw-bold'>DOB: </span>17-04-1999</p>
                            <p><span className='fw-bold'>Nationality: </span>Bangladesh</p>

                        </div>
                        <div className='col'>
                            <p><span className='fw-bold'>Address: </span>Patuakhali, Bangladesh</p>
                            <p><span className='fw-bold'>Phone: </span>+8801757176953</p>
                            <p><span className='fw-bold'>E-mail: </span>arafatskd@gmail.com</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <a className='resume-btn rounded' href='/resume/my-resume.pdf' download="MERN STACK resume of Ah_Anik" target='_blank'>Download Resume</a>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default AboutUs;