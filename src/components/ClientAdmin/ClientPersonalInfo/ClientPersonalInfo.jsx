import React, {useState} from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { ClientAdminHeader, BottomNavClient } from "../../../components";
import "../../StylistAdmin/PersonalnfoPage/PersonalInfo.scss";

export default function ClientPersonalInfo() {
  const [isEditing, setEdit] = useState(true);
  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(!isEditing);
  };

  return (
    <main className="mainWrapper personalInfo_page">
      <ClientAdminHeader />

      <div className="wd_90">
        <div className="backBtn">
          <GrPrevious
            style={{ marginRight: ".35rem" }}
            fill="#707070"
            strokeOpacity={0.5}
          />
          <p>Back</p>
        </div>

        <div className="wd_90">
          <h6 className="personalInfo_head">
            Account
            <GrNext style={{ margin: " 0 .5rem" }} />
            Personal Information
          </h6>

          <h4 className="formHead">Personal Information</h4>

          <form action="" className="personalInfo_form">
            {/* Change the value in the inputs to show the clients info */}
            <div className="formWrap">
              <label htmlFor="First-Name" className="inputWrap">
                <p>First name*</p>
                <button
                  className={`editBtn ${!isEditing ? "edit" : "editBtn"}`}
                  onClick={handleEdit}
                >
                  Edit
                </button>
              </label>
              <input type="text" className="inputField" disabled={isEditing} value="Aileen" />
            </div>

            <div className="formWrap">
              <label htmlFor="Last-Name" className="inputWrap">
                <p>Last name*</p>
                <button
                  className={`editBtn ${!isEditing ? "edit" : "editBtn"}`}
                  onClick={handleEdit}
                >
                  Edit
                </button>
              </label>
              <input type="text" className="inputField" disabled={isEditing} value="Stark" />
            </div>

            <div className="formWrap">
              <label htmlFor="Email" className="inputWrap">
                <p>Email address*</p>
                <button
                  className={`editBtn ${!isEditing ? "edit" : "editBtn"}`}
                  onClick={handleEdit}
                >
                  Edit
                </button>
              </label>
              <input type="text" className="inputField" disabled={isEditing} value="Aileenstark@yahoo.com" />
            </div>

            <div className="formWrap">
              <label htmlFor="Government-id" className="inputWrap">
                <p>Address*</p>
                <button
                  className={`updateBtn ${!isEditing ? "edit" : ""}`}
                  onClick={handleEdit}
                >
                  Edit
                </button>
              </label>
              <input
                type="text"
                className="inputField"
                disabled={isEditing}
                placeholder="Not Provided"
              />
            </div>
            <button className="saveBtn">Save Changes</button>
          </form>
        </div>
      </div>

      <BottomNavClient />
    </main>
  );
}
