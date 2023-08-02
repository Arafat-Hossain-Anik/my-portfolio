import React, { useEffect, useState } from 'react';
import PortfolioItem from './PortfolioItem';
import './Portfolio.css';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://ah-anik-portfolio.onrender.com/projects')
            .then(response => response.json())
            .then(data => setProjects(data));
        //console.log(projects);
    }, []);

    return (
        <div className='portfolio-container pb-5' data-aos="fade-up">
            <div className='container' id='portfolio'>
                <h2 className='fw-bold text-center mb-5 pt-3 fs-custom section-header'>Projects Showcase</h2>
                <div className="card-container">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        {
                            projects.map(project => <PortfolioItem key={project._id} project={project}>
                            </PortfolioItem>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;