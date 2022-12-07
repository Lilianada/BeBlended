import { AnimatePresence } from "framer-motion";
import React, {useState} from "react";
import PicPlaceholder from "../../../../assets/Admin-Icons/Beblended-head.svg";
import {ProfilePicture} from "../../../../components";
import './WelcomeClient.scss';

export default function WelcomeClient() {
  //modal
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };
  
  return (
    <div className="welcomeClient_Section">
        <div className="profilePic_Update">
            <img src={PicPlaceholder} alt="Profile Picture Placeholder" className="profilePic" />
            <button className="profilePic_Text" onClick={handleModal}>
                Update photo
            </button>
            <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {openModal && (
              <ProfilePicture
                openModal={openModal}
                closeModal={handleModal}
              />
            )}
          </AnimatePresence>
        </div>
        <div className="welcomeMessage">
            <h4 className="messageHead">Welcome back Lola</h4>
                <p className="message">Member since June 2022</p>
                <button className="activeBtn btns">Active</button>
                {/* <button className="pendingBtn btns">Pending</button> */}
                {/* <button className="inactiveBtn btns">Inactive</button> */}
        </div>
    </div>
  );
}
