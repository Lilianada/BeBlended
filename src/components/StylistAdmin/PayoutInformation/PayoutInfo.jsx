import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import {
  StylistAdminHeader,
  BottomNavStylist,
} from "../../../components";
import './PayoutInfo.scss';

export default function PayoutInfo() {
  return (
    <main className="mainWrapper payoutInfo">
    <StylistAdminHeader />

    <div className="wd_80">
      <div className="payoutInfo_head">
        <GrPrevious style={{ marginRight: ".5rem" }} />
        <p>Back</p>
      </div>

      <strong className="payoutInfo_subhead">
        Account
        <GrNext style={{ margin: " 0 .5rem" }} />
        Payout Information
      </strong>

      <h4 className="formHead">Payout Information</h4>
    </div>
    <BottomNavStylist/>
    </main>
  );
}
