import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const githubIcon = <FontAwesomeIcon icon={faGithubSquare} />
const globeIcon = <FontAwesomeIcon icon={faGlobe} />

const PortfolioItem = (props) => {
    const { project } = props;
    const { name, img, liveSiteLink, liveSiteGitHub, serverSiteGitHub } = project;
    return (
        <div className="col">
            <div className="card h-100">
                <a className='rounded fs-5 card-link' rel='noreferrer' target={"_blank"} href={liveSiteLink}>
                    <img src={img} className="img-fluid card-img-top card-img" alt="..." style={{ height: "300px", objectFit: "cover", objectPosition: " 100% 0%" }} />
                </a>

                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className='d-flex justify-content-center'>
                        <a className='rounded fs-6 card-link' rel='noreferrer' target={"_blank"} href={liveSiteGitHub}>Have a look on client site code<span className='fs-5'>{githubIcon}</span></a>
                        {
                            serverSiteGitHub && <a className='rounded fs-6 card-link' rel='noreferrer' target={"_blank"} href={serverSiteGitHub}>Have a look on server site code <span className='fs-5'>{githubIcon}</span></a>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;