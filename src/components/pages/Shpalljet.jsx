import React from 'react';
import { Link } from 'react-router-dom';
import { adsData } from './shpalljetData';

const Shpalljet = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-center align-items-center">
        {adsData?.map((ad) => (
          <div key={ad.id} className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="konkursText card-img-top adsPhoto">
                KONKURS
              </div>
              <div className="card-body">
                <p className="card-title fw-bold aboutUsDescription text-uppercase">{ad.title}</p>
                <p className="card-text aboutUsDescription">{ad.description}</p>
                <p className="card-text">
                  <small className="datePublic text-success">Data e publikimit: {ad.publicationDate}</small>
                </p>
                <Link to={`/ads/${ad.id}`} onClick={() => window.scrollTo({
                                  top: 0,
                                  left: 0,
                                  behavior: "smooth",
                          })}><button className="btn btn-outline-success aboutUsDescription">...më shumë</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shpalljet;
