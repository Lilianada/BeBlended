import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./GalleryModal.scss";
import { AiOutlineClose } from "react-icons/ai";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { Backdrop, DeletePicModal } from "../../../../components";
import {images} from "../ProfileModalData";

function GalleryModal({ openModal, closeModal }) {
  const [openDelete, setOpenDelete] = useState(false);
  const handleDelete = () => {
    setOpenDelete(true);
  };

  return ReactDOM.createPortal(
    <>
      {" "}
      {openModal ? (
        <div className="galleryModal">
          <Backdrop onClick={closeModal}>
            <motion.div
              className="dialogContent"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              exit="exit"
            >
              <header className="modalHeader">
                <h5>Photo Gallery</h5>
                <button onClick={closeModal} className="closeButton">
                  <AiOutlineClose size={24} />
                </button>
              </header>

              <div
                className="modalContent"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="gridLayout">
                  {images.map((image) => (
                    <div className="gridItem" key={image.id}>
                      <img src={image.image} alt="Image" />
                      <button
                        type="button"
                        className="delete"
                        onClick={handleDelete}
                      >
                        <RiDeleteBin7Fill className="RiDeleteBin7Fill" />
                      </button>
                      {openDelete ? (
                        <DeletePicModal setOpenDelete={setOpenDelete} />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <footer className="modalFooter">
                <button className="saveBtn">Save</button>
              </footer>
            </motion.div>
          </Backdrop>
        </div>
      ) : null}{" "}
    </>,
    document.getElementById("modal")
  );
}

export default GalleryModal;
