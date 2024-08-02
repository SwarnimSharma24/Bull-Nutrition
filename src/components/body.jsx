import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState} from "react";
import footerImage from "../images/BottomBanner.png";

const BodyFile = () => {
    const creatineImage = "https://thedrchoice.com/cdn/shop/files/Creatine_1920x650_Banner_1400x.jpg?v=1689597217";
    const carnagePreWorkout = "https://bigmusclesnutrition.com/cdn/shop/files/Karnage-Desktop_1524x.jpg?v=1708343358";
    const trustSeal = "https://bigmusclesnutrition.com/cdn/shop/files/Trust-Seal-Banner.png?v=1691062493";
    const pandya = "https://bigmusclesnutrition.com/cdn/shop/files/banner-desktop_1_4de45024-028d-4874-b456-c537f3ca25de_1024x.png?v=1708084065";

    return(
        
        <div>
            <img className="carnagePre" src={carnagePreWorkout}/>
        <div className="products-container">
            {/* PRODUCT-1 */}
            <div className="products-image-1">
                <img src="data:image/jpeg;base64,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nBhKc1ZHFpz41U7vZF8NNh5k8kerqroctSjZbJIjGAoeGFI+INUh0e9GtztFaVrSpq1ntOqEFY5NA+0Tpi0GesQeoLO1S02htAwoQkJSOQAgCqDUbqKKKAKKKKAKKKKAKKKKA8IqIbe6NNn3UqLPVLM9tk9WZPEogoUe8pNTCigKdv8AokvGwoWl9iQQR1buNuQciCUFSTl+qKhm0OjzabXtWilj6zSkOD0Bxfu10rRQHJF5bOs/pmnWv+o2tv8AjApOm4B0IPga6/NNt5sC1e/S2zDn22kK95FAcqdZRirpV/o72WvWyZH2AW/4CKbnuiXZSv8AgLT9l94e4rigOdn3YFadl2nXuwfYTmrw4Dz++ug3ehjZiuFwPB4n4g0W/Q5YoBCHblIJk9tB+LdAVf1lbNsbV/IrUlJ/2h8QjmhPFX44kcjVoN9EtoCD19yY4FTUfy6TXvQvZPLLjr92tR5rbAA4AAN5CiBzxszazrBJaVhJIJMAzE8xp2jW+829cuABbkgYY7KQQUGUmQJmT510A30I7LGv5QfF0fJIpW30ObJGrDivF5z5KFdOHOR3huTMvLzxTnHtKxK0786SuXzgiHV6lXtnIq9ojPUyZNdT23RjslGlk2ftFa/4lGnez3UsWs27O2QeaWWwfWJpkYOQrBl92UMpdXIAUlsLVIGgITqKkezOjTar8YbNxIPF2GgPELIPurrBCABAAA5DIVlXDpQGxegW4VBurltscUtpLqvCThAPrVj7tdFWzbMhQa65wfTfhwg65JgIHjE99TiigPAK9oooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooD//2Q==" alt="DC(EAA)"/>
            <div>
                <div className="products-info">
                    <h4>EAA</h4>
                    <div>
                        <span> ₹1499</span>
                    </div>
                
                </div>
            </div>
            </div>

            {/* PRODUCT-2 */}
            <div className="products-image-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYt40sky1fLj8Djliz58-vNeAi-3ZLmr7R3E3NX-vkvz9UShWOVD8_p9NZTznqirnipa8&usqp=CAU" alt="muscle-tech"/>
            <div>
                <div className="products-info">
                    <h4>MUSCLE-TECH(NITRO-TECH)</h4>
                    <div>
                        <span> ₹3300</span>
                    </div>
                   
                </div>
            </div>
            </div>

            {/* PRODUCT-3 */}
            <div className="products-image-3">
                <img src="data:image/jpeg;base64,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" alt="on(gold-whey)"/>
            <div>
                <div className="products-info">
                    <h4>ON(GOLD-WHEY)</h4>
                    <div>
                        <span> ₹5500</span>
                    </div>
                    
                </div>
            </div>
            </div>

            {/* PRODUCT-4 */}
            <div className="products-image-4">
                <img src="data:image/jpeg;base64,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" alt="dymatize"/>
                <div>
                <div className="products-info">
                    <h4>DYMATIZE(ELITE)</h4>
                    <div>
                        <span> ₹7000</span>
                    </div>
                   
                </div>
            </div>
            </div>

            {/* PRODUCT-5 */}
            <div className="products-image-5">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnP2_Pa7OWO7J18lvAFSByeUc7TQZAcx0ag&s" alt="essential-whey"/>
                <div>
                <div className="products-info">
                    <h4>ESSSENTIAL-WHEY</h4>
                    <div>
                        <span> ₹3000</span>
                    </div>
                    
                </div>
            </div>
            </div>

            {/* PRODUCT-6 */}
             <div className="products-image-6">
                <img src="https://thedrchoice.com/cdn/shop/files/BULKKINGWITHSHAKER_720x.jpg?v=1711089776" alt="product-image"/>
                <div>
                <div className="products-info">
                    <h4>BULK-KING</h4>
                    <div>
                        <span> ₹1000</span>
                    </div>
                   
                </div>
            </div>
            </div>

            {/* PRODUCT-7 */}
            <div className="products-image-7">
                <img src="https://bigmusclesnutrition.com/cdn/shop/products/1_99af19f9-9bc9-47c9-a0f3-e5b228b3b0f2_1524x.jpg?v=1698393045" alt="product-image"/>
                <div>
                <div className="products-info">
                    <h4>FREAK</h4>
                    <div>
                        <span> ₹499</span>
                    </div>
                   
                </div>
            </div>
            </div>

            {/* PRODUCT-8 */}
            <div className="products-image-8">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGQ_fDE3ZRUJmbHfbyHk36A_52AcJw2YfDQ&s" alt="vegan"/>
                <div>
                <div className="products-info">
                    <h4>GENIUS(VEGAN-PROTIEN)</h4>
                    <div>
                        <span> ₹4500</span>
                    </div>
                   
                </div>
            </div>
            </div>
           </div>


{/*NEW LAUNCH  */}


            <h1><b>ACCESSORIES</b></h1>
            <div className="pandya">
                <img src={pandya}/>
            </div>
<div className="all-accessories">

{/* PRODUCT-1 */}
        <div>
                <img src="https://thedrchoice.com/cdn/shop/files/TRANSPARENTSHAKER_720x.jpg?v=1704271363" alt="shaker"/>
                
        </div>
{/* PRODUCT-2 */}
        <div>
                <img src="https://bigmusclesnutrition.com/cdn/shop/products/Stringer-red_1524x.png?v=1683783509" alt="vest"/>
               
        </div>
</div>
            <img src={creatineImage}/>

    <img src={trustSeal}/>
    <img src={footerImage}/>
        </div>
    )
}
export default BodyFile
