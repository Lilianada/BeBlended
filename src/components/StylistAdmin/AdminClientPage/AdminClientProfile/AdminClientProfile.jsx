import React from "react";
import { GrPrevious } from "react-icons/gr";
import {StylistAdminHeader} from "../../../../components";

export default function AdminClientProfile() {
  return (
    <main className="mainWrapper adminClient_Page">
    <StylistAdminHeader />

    <div className="wd_80">
      <div className="adminClient_head">
        <div>
          <GrPrevious style={{ marginRight: ".5rem" }} />
          <p>Back</p>
        </div>
      </div>
    </div>
    </main>
  );
}
