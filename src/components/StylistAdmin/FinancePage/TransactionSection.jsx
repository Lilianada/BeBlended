import React from "react";
import "./FinancePage.scss";
import { RiSearchLine } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

export default function TransactionSection({data}) {
  return (
    <div className="transactionTable_Section">
        <div className="transactionHead_Section">
            <div className="inputWrap">
                <label htmlFor="input" className="inputField">
                    <RiSearchLine fill="#907D7D" size={16} />
                    <input type="text" placeholder="Search keyword, amount, date, etc." />
                </label>
            </div>
            <div className="filterDropdown">Filter</div>
        </div>
        <div className="transactionTable">
            <div className="tableHead">
                <p>Date</p>
                <p>Service</p>
                <p>Appointment Id</p>
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
                    {
                        data.status === "Completed" ? (
                            <p
                                className="completedStatus"
                                >
                                    <BsCheckCircleFill />
                                { data.status }
                            </p>
                        ) :
                        (
                            <p
                                className="cancelledStatus"
                                >
                                    <MdCancel />
                                { data.status }
                            </p>
                        )
                    }
                    <p className="tableData"><HiDownload/></p>
                </div>
                );
            })}
            </div>
        </div>
    </div>
  );
}
