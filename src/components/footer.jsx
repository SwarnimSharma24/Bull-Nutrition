import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FooterFile = () => {
    return (
        <footer className="footer">
            <div className="grid-container">
                <div className="grid-row">
                    <div className="grid-col-3">
                        <h3><b>PRODUCTS</b></h3>
                        <ul>
                            <li><a href="#!">PROTIENS</a></li>
                            <li><a href="#!">WELLNESS</a></li>
                            <li><a href="#!">AMINOACIDS</a></li>
                            <li><a href="#!">PRE WORKOUT</a></li>
                            <li><a href="#!">DAILY SUPPORT</a></li>
                            <li><a href="#!">BUNDLE STACK</a></li>
                        </ul>
                    </div>
                    <div className="grid-col-3">
                        <h3><b>EXPLORE</b></h3>
                        <ul>
                            <li><a href="#!">NEWS</a></li>
                            <li><a href="#!">BLOGS</a></li>
                            <li><a href="#!">ABOUT</a></li>
                            <li><a href="#!">OUR ATHLETES</a></li>
                            <li><a href="#!">OUR STORE</a></li>
                        </ul>
                    </div>
                    <div className="grid-col-3">
                        <h3><b>INFORMATION</b></h3>
                        <ul>
                            <li><a href="#!">CONTACT US</a></li>
                            <li><a href="#!">TERMS OF USE </a></li>
                            <li><a href="#!">PIVACY POLICY</a></li>
                            <li><a href="#!">SHIPPING AND DELIVERY POLICY</a></li>
                            <li><a href="#!">RETURN AND REFUND</a></li>
                        </ul>
                    </div>
                    
                    <div className="grid-col-4">
                        <h3><b>
                            SIGN UP FOR NEWS LETTER
                            </b>
                            </h3>
                           <FontAwesomeIcon  icon={faArrowRight} size="1x" className="hover:bg-black-200 tewhite" />
                           <input type="text" placeholder="e-mail address"></input>
                           <div className="arrow-icon">
                           </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default FooterFile;