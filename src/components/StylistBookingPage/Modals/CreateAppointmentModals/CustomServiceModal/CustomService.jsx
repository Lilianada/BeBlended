import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import CurrencyInput from "react-currency-input-field";
import { Backdrop } from "../../../../../components";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import "./CustomService.scss";

export default function CustomService({ openModal, closeModal }) {
  //useform hooks
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => {
    console.log(data);
  };

  const [active, setActive] = useState(false);
  const [field, setField] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setField(e.target.value);
    if (setField !== "") {
      setActive(true);
    }
  };

  //switch buttons
  // const [isSwitch, setIsSwitch] = useState(1);
  // const handleSwitch = (index) => {
  //   setIsSwitch(index);
  // };

  const [textArea, setTextArea] = useState("");
  const inputRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
    setTextArea(e.target.value);
  };

  return ReactDOM.createPortal(
    <>
      {" "}
      {openModal ? (
        <div className="customService_Wrap">
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
                <h5> </h5>
                <button className="closeButton" onClick={closeModal}>
                  <AiOutlineClose size={24} />
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
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="fields">
                    <div className="formField">
                      <label className="formLabel" htmlFor="price">
                        Price (*)
                      </label>
                      <CurrencyInput
                        name="price"
                        {...register("price", { required: true })}
                        className="serviceInput"
                        onChange={handleChange}
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
                        Deposit (*)
                      </label>
                      <div className="row">
                        <input
                          type="number"
                          name="deposit"
                          {...register("deposit")}
                          className="serviceInput"
                          onChange={handleChange}
                          placeholder="0"
                          min={0}
                          required
                        />
                        <select name="" className="selectSigns">
                          <option value="">%</option>
                          <option value="">$</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="formField">
                    <label className="formLabel" htmlFor="duration">
                      Duration (*)
                    </label>
                    <div className="fields">
                      <input
                        type="text|number"
                        name="hours"
                        {...register("hours", { required: true })}
                        className="serviceInput"
                        onChange={handleChange}
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
                        onChange={handleChange}
                        placeholder="0 minutes"
                        min="0"
                        max="59"
                        maxLength="2"
                        required
                      />
                    </div>
                  </div>
                  <div className="formField">
                    <label className="formLabel" htmlFor="name">
                      Note
                    </label>
                    <textarea
                      type="text"
                      name="text"
                      {...register("text")}
                      rows="3"
                      maxLength={140}
                      className="textInput"
                      ref={inputRef}
                      placeholder="i.e. client will bring her own hair to the appointment. "
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button
                    className={`saveBtn ${
                      active ? "activeBtn" : "inActiveBtn"
                    }`}
                    type="submit"
                  >
                    Save
                  </button>
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
