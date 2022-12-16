import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import "./HairStylistDashboardProfile.scss"; 

export default function HairStylistAppointmentTable({data}) {
  return (
    <div className="appointmentTable">
      <div className="tableHead">
        <p>Date</p>
        <p>Service</p>
        <p>Invoice ID</p>
        <p>Amount</p>
        <p>Status</p>
      </div>
      <div className="tableItem">
        {data.map((data) => {
          return (
            <div key={data.id} className="tableRow">
              <p className="tableData">{data.date}</p>
              <p className="tableData">{data.service}</p>
              <p className="tableData">{data.id}</p>
              <p className="tableData">${data.amount}</p>
              {data.status === "Completed" ? (
                  <p className="completedStatus">
                    <BsCheckCircleFill size={14} />
                    {data.status}
                  </p>
                ) : (
                  <p className="cancelledStatus">
                    <MdCancel size={18} />
                    {data.status}
                  </p>
                )}
              <p className="tableData">
                  <HiDownload size={14} />
                </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
