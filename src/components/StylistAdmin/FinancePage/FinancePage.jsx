import React from "react";
import { BottomNavStylist } from "../../../components";
import { HiArrowTrendingUp } from "react-icons/hi";
import MoneyBag from "../../../assets/Admin-Icons/Money-bag.svg";
import "./FinancePage.scss";

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
                                <HiArrowTrendingUp />
                            </p>
                            <h3>$0.00</h3>
                        </div>
                        <div className="flexItem pinkFlex_Item">
                            <p>
                                Earnings last month
                                <HiArrowTrendingUp />
                            </p>
                            <h3>$0.00</h3>
                        </div>
                        <div className="flexItem greyFlex_Item">
                            <p>
                                Earnings to date
                                <HiArrowTrendingUp />
                            </p>
                            <h3>$0.00</h3>
                        </div>
                        <div className="flexItem borderFlex_Item">
                            <p>
                                Upcoming earnings
                                <HiArrowTrendingUp />
                            </p>
                            <h3>$0.00</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="adminClient_body">
                <div className="transactionsTable">
                    <h5 className="transactionsTable_Head">Transactions</h5>
                    {clientList.length === 9 ? (
                        <div className="noClientsCard">
                            <img src={MoneyBag} alt="No client" className="noClient_Img" />
                            <p className="noClient_Txt">
                                You have no transactions in <br /> our system yet!
                            </p>
                            <p className="smallNote">
                                Transactions get added once you <br /> start booking appointments.
                            </p>
                        </div>
                    ) : (
                        clientList.map((card, id) => {
                            return (
                                <div className="clientCards">
                                    <AdminClientCards
                                        clientImage={card.clientImage}
                                        clientName={card.clientName}
                                        key={id}
                                    />
                                    <button className="btn-secondary">View More</button>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
            <BottomNavStylist />
        </main>
    );
}
