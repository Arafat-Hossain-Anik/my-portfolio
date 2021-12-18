import React, { useEffect, useState } from 'react';
import PortfolioItem from './PortfolioItem';
import './Portfolio.css';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://safe-mountain-43737.herokuapp.com/projects')
            .then(response => response.json())
            .then(data => setProjects(data));
        console.log(projects);
    }, []);

    return (
        <div className='container'>
            <h2 className='fw-bold text-center mb-5 pt-5 fs-custom section-header'>Portfolio</h2>
            <div className="card-container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        projects.map(project => <PortfolioItem key={project._id} project={project}>
                        </PortfolioItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;