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
                <a className='' rel='noreferrer' target={"_blank"} href={liveSiteLink}>
                    <img src={img} className="img-fluid card-img-top card-img" loading='lazy' alt="..." style={{ height: "300px", objectFit: "cover", objectPosition: " 100% 0%" }} />
                </a>

                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className='git-link-container  text-secondary'>
                        <p className=''>Have a look On
                            {/* <div className='git-link-div'> */}
                            <div className="git-link">
                                <a className='rounded card-link' rel='noreferrer' target={"_blank"} href={liveSiteGitHub}><span className='link-icon'> Client-Code {githubIcon}</span></a>
                            </div>
                            {
                                serverSiteGitHub && <div className="git-link"> <a className='rounded card-link' rel='noreferrer' target={"_blank"} href={serverSiteGitHub}> <span className='link-icon'>Server-Code {githubIcon}</span></a>
                                </div>
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;