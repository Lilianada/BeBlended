import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./AddOnModal.scss";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import CurrencyInput from "react-currency-input-field";
import { Backdrop, Variant } from "../../../../components";
import { useForm } from "react-hook-form";

function AddOnModal({ openModal, closeModal }) {
  //variant checkbox
  const [showVariant, setShowVariant] = useState(false);
  const handleVariant = () => setShowVariant(!showVariant);
  
  //useform hooks
  const { register, handleSubmit} = useForm();
  const handleRegistration = (data) => console.log(data);

  return ReactDOM.createPortal(
    <>
      {" "}
      {openModal ? (
        <div className="addOn_Modal">
          <Backdrop>
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
                <h5>Add-on</h5>
                <button className="closeButton" onClick={closeModal}>
                  <AiOutlineClose size={24} />
                </button>
              </header>

              <div
                className="modalContent"
              >
                <form className="modalForm_Column" onSubmit={handleSubmit(handleRegistration)}>
                  <div className="formField">
                    <label className="formLabel" htmlFor="name">
                      Add-On Name (*)
                    </label>
                    <input
                      type="text"
                      name="name"
                      {...register('name')}
                      className="add-onInput"
                      required
                    />
                  </div>
                  <div className="formField">
                    <label className="formLabel" htmlFor="name">
                      Add-On Description
                    </label>
                    <textarea
                      type="text"
                      name="text"
                      {...register('text')}
                      rows="3"
                      maxLength={140}
                      className="add-onInput"
                      placeholder="How would you describe this service? (140 characters max)"
                      required
                    />
                  </div>
                  <div className="fields">
                    <div className="formField">
                      <label className="formLabel" htmlFor="price">
                        Price (*){" "}
                      </label>
                      <CurrencyInput
                        name="price"
                        className="add-onInput"
                        placeholder="$0.00"
                        prefix="$"
                        decimalSeparator=","
                        groupSeparator="."
                        required={true}
                      />
                    </div>
                    <div className="formField">
                      <label className="formLabel" htmlFor="price">
                        Inventory (*){" "}
                      </label>
                      <input
                        name="price"
                        type="number"
                        className="add-onInput"
                        placeholder="0"
                        required={true}
                      />
                    </div>
                  </div>
                <button className="saveBtn" type="submit">Save</button>
                </form>
              </div>
            </motion.div>
          </Backdrop>
        </div>
      ) : null}{" "}
    </>,
    document.getElementById("modal")
  );
}

export default AddOnModal;
