import React from 'react';
import './Skills.css';
import skillImg from '../../images/skill.png';

const Skills = () => {
    return (
        <div id='skill' className='container skill-container' data-aos="fade-up">
            <h2 className='text-center fw-bold pt-3 fs-custom section-header'>Technical Strength</h2>
            <div className='row align-items-center'>
                <div className='col-12 col-lg-6'>
                    <img className='img-fluid' src={skillImg} alt="" />
                </div>
                <div className='col-12 col-lg-6'>
                    <div>
                        <h5 className="fw-bold"  >Languages</h5 >
                        <div className=''>
                            <p className="skill-box">C</p>
                            <p className="skill-box">C++</p>
                            <p className="skill-box">JavaScript</p>
                            <p className="skill-box">Python</p>
                        </div>
                    </div>
                    <div>
                        <h5 className="fw-bold"  >Web Development</h5 >
                        <div>
                            <p className="skill-box">React</p>
                            <p className="skill-box">Node js</p>
                            <p className="skill-box">Firebase Auth</p>
                            <p className="skill-box">Rest Api</p>
                        </div>
                    </div>
                    <div>
                        <h5 className="fw-bold"  >Frameworks</h5 >
                        <div>
                            <p className="skill-box">Express</p>
                            <p className="skill-box">Django</p>
                            <p className="skill-box">Bootstrap</p>
                            <p className="skill-box">Tailwind CSS</p>
                        </div>
                    </div>
                    <div>
                        <h5 className="fw-bold"  >Database</h5 >
                        <div>
                            <p className="skill-box">MongoDB</p>
                            <p className="skill-box">MySQL</p>
                        </div>
                    </div>
                    <div>
                        <h5 className="fw-bold"  >ML Domain</h5 >
                        <div>
                            <p className="skill-box">Classification</p>
                            <p className="skill-box">Word Embedding</p>
                            <p className="skill-box">Feature Selection</p>
                            <p className="skill-box">RNN</p>
                            <p className="skill-box">LSTM</p>
                        </div>
                    </div>
                    <div>
                        <h5 className="fw-bold">Tools</h5 >
                        <div>
                            <p className="skill-box">Github</p>
                            <p className="skill-box">Vs Code</p>
                            <p className="skill-box">Adobe Photoshop</p>
                            <p className="skill-box">Adove Illustrator</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <hr /> */}
        </div>
    );
};

export default Skills;