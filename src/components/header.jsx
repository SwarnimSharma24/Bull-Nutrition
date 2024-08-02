import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import ShopComponent from "./shopcomponents";
import { Link } from 'react-router-dom';



const HeaderFile = () => {

   return(
    <header className="header">
            <div className="header-container">
                <h3>
                    <div>
                    <FontAwesomeIcon icon={faDumbbell} size="3x" className="hover:bg-black-200 tewhite" />
                    </div>
                    <b>
                        BULL-NUTRITION
                    </b>
                </h3>

                <nav className="nav-links">
                    <ul>
                    <li className="c"> <Link to="/"><b>HOME</b> </Link> </li>
                        <li className="b">  <Link to="/shop"> <b>SHOP</b> </Link>   </li>
                        <li className="d"> <Link to="/labreports"> <b>LAB REPORTS</b> </Link> </li>
                        <li className="e"> <Link to="/stack"> <b>STACK</b> </Link> </li>
                        <li className="f"> <Link to="/trackorder"> <b>TRACK ORDER</b> </Link> </li>
                    </ul>
                </nav>

                <div className="icons">
                <div className="whishlist">
                    <FontAwesomeIcon icon={faHeart} size="2x" className="hover:bg-black-200 text-white" />
                </div>
                </div>

                <div className="icons">
                <div className="search-icon">
                    <FontAwesomeIcon icon={faSearch} size="2x" className="hover:bg-black-200 text-white" />
                </div>
                </div>

                <div className="icons">
                <div className="user-profile">
                    <FontAwesomeIcon icon={faUser} size="2x" className="hover:bg-black-200 text-white" />
                </div>
                </div>

                <div className="icons">
                <div className="user-profile">
                    <FontAwesomeIcon icon={faCartPlus} size="2x" className="hover:bg-black-200 text-white" />
                </div>
                </div>

            </div>
        </header>
   )
}
export default HeaderFile 