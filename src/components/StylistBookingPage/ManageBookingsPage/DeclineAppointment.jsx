import { Backdrop } from "../../../components";
import { AiFillDelete } from "react-icons/ai";
import "./ManageBookings.scss";

export default function DeclineAppointment({ openModal, closeModal }) {
  return (
    (
      <>
        {openModal ? (
          <div className="declineAppointment">
            <Backdrop>
              <div className="declineContent">
                <div className="dialogHeader">
                  <AiFillDelete size={35} />
                </div>
                <div className="dialogBody">
                  <p>Are you sure you want to decline this appointment?</p>
                </div>
                <div className="dialogFooter">
                  <button
                    className="btn-secondary"
                    type="button"
                    data-dismiss="deleteModal"
                  >
                    Yes
                  </button>
                  <button
                    className="btn-primary"
                    type="button"
                    onClick={closeModal}
                  >
                    No
                  </button>
                </div>
              </div>
            </Backdrop>
          </div>
        ) : null}
      </>
    ),
    document.getElementById("modal")
  );
}
