import React from 'react';
import { useParams } from 'react-router-dom';
import { adsData } from './shpalljetData';

// Import the PDF icon image
import pdfIcon from "../../assets/pdf.png"; 

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
    diploma,
    pervojaPunes,
    kushtetKualifikimit,
    njohjaLigjeve,
    aftesiOrganizative,
    shkathtesi,
    shkathtesiKompjuterike,
    gjuhaAngleze,
    detyra1,
    detyra2,
    detyra3,
    detyra4,
    detyra5,
    detyra6,
    detyra7,
    detyra8,
    aplikacioniPlotesuar,
    diplomaNevojshme,
    aplikoni,
    aplikacioniNenBetim,
    aplikacioniPerPunesim,
    aplikimiPDF
  } = ad;

  return (
    <div className="p-lg-5 mt-2">
      <div className="card">
        <div className="card-body1 p-2 aboutUsDescription">
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
            <section className="bg-gray-100 py-8">

              {/* kualifikimet e nevojshme */}
      <div className="">
        <div className="max-w-4xl mx-auto aboutUsDescription">
          <h6 className="text-3xl font-semibold  text-center text-uppercase text-gray-800 mb-8">
            Kualifikimet dhe Përgatitja Profesionale
          </h6>
          <ul className="list-disc list-inside text-gray-700 my-4">
            <li>
              {diploma}
            </li>
            <li>
              {pervojaPunes}
            </li>

            {kushtetKualifikimit && (
              <li>
                {kushtetKualifikimit}
              </li>
            )}

            {njohjaLigjeve && (
              <li>
                {njohjaLigjeve}
              </li>
            )}

            {aftesiOrganizative && (
              <li>
                {aftesiOrganizative}
              </li>
            )}

            {shkathtesi && (
              <li>
                {shkathtesi}
              </li>
            )}

            {shkathtesiKompjuterike && (
              <li>
                {shkathtesiKompjuterike}
              </li>
            )}

            {gjuhaAngleze && ( 
              <li>
                {gjuhaAngleze}
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>

    {/* detyrat dhe pergjegjesite */}
    <section className="bg-gray-100 py-8">
      <div className="">
        <div className="max-w-4xl mx-auto">
          <h6 className="text-3xl font-semibold text-center text-gray-800 mb-8 text-uppercase">
            Detyrat dhe Përgjegjësitë Kryesore
          </h6>
          <ul className="list-disc list-inside text-gray-700 my-4">
            <li>
              {detyra1}
            </li>
            <li>
              {detyra2}
            </li>
            <li>
              {detyra3}
            </li>
            <li>
              {detyra4}
            </li>
            <li>
              {detyra5}
            </li>
            <li>
              {detyra6}
            </li>
            <li>
              {detyra7}
            </li>
            {detyra8 && (
              <li>
                {detyra8}
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>

    {/* informate per proceduren e konkurimit */}

    <section className="bg-gray-100 py-8">
      <div className="">
        <div className="max-w-4xl mx-auto">
          <h6 className="text-3xl font-semibold text-center text-uppercase text-gray-800 mb-8">
            Informata për Procedurën e Konkurimit
          </h6>
          <ul className="list-disc list-inside text-gray-700 my-4">
            <li>
              Aplikantët e interesuar për këtë vend pune duhet të bashkangjesin këto dokumente:
            </li>
            <ul className="ml-8">
              <li>
                {aplikacioniPlotesuar}
              </li>
              <li>
                CV e aplikantit;
              </li>
              <li>
                {diplomaNevojshme}
              </li>
              <li>
                Dëshminë mbi përvojën e punës, referencat si dhe certifikata tjera profesionale;
              </li>
              <li>
                Deklaratën nën Betim;
              </li>
              <li>
                Certifikatën që nuk është nën hetime (jo më e vjetër se 6 muaj);
              </li>
              <li>
                Kopjen e letërnjoftimit.
              </li>
            </ul>
          </ul>
          <p className='py-6'>
            {aplikoni}
          </p>
        </div>
      </div>
    </section>

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

              {aplikimiPDF && ( 
                <p className='mx-2 my-4'> 
                <a className='text-decoration-none' href={aplikimiPDF} download="Konkurs i Jashtëm Koordinator_.pdf">
                  <img src={pdfIcon} alt="PDF Icon" width="20" height="20" />
                    SHIKO KONKURSIN NË PDF
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
