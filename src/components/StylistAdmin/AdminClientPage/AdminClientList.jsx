import React from "react";
import {StylistAdminHeader} from "../../../components";
import './AdminClientList.scss';

export default function AdminClientList() {
  return (
    <main className="mainWrapper adminClient_Page">
        <StylistAdminHeader/>

        <div className="adminClient_head">
          <GrPrevious style={{ marginRight: ".5rem" }} />
          <p>Back</p>
        </div>

        <h4 className="formHead">My Clients</h4>
    </main>
  );
}
