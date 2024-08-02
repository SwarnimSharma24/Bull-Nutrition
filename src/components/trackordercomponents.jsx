import { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";

const TrackOrder = () => {
    const Tick = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKCnwE8cDfqp_UyajEmcKN8zU6QXNPu9J57qf6gLwzmA&s";
    const [modalIsOpen,setModalIsOpen] = useState(false);
    
    const openModal= () => {
        setModalIsOpen(true)
    }
    const closeModal = () => {
        setModalIsOpen(false)
    }


    return(
        <div className="track-order">
            <br/>
            <h1 className="track-order-text"><b>TRACK-SHIPMENT</b></h1>
            <h3><b>#ORDER-ID OR TRACK NUMBER </b></h3>
            <input className="order-id-box" type="text" placeholder="#Order-Id or Tracking No "></input>
            <br/>
            <button onClick={openModal} className="track-order-btn"><b>TRACK</b></button>
            <Modal isOpen={modalIsOpen}>
                <div className="track-order-modal">
                    <img className="track-order-img" src={Tick}/>
                <h1><b> Your order has been placed successfully.
                    <br/>
                    Soon you will get an update on your G-mail. </b></h1>
                    <br/>
                    Thanx for purchasing from us.
                    <br/>
                    <h1 className="track-order-text" >BULL NUTRITION</h1>
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
        </div>
    )
}

export default TrackOrder;