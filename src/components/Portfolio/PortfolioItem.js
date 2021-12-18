import React from 'react';

const PortfolioItem = (props) => {
    const { project } = props;
    const { name, img, liveSiteLink, liveSiteGitHub, serverSiteGitHub } = project;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="img-fluid card-img-top card-img" alt="..." style={{ height: "300px", objectFit: "cover", objectPosition: " 100% 0%" }} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className='d-flex justify-content-between'>
                        <a className='btn btn-primary' rel='noreferrer' target={"_blank"} href={liveSiteGitHub}>Client GitHub</a>
                        {
                            serverSiteGitHub && <a className='btn btn-primary' rel='noreferrer' target={"_blank"} href={serverSiteGitHub}>Server GitHub</a>
                        }
                        <a className='btn btn-primary' rel='noreferrer' target={"_blank"} href={liveSiteLink}>Live Site</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;