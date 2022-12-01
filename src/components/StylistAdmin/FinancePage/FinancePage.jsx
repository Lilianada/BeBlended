import React from "react";
import { BottomNavStylist, StylistAdminHeader } from "../../../components";
import { MdTrendingUp } from "react-icons/md";
import MoneyBag from "../../../assets/Admin-Icons/Money-bag.svg";
import "./FinancePage.scss";
import { GrPrevious } from "react-icons/gr";

export default function AdminFinancePage() {
    return (
        <main className="mainWrapper adminFinance_Page">
            <StylistAdminHeader />

            <div className="wd_80">
                <div className="adminFinance_head">
                    <button className="previousButton">
                        <GrPrevious style={{ marginRight: ".5rem" }} />
                        <p>Back</p>
                    </button>
                </div>
                <div className="transactions_subhead">
                    <h4 className="formHead">My Finances</h4>
                    <div className="earningsFlex">
                        <div className="flexItem blackFlex_Item">
                            <p>
                                Earnings this month
                                <MdTrendingUp />
                            </p>
                            <h3>$0.00</h3>
                        </div>
                        <div className="flexItem pinkFlex_Item">
                            <p>
                                Earnings last month
                                <MdTrendingUp />
                            </p>
                            <h3>$0.00</h3>
                        </div>
                        <div className="flexItem greyFlex_Item">
                            <p>
                                Earnings to date
                                <MdTrendingUp />
                            </p>
                            <h3>$0.00</h3>
                        </div>
                        <div className="flexItem borderFlex_Item">
                            <p>
                                Upcoming earnings
                                <MdTrendingUp />
                            </p>
                            <h3>$0.00</h3>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="adminFinance_body">
                <div className="transactionsTable">
                    <h5 className="transactionsTable_Head">Transactions</h5>
                    <div className="noTransactions">
                        <img src={MoneyBag} alt="No client" className="noTransaction_Img" />
                        <p className="noTransaction_Txt">
                            You have no transactions in <br /> our system yet!
                        </p>
                        <p className="smallNote">
                            Transactions get added once you <br /> start booking appointments.
                        </p>
                    </div>
                </div>
            </div>
            <BottomNavStylist />
        </main>
    );
}
