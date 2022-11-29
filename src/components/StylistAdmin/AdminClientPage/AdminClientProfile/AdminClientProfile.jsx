import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { GrPrevious } from "react-icons/gr";
import { StylistAdminHeader } from "../../../../components";

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
        <div className="adminClient_subhead">
          <div className="subHead">
            <h4 className="formHead">
              My Clients <AiOutlineMinus style={{margin: "0 .5rem"}} /> Melly Thomas
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
}
