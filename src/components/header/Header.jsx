// import { useState } from "react";
// import "./header.css";
// import logo from "../../assets/logoGjelber.png";
// import { Link, NavLink } from "react-router-dom";


// const Header = () => {
//     const [menuVisible, setMenuVisible] = useState(false);

//     const toggleMenu = () => {
//       setMenuVisible(!menuVisible);
//     };

//     return(
//         <header>
//             <div className="headercontent">
//                 <div className="mx-2 logo">
//                    <Link to="/"><img className="col-8 col-lg-2" src={logo} alt="logoGjelber" /></Link>
//                 </div>
//             <nav>
//             <ul className={`nav-links ${menuVisible ? 'visible' : ''}`}>
//             <li><NavLink className="text-decoration-none menuLinks" to="/">Home</NavLink></li>
//             <li><NavLink className="text-decoration-none menuLinks" to="/about">about</NavLink></li>
//             <li>Contact</li>
//           </ul>
//             <div
//                 className={`hamburger-menu ${menuVisible ? 'active' : ''}`}
//                 onClick={toggleMenu}
//           >
//             <div className="line1"><span class="material-symbols-outlined">menu</span></div>
            
//           </div>
          
//             </nav>
//             </div>
//         </header>
//     );
// }

// export default Header;
import { useState } from "react";
import logo from "../../assets/logoGjelber.png";
import "./header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    const closeMenu = () => {
        setClicked(false);
      };

    return(
      <nav>
        <Link to="/" className="logoMax">
            <img className="img-fluid" alt="" src={logo} />
         </Link>
         <div>
            <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
                <li><NavLink to="/" className="" onClick={closeMenu}>BALLINA</NavLink></li>
                <li><NavLink to="/about" className="" onClick={closeMenu}>RRETH NESH</NavLink></li>
                {/* <li><NavLink to="/activity" onClick={closeMenu}>AKTIVITETET</NavLink></li> */}
                <li><NavLink to="/ads" onClick={closeMenu}>SHPALLJET</NavLink></li>
                <li><NavLink to="/contact" onClick={closeMenu}>KONTAKTI</NavLink></li>
            </ul>
         </div>

         <div id="mobile" onClick={handleClick}>
            <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"} ></i>
         </div>
      </nav>
    );
}

export default Header;