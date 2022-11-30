import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import "./AdminClientProfile.scss";

export default function AppointmentTable({ data }) {
  const [completed, setCompleted] = useState(data.status === "Completed");
  // const isCompleted = () => {
  //     setCompleted(!completed);
  //     if (data.status === "Completed"){
  //         setCompleted(true);
  //     } else if (data.status === "Cancelled"){
  //         setCompleted(false)
  //     }
  // }

  return (
    // <table className="tableBody">
    //   <tr className="tableHead">
    //     <th>Date</th>
    //     <th>Appointment ID</th>
    //     <th>Amount</th>
    //     <th>Status</th>
    //   </tr>
    //   {data.map((val) => {
    //     return (
    //       <tr key={val.id} className="tableRow">
    //         <td className="tableData">{val.date}</td>
    //         <td className="tableData">{val.id}</td>
    //         <td className="tableData">${val.amount}</td>
    //         <td
    //           className="completedStatus"
    //         >
    //           {
    //             val.status
    //           }
    //         </td>
    //       </tr>
    //     );
    //   })}
    // </table>

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
                {
                    val.status
                }
                </p>
            </div>
            );
        })}
        </div>
    </section>
  );
}
