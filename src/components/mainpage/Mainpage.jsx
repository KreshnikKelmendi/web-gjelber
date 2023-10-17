import nature from "../../assets/GJELBER BRAND-46.png";
import "../mainpage/mainpage.css";

const Mainpage = () => {
    return(
    <div className="position-relative ">
        <div className="col-12">
            <img className="img-fluid col-12 mainPhoto" style={{objectFit: "cover"}} src={nature} alt="" />
         <section className="test">
                <p className="mx-3 mx-lg-5 col-lg-8 text-uppercase text-white display-5">"Prishtina më gjelbër, <span className="firstSpan">jeta më e bukur"</span></p>
                </section>
        </div>
    </div>
    )
}

export default Mainpage;