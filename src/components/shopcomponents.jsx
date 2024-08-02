import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faRemove } from "@fortawesome/free-solid-svg-icons";

const ShopComponent = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);
    const [modalIsOpen3, setModalIsOpen3] = useState(false);
    const [modalIsOpen4, setModalIsOpen4] = useState(false);
    const [modalIsOpen5, setModalIsOpen5] = useState(false);
    const [modalIsOpen6, setModalIsOpen6] = useState(false);



    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const openModal1 = () => {
        setModalIsOpen1(true);
    };

    const closeModal1 = () => {
        setModalIsOpen1(false);
    };

    const openModal2 = () => {
        setModalIsOpen2(true);
    };

    const closeModal2 = () => {
        setModalIsOpen2(false);
    };

    const openModal3 = () => {
        setModalIsOpen3(true);
    };

    const closeModal3 = () => {
        setModalIsOpen3(false);
    };

    const openModal4 = () => {
        setModalIsOpen4(true);
    };

    const closeModal4 = () => {
        setModalIsOpen4(false);
    };

    const openModal5 = () => {
        setModalIsOpen5(true);
    };

    const closeModal5 = () => {
        setModalIsOpen5(false);
    };

    const openModal6 = () => {
        setModalIsOpen6(true);
    };

    const closeModal6 = () => {
        setModalIsOpen6(false);
    };

    const Protien = "https://bigmusclesnutrition.com/cdn/shop/products/Froteinhalfkg_1524x.jpg?v=1700557780";
    const Protien1 = "https://thedrchoice.com/cdn/shop/products/1Kg_1_720x.jpg?v=1701771806";
    const Protien2 = "https://bigmusclesnutrition.com/cdn/shop/products/ZeroRipped_1524x.jpg?v=1644907576";
    const Gainer1 = "https://thedrchoice.com/cdn/shop/files/BULKKINGWITHSHAKER_720x.jpg?v=1712298590";
    const Gainer2 = "https://bigmusclesnutrition.com/cdn/shop/files/B0CDX2SKXH.MAIN_1524x.jpg?v=1701839147";
    const AminoAcids = "https://bigmusclesnutrition.com/cdn/shop/products/B094W8NM4Y.MAIN_1524x.jpg?v=1628498895"; 
    const AminoAcids2 = "https://thedrchoice.com/cdn/shop/files/DRACO_POWERWATERMELON_720x.jpg?v=1696934807";
    const PreWorkout = "https://bigmusclesnutrition.com/cdn/shop/files/karnage-pdp-1_d1049f87-5a5a-46d2-bf84-251a3465b2bf_1524x.jpg?v=1708327905";
    const DailySupport = "https://thedrchoice.com/cdn/shop/products/11_720x.jpg?v=1671796011";
    const Wellness = "https://thedrchoice.com/cdn/shop/products/758626_shredz_with_box_588c25a2-0e49-4215-9e13-7fdfbddb196d_720x.jpg?v=1685039682";
    const Wellness2 = "https://thedrchoice.com/cdn/shop/products/1_b397d363-e1f0-4047-90d6-405e8cd3efec_720x.jpg?v=1671796927";
    const Accessories = "https://thedrchoice.com/cdn/shop/products/588742_whatsapp_image_2022_01_22_at_11.08.54_am_720x.jpg?v=1671795259" ;
    const Accessories1 = "https://bigmusclesnutrition.com/cdn/shop/products/WhatsAppImage2023-04-19at15.00.21_1_1524x.jpg?v=1681899281" ;

    return (
        <div className="products-container">
            <ul>
                <li>

                    <b>WHEY-PROTIEN</b>
                    <button onClick={openModal}><FontAwesomeIcon icon={faArrowRight} size="1x" className="hover:bg-black-200 tewhite" /></button>
                    <Modal isOpen={modalIsOpen} >
                        <div className="stack-img">
                            <img src={Protien} />
                            <button className="stack-btn">ADD TO CART</button>
                        </div>

                        <div className="stack-img">
                            <img src={Protien1} />
                            <button className="stack-btn">ADD TO CART</button>
                        </div>

                        <div className="stack-img">
                            <img src={Protien2} />
                            <button className="stack-btn">ADD TO CART</button>
                        </div>
                        <button onClick={closeModal} style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            border: 'none',
                            backgroundColor: 'transparent',
                            cursor: 'pointer'
                        }}><FontAwesomeIcon icon={faRemove} size="2x" className="hover:bg-black-200 " /></button>
                    </Modal>
                </li>

                <br />

                <li>
                    <b>GAINER</b>
                    <button onClick={openModal1}><FontAwesomeIcon icon={faArrowRight} size="1x" className="hover:bg-black-200 tewhite" /></button>
                    <Modal isOpen={modalIsOpen1}>
                    <div className="stack-img">
                            <img src={Gainer1} />
                            <button className="stack-btn">ADD TO CART</button>
                        </div>

                        <div className="stack-img">
                            <img src={Gainer2} />
                            <button className="stack-btn">ADD TO CART</button>
                        </div>

                        <button onClick={closeModal1} style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            border: 'none',
                            backgroundColor: 'transparent',
                            cursor: 'pointer'
                        }}><FontAwesomeIcon icon={faRemove} size="2x" className="hover:bg-black-200 " /></button>
                    </Modal>
                </li>

                <br />

                <li>
                    <b>AMINO-ACIDS</b>
                    <button onClick={openModal2}><FontAwesomeIcon icon={faArrowRight} size="1x" className="hover:bg-black-200 tewhite" /></button>
                    <Modal isOpen={modalIsOpen2}>
                    <div className="stack-img">
                            <img src={AminoAcids} />
                            <button className="stack-btn">ADD TO CART</button>
                        </div>

                        <div className="stack-img">
                            <img src={AminoAcids2} />
                            <button className="stack-btn">ADD TO CART</button>
                        </div>

                        <button onClick={closeModal2} style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            border: 'none',
                            backgroundColor: 'transparent',
                            cursor: 'pointer'
                        }}><FontAwesomeIcon icon={faRemove} size="2x" className="hover:bg-black-200 " /></button>
                    </Modal>
                </li>

                <br />

                <li>
                    <b>PRE-WORKOUT</b>
                    <button onClick={openModal3}><FontAwesomeIcon icon={faArrowRight} size="1x" className="hover:bg-black-200 tewhite" /></button>
                    <Modal isOpen={modalIsOpen3}>
                    <div className="stack-img">
                            <img src={PreWorkout} />
                            <button className="stack-btn">ADD TO CART</button>
                        </div>


                        <button onClick={closeModal3} style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            border: 'none',
                            backgroundColor: 'transparent',
                            cursor: 'pointer'
                        }}><FontAwesomeIcon icon={faRemove} size="2x" className="hover:bg-black-200 " /></button>
                    </Modal>
                </li>

                <br />

                <li>
                    <b>DAILY-SUPPORT</b>
                    <button onClick={openModal4}><FontAwesomeIcon icon={faArrowRight} size="1x" className="hover:bg-black-200 tewhite" /></button>
                    <Modal isOpen={modalIsOpen4}>
                    <div className="stack-img">
                            <img src={DailySupport} />
                            <button className="stack-btn">ADD TO CART</button>
                        </div>


                        <button onClick={closeModal4} style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            border: 'none',
                            backgroundColor: 'transparent',
                            cursor: 'pointer'
                        }}><FontAwesomeIcon icon={faRemove} size="2x" className="hover:bg-black-200 " /></button>
                    </Modal>
                </li>

                <br />

                <li>
                    <b>WELLNESS</b>
                    <button onClick={openModal5}><FontAwesomeIcon icon={faArrowRight} size="1x" className="hover:bg-black-200 tewhite" /></button>
                    <Modal isOpen={modalIsOpen5}>
                    <div className="stack-img">
                            <img src={Wellness} />
                            <button className="stack-btn">ADD TO CART</button>
                        </div>
                        <div className="stack-img">
                            <img src={Wellness2} />
                            <button className="stack-btn">ADD TO CART</button>
                        </div>
                        <button onClick={closeModal5} style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            border: 'none',
                            backgroundColor: 'transparent',
                            cursor: 'pointer'
                        }}><FontAwesomeIcon icon={faRemove} size="2x" className="hover:bg-black-200 " /></button>
                    </Modal>
                </li>

                <br />

                <li>
                    <b>ACCESSORIES</b>
                    <button onClick={openModal6}><FontAwesomeIcon icon={faArrowRight} size="1x" className="hover:bg-black-200 tewhite" /></button>
                    <Modal isOpen={modalIsOpen6}>
                    <div className="stack-img">
                            <img src={Accessories} />
                            <button className="stack-btn">ADD TO CART</button>
                        </div>
                        <div className="stack-img">
                            <img src={Accessories1} />
                            <button className="stack-btn">ADD TO CART</button>
                        </div>
                        <button onClick={closeModal6} style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            border: 'none',
                            backgroundColor: 'transparent',
                            cursor: 'pointer'
                        }}><FontAwesomeIcon icon={faRemove} size="2x" className="hover:bg-black-200 " /></button>
                    </Modal>
                </li>

            </ul>
        </div>
    )
}
export default ShopComponent;