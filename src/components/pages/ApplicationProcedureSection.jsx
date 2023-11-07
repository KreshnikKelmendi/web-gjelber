import React from 'react';

const ApplicationProcedureSection = () => {
  return (
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
                Aplikacionin e plotësuar;
              </li>
              <li>
                CV e aplikantit;
              </li>
              <li>
                Diplomën universitare nga Fakulteti Ekonomik;
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
              Aplikantët e interesuar kërkesën për aplikim me dokumentacion të rregullt, duhet ta paraqesin në arkivin e NPL ”Gjelbër’’Sh.A., Rr. Tahir Zajmi në Prishtinë objekti i Zjarrëfikësve, çdo ditë pune prej orës 07:00 – 15:00, në afat prej 30 ditësh nga data e publikimit të konkursit në mjetet e informimit. Data përfundimtare për dorëzimin e aplikacioneve është 24.11.2023. Aplikacioni mund të merret në zyrat e ndërmarrjes.
              </p>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcedureSection;
