import React, { useState } from "react";
import "./FinancePage.scss";
import { RiSearchLine } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

export default function TransactionSection({ data }) {
  const [openFilter, setOpenFilter] = useState(false);
  const isFilter = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <div className="transactionTable_Section">
      <div className="transactionHead_Section">
        <div className="inputWrap">
          <label htmlFor="input" className="inputField">
            <RiSearchLine fill="#907D7D" size={16} />
            <input
              type="text"
              placeholder="Search keyword, amount, date, etc."
            />
          </label>
        </div>
        <button className="filterButton" onClick={isFilter}>
          Filter <IoFilter />{" "}
        </button>
        <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
        >
          {openFilter && (
            <motion.div 
                className="filterDropdown"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
                }}
                exit="exit"
            >
              <label htmlFor="filter" className="filterWrap">
                <input type="radio" name="filter-radio" className="" />
                <div className="radioButton"></div>
                last day
              </label>
              <label htmlFor="filter" className="filterWrap">
                <input type="radio" name="filter-radio" className="" />
                <div className="radioButton"></div>
                last 15 days
              </label>
              <label htmlFor="filter" className="filterWrap">
                <input type="radio" name="filter-radio" className="" />
                <div className="radioButton"></div>
                last 30 days
              </label>
              <label htmlFor="filter" className="filterWrap">
                <input type="radio" name="filter-radio" className="" />
                <div className="radioButton"></div>
                last quater
              </label>
              <label htmlFor="filter" className="filterWrap">
                <input type="radio" name="filter-radio" className="" />
                <div className="radioButton"></div>
                last year
              </label>
            </motion.div>
          )}
        </AnimatePresence>
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
                {data.status === "Completed" ? (
                  <p className="completedStatus">
                    <BsCheckCircleFill />
                    {data.status}
                  </p>
                ) : (
                  <p className="cancelledStatus">
                    <MdCancel />
                    {data.status}
                  </p>
                )}
                <p className="tableData">
                  <HiDownload />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
