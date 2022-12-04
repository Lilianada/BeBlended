import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { ClientAdminHeader, BottomNavClient } from "../../../components";
import "../../StylistAdmin/PayoutInformation/PayoutInfo.scss";

export default function ClientPayoutInformation() {
  return (
    <main className="mainWrapper payoutInfo">
      <ClientAdminHeader />
        <div className="payoutInfo_head">
          <GrPrevious style={{ marginRight: ".5rem" }} fill="#707070" />
          <p>Back</p>
        </div>

      <div className="wd_80">
        <strong className="payoutInfo_subhead">
          Account
          <GrNext style={{ margin: " 0 .5rem" }} />
          Payout Information
        </strong>

        <h4 className="formHead">Payout Information</h4>

        <div className="redirectInfo">
          <p>
            <i>Add and manage your payment methods using our<br/> secure payment system.</i>
          </p>
          <button className="activeBtn">Add bank account</button>
        </div>
        </div>
        <BottomNavClient />
    </main>
  );
}
