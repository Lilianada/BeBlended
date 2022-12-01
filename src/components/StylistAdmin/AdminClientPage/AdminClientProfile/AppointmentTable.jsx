import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import "./AdminClientProfile.scss";

export default function AppointmentTable({ data }) {
//   const [completed, setCompleted] = useState(data.status === "Completed");

  return (
    <section className="tableBody">
        <div className="tableHead">
            <p>Date</p>
            <p>Appointment</p>
            <p>Amount</p>
            <p>Status</p>
        </div>
        <div className="tableItem">
            {data.map((val) => {
            return (
            <div key={val.id} className="tableRow">
                <p className="tableData">{val.date}</p>
                <p className="tableData">{val.id}</p>
                <p className="tableData">${val.amount}</p>
                <p
                className="completedStatus"
                >
                    <BsCheckCircleFill />
                { val.status }
                </p>
            </div>
            );
        })}
        </div>
    </section>
  );
}
