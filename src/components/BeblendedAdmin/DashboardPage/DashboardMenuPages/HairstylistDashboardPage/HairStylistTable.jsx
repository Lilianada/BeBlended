import React from "react";
import { Link } from "react-router-dom";
import "./HairStylistDashboard.scss";

export default function HairStylistTable({ data }) {
  return (
    <div className="hairstylistTable">
      <div className="tableHead">
        <p>Stylist Id</p>
        <p>full name</p>
        <p>business name</p>
        <p>Status</p>
        <p>Clientele size</p>
        <p>Earning to date</p>
      </div>
      <div className="tableItem">
        {data.map((data) => {
          return (
            <div key={data.id} className="tableRow">
              <p className="tableData">#{data.id}</p>
              <p className="tableData">
                <Link to="/hairstylist-profile">{data.fullName}</Link>
              </p>
              <p className="tableData">{data.businessName}</p>
              <p className="completedStatus">{data.status}</p>
              <p className="tableData">{data.size}</p>
              <p className="tableData">${data.earnings}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
