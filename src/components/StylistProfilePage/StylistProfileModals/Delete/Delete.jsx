import React from "react";
import './Delete.scss';
import { AiFillDelete } from "react-icons/ai";

function DeletePicModal({ setOpenDelete }) {
    return (
        <div className="deleteModal">
            <div className="deleteContent">
                <div className="dialogHeader">
                    <AiFillDelete size={65} />
                </div>
                <div className="dialogBody">
                    <p>Are you sure you want to delete this image?</p>
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
                        onClick={() => setOpenDelete(false)}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletePicModal;
