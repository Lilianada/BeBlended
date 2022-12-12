import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import Kinky from "../../../../assets/KinkyHair.png";
import Coarse from "../../../../assets/CoarseHair.png";
import "./AboutClientSection.scss";
import { useState } from "react";

export default function AboutClientSection() {
  const [input, setInput]= useState("Lives in Toronto, Canada")
  const handleInput = (event) => {
    setInput(event.target.value);
  }
  const [isEditing, setEdit] = useState(true);
  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(!isEditing);
  };
  return (
    <section className="aboutClient_Section">
      <div>
        <p className="aboutHead">About</p>
      </div>
      <div className="address">
        <AiFillHome style={{ marginRight: ".75rem" }} size={18} />
        <input
          type="text"
          className="inputField"
          disabled={isEditing}
          value={input}
          onChange={handleInput}
        />
        <button
          className={`editBtn ${!isEditing ? "edit" : "editBtn"}`}
          onClick={handleEdit}
        >
          <FaPen style={{ marginLeft: ".75rem" }} />
        </button>
      </div>

      <div className="hairDetails">
        <div className="aboutHead">Hair Details</div>
        <div className="details">
          {/* This will show up based on what the user picks in the onboarding process */}
          <div className="rowSpan">
            <div className="detailCircle">
              <img src={Kinky} alt="Hair Detail" />
            </div>
            <h5>Hair Texture</h5>
            <p>Kinky/Coily</p>
          </div>

          <div className="rowSpan">
            <div className="detailCircle">
              <img src={Coarse} alt="Hair Detail" />
            </div>
            <h5>Hair Structure</h5>
            <p>Coarse</p>
          </div>
        </div>
      </div>
    </section>
  );
}
