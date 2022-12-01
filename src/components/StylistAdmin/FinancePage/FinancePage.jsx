import React from "react";
import './FinancePage.scss';

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
                    <div className="flexHead">
                        <div className="flexItem blackFlex_Item">
                        <p>Earnings this month</p>
                        <h3>$0.00</h3>
                        </div>
                        <div className="flexItem pinkFlex_Item">
                        <p>Earnings last month</p>
                        <h3>$0.00</h3>
                        </div>
                        <div className="flexItem greyFlex_Item">
                        <p>Earnings to date</p>
                        <h3>$0.00</h3>
                        </div>
                    </div>
                    <div className="transactionsTable">
                        <h5 className="transactionsTable_Head">Transactions</h5>
                        <AppointmentTable data={tableData} />
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}
