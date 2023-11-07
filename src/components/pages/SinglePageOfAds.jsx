import React from 'react';
import { useParams } from 'react-router-dom';
import { adsData } from './shpalljetData';
import QualificationsSection from './QualificationSection';
import ResponsibilitiesSection from './ResponsibilitiesSection';
import ApplicationProcedureSection from './ApplicationProcedureSection';

// Import the PDF icon image
import pdfIcon from "../../assets/pdf.png"; // Replace with the actual path to your PDF icon image

const SinglePageOfAds = () => {
  const { adsID } = useParams();
  const ad = adsData.find((ad) => ad.id == adsID);

  if (!ad) {
    return <div className='kontaktText justify-content-center align-items-center text-center'>SHPALLJA NUK U GJET</div>;
  }

  const {
    title,
    publicationDate,
    headingTop,
    titulliPozites,
    kontrata,
    orari,
    paga,
    vendi,
    aplikacioniNenBetim,
    aplikacioniPerPunesim
  } = ad;

  return (
    <div className="p-lg-5 mt-2">
      <div className="card">
        <div className="card-body aboutUsDescription">
          <h6 className="card-title fw-bold text-uppercase mb-3">konkurs për pozitën : <span className='text-decoration-underline p-2'>{title}</span></h6>
          <p className="card-text">
            <small className="text-muted">Data e publikimit: {publicationDate}</small>
          </p>
          <div className="mt-4">
            <p className="card-text">{headingTop}</p>
            <ul>
              <li>
                <strong><b>Titulli i Pozitës:</b></strong> {titulliPozites}
              </li>
              <li>
                <strong><b>Kontrata:</b></strong> {kontrata}
              </li>
              <li>
                <strong><b>Orari:</b></strong> {orari}
              </li>
              <li>
                <strong><b>Paga:</b></strong> {paga}
              </li>
              <li>
                <strong><b>Vendi:</b></strong> {vendi}
              </li>
            </ul>
            <QualificationsSection />
            <ResponsibilitiesSection />
            <ApplicationProcedureSection />

            {aplikacioniNenBetim && (
              <p className='mx-2 my-4'> 
                <a className='text-decoration-none' href={aplikacioniNenBetim} download="ApplicationForm.pdf">
                  <img src={pdfIcon} alt="PDF Icon" width="20" height="20" />
                    SHKARKO DEKLARATËN NËN BETIM
                </a>
              </p>
            )}

            {aplikacioniPerPunesim && (
                <p className='mx-2'> 
                  <a className='text-decoration-none' href={aplikacioniPerPunesim} download="Application.pdf">
                    <img src={pdfIcon} alt="PDF Icon" width="20" height="20" />
                      SHKARKO APLIKACIONIN PËR PUNËSIM
                  </a>
                </p>
              )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePageOfAds;
