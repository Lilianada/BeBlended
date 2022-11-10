import React, { useState } from "react";
import "./ServiceModal.scss";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { AiOutlineClose, AiFillInfoCircle } from "react-icons/ai";
import CurrencyInput from "react-currency-input-field";
import { useForm } from "react-hook-form";
import { Backdrop, Variant } from "../../../../components";

function ServiceModal({ openModal, closeModal }) {
  //variant checkbox
  const [showVariant, setShowVariant] = useState(false);
  const handleVariant = () => {
    setShowVariant(!showVariant);
  }

  //useform hooks
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);

  //switch buttons
  const [isSwitch, setIsSwitch] = useState(1);
  const handleSwitch = (index) => {
    setIsSwitch(index);
  };

  return ReactDOM.createPortal(
    <>
      {openModal ? (
        <div className="serviceModal">
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
                <h5>Services</h5>
                <button className="closeButton" onClick={closeModal}>
                  <AiOutlineClose size={20} />
                </button>
              </header>

              <div className="modalContent">
                <form
                  action=""
                  className="modalForm_Column"
                  onSubmit={handleSubmit(handleRegistration)}
                >
                  <div className="formField">
                    <label className="formLabel" htmlFor="name">
                      Service Name (*)
                    </label>
                    <input
                      type="text"
                      name="name"
                      {...register("name")}
                      className="serviceInput"
                      required
                    />
                  </div>
                  <div className="formField">
                    <label className="formLabel" htmlFor="name">
                      Service Description
                    </label>
                    <textarea
                      type="text"
                      name="text"
                      {...register("text")}
                      rows="3"
                      maxLength={140}
                      className="serviceInput"
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
                        {...register("price", { required: true })}
                        className="serviceInput"
                        placeholder="$0.00"
                        prefix="$"
                        decimalSeparator=","
                        groupSeparator="."
                        onValueChange={(value, name) =>
                          console.log(value, name)
                        }
                        required={true}
                      />
                    </div>
                    <div className="formField">
                      <label className="formLabel" htmlFor="deposit">
                        Deposit (*) <AiFillInfoCircle />{" "}
                      </label>
                      <div className="row">
                        <input
                          type="number"
                          name="deposit"
                          {...register("deposit")}
                          className="serviceInput"
                          placeholder="0"
                          min={0}
                        />
                        <div className="buttonswrap">
                            <button
                              className={`percentBtn ${isSwitch === 1 ? "percentBtn activeBtn" : ""}`}
                              type="button"
                              onClick={() => handleSwitch(1)}
                            >
                              %
                            </button>
                            <button
                              className={`dollarBtn ${isSwitch === 2 ? "dollarBtn activeBtn" : ""}`}
                              type="button"
                              onClick={() => handleSwitch(2)}
                            >
                              $
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="formField">
                    <label className="formLabel" htmlFor="duration">
                      Duration (*) <AiFillInfoCircle />{" "}
                    </label>
                    <div className="fields">
                      <input
                        type="text|number"
                        name="hours"
                        {...register("hours", { required: true })}
                        className="serviceInput"
                        placeholder="0 hours"
                        min="0"
                        max="23"
                        maxLength="2"
                        style={{ marginRight: "1.5rem" }}
                        required
                      />
                      <input
                        type="text|number"
                        name="minutes"
                        {...register("minutes", { required: true })}
                        className="serviceInput"
                        placeholder="0 minutes"
                        min="0"
                        max="59"
                        maxLength="2"
                        required
                      />
                    </div>
                  </div>
                  {/* Variant */}
                  <div className=" variant">
                    <input
                      type="checkbox"
                      name="variantcheckbox"
                      {...register("variantcheckbox")}
                      className="checkBox"
                      onChange={handleVariant}
                    />
                    <span className="variantCheckbox"></span>
                    <label className="formLabel" htmlFor="">
                      <p>
                        <strong>Variants:</strong>
                        This service has multiple options, like different sizes
                        or colours.
                      </p>
                    </label>
                  </div>
                  {/* Variant Content */}
                  {showVariant ? <Variant /> : null}
                  <button className="saveBtn" type="submit">
                    Save
                  </button>
                </form>
              </div>
            </motion.div>
          </Backdrop>
        </div>
      ) : null}
    </>,
    document.getElementById("modal")
  );
}

export default ServiceModal;
