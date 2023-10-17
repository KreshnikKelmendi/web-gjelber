import React, { useEffect, useRef} from "react";
import "./about.css";
import photo1 from "../../assets/ilustrimi1.png";
import photo2 from "../../assets/ilustrimi2.png";
import photo3 from "../../assets/ilustrimi3.png";
import photo4 from "../../assets/ilustrimi4.png";

const About = () => {
    const elementsRef = useRef([]);

    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, options);
  
      elementsRef.current.forEach((element) => {
        observer.observe(element);
      });
  
      return () => {
        observer.disconnect();
      };
    }, []);
  

    return(
       <>
            <div className="container my-5 ">
            <h3 className="text-uppercase">Rreth Nesh</h3>
                <div className="row gy-5 justify-content-center align-items-center">
                    <div className="col-lg-6" ref={(el) => (elementsRef.current[0] = el)}>
                        <p className="aboutUsDescription">Mirë se vini në shtëpinë dixhitale të Gjelbër Sh.A., një ndërmarrje publike lokale, 
                            testament i përkushtimit të vazhdueshëm të Komunës së Prishtinës për kujdesin 
                            ndaj mjedisit dhe mirëqenien e komunitetit. <br /> <br />E krijuar më 29 maj 1964, Gjelbër 
                            Sh.A. ka qenë dhe është pjesë integrale e peizazhit të Prishtinës. Ajo me 
                            përkushtim ka krijuar dhe mirëmbajtur të gjitha hapësirat e gjelbra  që 
                            përcaktojnë identitetin urban të qytetit. Udhëtimi ynë përfshin dekada shërbimi, 
                            gjatë të cilave ne kemi evoluar në një ndërmarrje komunale me një portofol të 
                            larmishëm përgjegjësish.</p>
                    </div>
                    <div className="col-lg-6 ">
                        <img className="col-12 testH rounded-2" src={photo1} alt="" />
                    </div>

                <div className="col-lg-6 py-lg-3 ">
                    <img className="col-12 testH rounded-2" src={photo2} alt="" />
                </div>
                <div className="col-lg-6 fading-text" ref={(el) => (elementsRef.current[1] = el)}>
                    <p className="aboutUsDescription px-lg-3">
                    Në qendër të veprimtarisë tonë qëndron misioni kryesor i kultivimit të gjelbërimit
                    në të gjithë qytetin, duke i shndërruar hapësirat publike në oaza me bukuri 
                    natyrore. Megjithatë, angazhimi ynë shtrihet përtej hortikulturës. Gjelbër Sh.A. 
                    menaxhon me krenari një spektër shërbimesh komunale që prekin aspekte të 
                    ndryshme të jetës së komunitetit dhe menaxhimit të mjedisit. Përgjegjësitë tona 
                    përveç mirëmbajtjes së zonave urbane në kryeqytet, përfshijnë mirëmbajtjen e 
                    Parkut Regjional të Gërmisë, Parkut të Qytetit, Parkun e Arbërisë, Parkun e 
                    Taukbahçes, dhe parqet tjera të lagjeve të kryeqytetit.
                    </p>
                </div>

                <div className="col-lg-6 fading-text" ref={(el) => (elementsRef.current[2] = el)}>
                    <p className="aboutUsDescription" >
                    Në përpjekjen tonë për një qytet të gjelbër, ndërmarrja bën mbikëqyrjen e 
                    Qendrës së Kompostimit në fshatin Butoc, funksionimi i kësaj qendre është 
                    thelbësor për menaxhimin e qëndrueshëm të mbetjeve dhe riciklimin organik. 
                    Për më tepër, ne menaxhojmë edhe deponinë e dheut në Zllatarë me fokus në 
                    praktikat e përgjegjshme të depozitimit të dheut. 
                    <br /> <br/>Në mirënjohje të historisë së qytetit dhe banorëve të tij, Gjelbër Sh.A. merr 
                    përsipër përgjegjësinë e menaxhimit të varrezave komunale me kujdes dhe 
                    nderim. Punëtorët e ndërmarrjes sonë me shumë përgjegjësi bëjnë organizimin 
                    dhe rregullimin e Tregut të Automjeteve. 
                    </p>
                </div>
                <div className="col-lg-6 ">
                    <img className="col-12 testH rounded-2" src={photo3} alt="" />
                </div>

                <div className="col-lg-6 py-lg-3">
                    <img className="col-12 testH rounded-2" src={photo4} alt="" />
                </div>
                <div className="col-lg-6 fading-text" ref={(el) => (elementsRef.current[3] = el)}>
                    <p className="aboutUsDescription px-lg-3">
                    Angazhimi ynë për të mbështetur 
                    fermerët vendas është i mishëruar në funksionimin e Tregut Mobil, duke ofruar 
                    një platformë për shkëmbimin e produkteve të freskëta dhe duke nxitur një lidhje
                    midis komuniteteve urbane dhe rurale.
                    Për më tepër, Gjelbër Sh.A. merr përsipër përgjegjësinë e ndjeshme të 
                    funksionalizimit të qendrës së qenve endacak, duke adresuar me kujdes dhe 
                    përkushtim nevojat e banorëve tanë me katër këmbë. 
                    <br/><br />Ndërsa lundroni nëpër faqen tonë të internetit, ju ftojmë të dëshmoni thellësinë e
                    angazhimit tonë për të krijuar një mjedis urban të qëndrueshëm.
                    </p>
                </div>

                </div>
            </div>
       </>
    );
}

export default About;