import React from "react";
import "./ClientDashboard.scss";

export default function ClientTable({ data }) {
  return (
    <div className="clientTable">
      <div className="tableHead">
        <p>Client Id</p>
        <p>full name</p>
        <p>email address</p>
        <p>Phone number</p>
        <p>Status</p>
        <p>SPENT to date</p>
      </div>
      <div className="tableItem">
        {data.map((data) => {
          return (
            <div key={data.id} className="tableRow">
              <p className="tableData">#{data.id}</p>
              <p className="tableData">
                <Link to="/client-profile">{data.fullName}</Link>
              </p>
              <p className="tableData">{data.email}</p>
              <p className="tableData">{data.phone}</p>
              <p className="completedStatus">{data.status}</p>
              <p className="tableData">${data.spent}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
