const Contact = () => {
    return(
       <>
       <div className="container-fluid col-lg-12 my-5 d-flex flex-column flex-lg-row justify-content-center align-items-center">
         <div className="col-lg-6">
                    <iframe className="position-relative rounded w-100 h-100 rounded-3"
                        title="mapTitle"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.6485239079343!2d21.140617675089274!3d42.6476106168879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549e8a6d1b0d25%3A0x2224dece7293bb46!2sTahir%20Zajmi%2C%20Prishtina!5e0!3m2!1sen!2s!4v1697161615344!5m2!1sen!2s" 
                        style={{minHeight: "350px", border:"0"}} allowFullScreen="" aria-hidden="false"
                        tabIndex="0"></iframe>
          </div>
          <div className="col-lg-4 mx-5 my-5 aboutUsDescription">
            <div className="d-flex">
            <i className="fas fa-map-marker text-success"></i>
            <p className="px-2">Ndërmarrja Publike Lokale “Gjelbër” SH.A. Rr. Tahir Zajmi, pn, 10000 Prishtinë</p></div>
            <div className="d-flex">
                <i className="fas fa-phone text-success"></i>
                <p className="px-2">0800 40004</p>
            </div>
            
          </div>
        </div>
       </>
    )
}

export default Contact;