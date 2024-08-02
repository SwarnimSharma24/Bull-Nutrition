import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Footer2 = () => {


    return(
        <div>
            <p className="copyright">Copyright © 2023 Sharmaswarnim24.com. All rights reserved.</p>
            <div className="footer2-icons">
            <FaInstagram size="3x" className="text-white" />
            <FaTelegram size="3x" className="text-white" />
            <FaWhatsapp size="3x" className="text-white" />
    
            </div>
        </div>
    )
}
export default Footer2