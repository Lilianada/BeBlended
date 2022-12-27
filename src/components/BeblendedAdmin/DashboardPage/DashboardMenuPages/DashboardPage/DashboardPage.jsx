import React from "react";
import {HiOutlineArrowTrendingUp} from 'react-icons/hi2';
import './DashboardPage.scss';

export default function DashboardPage() {
  return (
    <section className="dashboardPage">
        <div className="dasboardPage_Container">
            <h4 className="dashboardPage_Header">Dashboard</h4>
            <div className="dashboardPage_Cards">
                <div className="dashboardPage_Card">
                    <div className="dashboardPage_CardHeader">
                        <p className="dashboardPage_CardTitle">Active hairstylists</p>
                        <HiOutlineArrowTrendingUp size={18} className="icon" />
                    </div>
                    <h4 className="dashboardPage_CardNumber">0</h4>
                </div>
                <div className="dashboardPage_Card">
                    <div className="dashboardPage_CardHeader">
                        <p className="dashboardPage_CardTitle">Active clients</p>
                        <HiOutlineArrowTrendingUp size={18} className="icon" />
                    </div>
                    <h4 className="dashboardPage_CardNumber">0</h4>
                </div>
            </div>
            <div className="dasboardPage_Transactions">
                <div className="totalTransactions">
                    <p className="totalTransactions_Title">Total $ amount processed to date:</p>
                    <h5 className="totalTransactions_Number">$0.00</h5>
                </div>
                <div className="totalTransactions">
                    <p className="totalTransactions_Title">Total # of transactions to date:</p>
                    <h5 className="totalTransactions_Number">0</h5>
                </div>
                <div className="totalTransactions">
                    <p className="totalTransactions_Title">Total hairstylist earnings to date:</p>
                    <h5 className="totalTransactions_Number">$0.00</h5>
                </div>
            </div>
        </div>
    </section>
  );
}
