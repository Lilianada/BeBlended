import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { Backdrop } from "../../../components";
import  "../../StylistProfilePage/StylistProfileModals/GalleryModal/GalleryModal.scss"

function GalleryModalClient({ openModal, closeModal }) {
  const images = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1663431512656-b1d9e811735b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1899&q=80",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1657130711047-522ce815a2c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1662859009178-62afb0cff049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1663431512297-993006b0098b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1663387147575-49598f178640?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1662695088711-acfdfda51c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1663402989770-4c5bd9254896?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1663383460653-bef91222019c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1662859010103-61b5735968ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
  ];

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
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Backdrop>
        </div>
      ) : null}{" "}
    </>,
    document.getElementById("modal")
  );
}

export default GalleryModalClient;
