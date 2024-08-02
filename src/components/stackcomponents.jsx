import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Stack = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);
    const [modalIsOpen3, setModalIsOpen3] = useState(false);
    const [modalIsOpen4, setModalIsOpen4] = useState(false);

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


      const UltimateFatLossStack1 = "https://thedrchoice.com/cdn/shop/products/857430_fatloss_2_720x.jpg?v=1645624189";
      const ProFatLoss = "https://thedrchoice.com/cdn/shop/products/501464_eaa_ripped_720x.jpg?v=1645623518";
      const UltimateFatLossStack2 = "https://thedrchoice.com/cdn/shop/products/Shredz_Trans4orm_720x.jpg?v=1653479580";
      const MuscleRecoveryStack = "https://thedrchoice.com/cdn/shop/products/691054_recovery_stack_1_720x.jpg?v=1645623630";

   return(
  
<div className="products-container">

       <button onClick={openModal}><b>FATLOSS STACK</b></button>
       <Modal isOpen={modalIsOpen}>
        <div className="stack-img">
        <img src={UltimateFatLossStack1}/>
        <button className="stack-btn">ADD TO CART</button>
        </div>

        <div className="stack-img">
            <img src={UltimateFatLossStack2}/>
            <button className="stack-btn">ADD TO CART</button>
        </div>

        <div className="stack-img">
            <img src={ProFatLoss}/>
            <button className="stack-btn">ADD TO CART</button>
        </div>

        <button onClick={closeModal} style={{
                    position: 'absolute',
                    top:'10px',
                    right: '10px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer'
            }}><FontAwesomeIcon  icon={faRemove} size="2x" className="hover:bg-black-200 " /></button>
       </Modal>
       <br/>

       <button onClick={openModal1}><b>BUILD MUSCLE STACK</b></button>
       <Modal isOpen={modalIsOpen1}>
        <h1>NOT ADDED YET</h1>
       <button onClick={closeModal1} style={{
                    position: 'absolute',
                    top:'10px',
                    right: '10px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer'
            }}><FontAwesomeIcon  icon={faRemove} size="2x" className="hover:bg-black-200 " /></button>
       </Modal>
       <br/>

       <button onClick={openModal2}><b>WOKROUT STACK</b></button>
       <Modal isOpen={modalIsOpen2}>
       <h1>NOT ADDED YET</h1>
       <button onClick={closeModal2} style={{
                    position: 'absolute',
                    top:'10px',
                    right: '10px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer'
            }}><FontAwesomeIcon  icon={faRemove} size="2x" className="hover:bg-black-200 " /></button>
       </Modal>
       <br/>

       <button onClick={openModal3}><b>MUSCLE RECOVERY STACK</b></button>
       <Modal isOpen={modalIsOpen3}>
       <div className="stack-img">
        <img src={MuscleRecoveryStack}/>
        <button className="stack-btn">ADD TO CART</button>
        </div>
       <button onClick={closeModal3} style={{
                    position: 'absolute',
                    top:'10px',
                    right: '10px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer'
            }}><FontAwesomeIcon  icon={faRemove} size="2x" className="hover:bg-black-200 " /></button>
       </Modal>
       <br/>

       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
    </div>
   )

    
}

export default Stack
