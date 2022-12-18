import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import {
  StylistAdminHeader,
  BottomNavStylist,
  PasswordModal,
  DeactivateAccount,
} from "../../../../components";
import "./LoginSecurity.scss";

export default function LoginSecurity() {
  const [openModal, setOpenModal] = useState({
    password: false,
    deactivate: false,
  });

  const handleModal = (password, deactivate) => {
    setOpenModal((prev) => {
      return {
        ...prev,
        [password]: !prev[password],
        [deactivate]: !prev[deactivate],
      };
    });
  };
  return (
    <main className="mainWrapper loginSecurity_page">
      <StylistAdminHeader />

      <div className="wd_90">
        <div className="loginSecurity_head">
          <GrPrevious style={{ marginRight: ".5rem" }} fill="#707070" />
          <p>Back</p>
        </div>

        <div className="wd_90">

          <h6 className="loginSecurity_subhead">
            Account
            <GrNext style={{ margin: " 0 .5rem" }} fill="#707070" />
            Login & Security
          </h6>

          <h4 className="formHead">Login & Security</h4>

          <form action="" className="loginSecurity_form">
            <div className="formWrap">
              <label htmlFor="First-Name" className="inputWrap">
                <p>Current password</p>
                <button
                  className="updateBtn"
                  onClick={() => handleModal("password")}
                  type="button"
                >
                  Update
                </button>
                <AnimatePresence
                  initial={false}
                  exitBeforeEnter={true}
                  onExitComplete={() => null}
                >
                  {openModal.password && (
                    <PasswordModal
                      openModal={openModal.password}
                      closeModal={setOpenModal}
                    />
                  )}
                </AnimatePresence>
              </label>
              <input
                type="password"
                className="inputField"
                placeholder="********"
                disabled={true}
              />
              <button
                className="deactivate"
                onClick={() => handleModal("deactivate")}
                type="button"
              >
                Deactivate Account
              </button>
              <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                {openModal.deactivate && (
                  <DeactivateAccount
                    openModal={openModal.deactivate}
                    closeModal={setOpenModal}
                  />
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </div>
      <BottomNavStylist />
    </main>
  );
}
