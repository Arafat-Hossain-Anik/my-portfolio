import React from 'react';
import './Skills.css';
import skillImg from '../../images/skill.png';

const Skills = () => {
    return (
        <div id='skill' className='container skill-container'>
            <h2 className='text-center fw-bold pt-3 fs-custom section-header'>My Expertise</h2>
            <div className='row align-items-center'>
                <div className='col-12 col-lg-6'>
                    <img className='img-fluid' src={skillImg} alt="" />
                </div>
                <div className='col-12 col-lg-6'>
                    <div>
                        <h5 className="fw-bold"  >Expertise Technology</h5 >
                        <div className=''>
                            <p className="skill-box">HTML</p>
                            <p className="skill-box">CSS</p>
                            <p className="skill-box">JAVASCRIPT</p>
                            <p className="skill-box">REACT</p>
                            <p className="skill-box">BOOTSTRAP</p>
                            <p className="skill-box">FIREBASE</p>
                            <p className="skill-box">MY SQL</p>
                        </div>
                    </div>
                    <div>
                        <h5 className="fw-bold"  >Comfortable Technology</h5 >
                        <div>
                            <p className="skill-box">MONGODB</p>
                            <p className="skill-box">EXPRESS</p>
                            <p className="skill-box">NODE JS</p>
                            <p className="skill-box">TAILWIND CSS</p>
                            <p className="skill-box">HEROKU</p>
                            <p className="skill-box">NETLIFY</p>
                        </div>
                    </div>
                    <div>
                        <h5 className="fw-bold"  >Familiar Technology</h5 >
                        <div>
                            <p className="skill-box">PYTHON</p>
                            <p className="skill-box">C#</p>
                            <p className="skill-box">TYPESCRIPT</p>
                            <p className="skill-box">MATERIAL UI</p>
                        </div>
                    </div>
                    <div>
                        <h5 className="fw-bold"  >Expertise Tools</h5 >
                        <div>
                            <p className="skill-box">GITHUB</p>
                            <p className="skill-box">VS CODE</p>
                            <p className="skill-box">ADOBE PHOTOSHOP</p>
                            <p className="skill-box">ADOBE ILLUSTRATOR</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <hr /> */}
        </div>
    );
};

export default Skills;