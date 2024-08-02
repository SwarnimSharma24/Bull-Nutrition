import Modal from "react-modal";
import React, { useState } from "react";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LabReports = () => {


    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);

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
    

    const manufacturingImage = "https://bigmusclesnutrition.com/cdn/shop/files/Manufactured-in-world-class-facility-Creative_2.png?v=1706777409";
    const goldWhey = "https://bigmusclesnutrition.com/cdn/shop/files/goldwheyinformedchoice-09_1_360x.png?v=1699010116";
    const karnage = "https://bigmusclesnutrition.com/cdn/shop/files/karnage-pdp-1_d1049f87-5a5a-46d2-bf84-251a3465b2bf_360x.jpg?v=1708327905";
    const nitraEdge = "https://bigmusclesnutrition.com/cdn/shop/files/nitra-edge-32-g-protein_580x_f38db0ad-f551-456e-9076-af9d375a8e4d_360x.png?v=1693995954";
    const wheyFusion = "https://thedrchoice.com/cdn/shop/products/1Kg_1_720x.jpg?v=1701771806";
    const creatine = "https://thedrchoice.com/cdn/shop/files/BlueberrybelliniFront_f3a089e3-e77f-4cde-a433-8e8d8799af38_720x.jpg?v=1689597033";
    const bulkKing = "https://thedrchoice.com/cdn/shop/files/BULKKINGWITHSHAKER_720x.jpg?v=1712298590";

    const wheyFusionReport = "https://thedrchoice.com/cdn/shop/files/Eurofin_April_1_720x.jpg?v=1683103722";
    const creatineReports = "https://cdn.shopify.com/s/files/1/0630/0962/0184/files/258-2024-01002697_DC_Creatine_1_page-0001_1024x1024.jpg?v=1705562850";
    const bulkKingReports = "https://cdn.shopify.com/s/files/1/0630/0962/0184/files/258-2023-12009942_BULK_KING__page-0001_1_480x480.jpg?v=1705323244";


    return(
        <div>
            <img src={manufacturingImage}/>
            <div className="products-container">

            <div className="lab-report-btn">
                    <div className="lab-report-img">
                    <img src={wheyFusion}/>
                    <button onClick={openModal}><b>VIEW REPORT</b></button>
                    <Modal isOpen={modalIsOpen} >
                        <img src={wheyFusionReport}/>
                    <button onClick={closeModal} style={{
                    position: 'absolute',
                    top:'10px',
                    right: '10px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer'
            }}><FontAwesomeIcon  icon={faRemove} size="2x" className="hover:bg-black-200 " /></button>
                    </Modal>

                    </div>
                </div>

                <div className="lab-report-btn">
                    <div className="lab-report-img">
                    <img src={creatine}/>
                    <button onClick={openModal1}><b>VIEW REPORT</b></button>
                    <Modal isOpen={modalIsOpen1}>
                        <img src={creatineReports}/>
                        <button onClick={closeModal1} style={{
                    position: 'absolute',
                    top:'10px',
                    right: '10px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer'
            }}><FontAwesomeIcon  icon={faRemove} size="2x" className="hover:bg-black-200 " /></button>
                    </Modal>
                    
                    </div>
                </div>

                <div className="lab-report-btn">
                    <div className="lab-report-img">
                    <img src={bulkKing}/>
                    <button onClick={openModal2}><b>VIEW REPORT</b></button>
                    <Modal isOpen={modalIsOpen2}>
                        <img src={bulkKingReports}/>
                        <button onClick={closeModal2} style={{
                    position: 'absolute',
                    top:'10px',
                    right: '10px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer'
            }}><FontAwesomeIcon  icon={faRemove} size="2x" className="hover:bg-black-200 " /></button>
                    </Modal>
                    </div>
                </div>

                <div className="lab-report-btn"> 
                    <img src={goldWhey}/>
                    <button><b>VIEW REPORT</b></button>
                </div>

                <div className="lab-report-btn">
                    <img src={karnage}/>
                    <button><b>VIEW REPORT</b></button>
                </div>

                <div className="lab-report-btn">
                    <img src={nitraEdge}/>
                    <button><b>VIEW REPORT</b></button>
                </div>

            </div>
        </div>
    )
}

export default LabReports;