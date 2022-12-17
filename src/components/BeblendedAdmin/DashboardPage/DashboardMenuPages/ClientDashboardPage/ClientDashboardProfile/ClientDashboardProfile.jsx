import React from "react";
import { GrPrevious } from "react-icons/gr";
import { ClientAppointmentTable } from "../../../../../../components";
import {clientAppointmentTable} from "../../DashboardData";
import "../../HairStylistDashboardPage/HairStylistDashboardProfile/HairStylistDashboardProfile.scss";

export default function ClientDashboardProfile() {
    return (
        <main className="clientDashboardProfile">
          <div className="dashboardProfile_Head">
            <GrPrevious
              style={{ marginRight: ".35rem" }}
              fill="#707070"
              strokeOpacity={0.5}
            />{" "}
            <p>Back</p>
          </div>
    
          <div className="profileContainer">
            <div className="profileContainer_Head">
              <h4 className="headText">Braids by Becky</h4>
              <p className="profileActive">Active</p>
              {/* <p className="profileDeactivate">Deactivate</p>
              <p className="profileSuspended">Suspended</p> */}
            </div>
            <div className="profileContainer_Details">
              <div className="textFlex">
                <p className="boldText">Full name: </p>
                <p className="normalText">Becky Jones</p>
              </div>
              <div className="textFlex">
                <p className="boldText">Member Since: </p>
                <p className="normalText">June 2022</p>
              </div>
              <div className="textFlex">
                <p className="boldText">Business Name: </p>
                <p className="normalText">Braids by Becky</p>
              </div>
              <div className="textFlex">
                <p className="boldText">Clientele Size: </p>
                <p className="normalText">20</p>
              </div>
              <div className="textFlex">
                <p className="boldText">Email Address: </p>
                <p className="normalText">braidsbybecky@gmail.com</p>
              </div>
              <div className="textFlex">
                <p className="boldText">Earnings to Date: </p>
                <p className="normalText">$11,200.56</p>
              </div>
              <div className="textFlex">
                <p className="boldText">Business Address: </p>
                <p className="normalText">8000 Wallaby Way, Sydney, Australia</p>
              </div>
              <div className="textFlex">
                <p className="boldText">Total # Bookings: </p>
                <p className="normalText">120 / 123</p>
              </div>
              <div className="textFlex">
                <p className="boldText">Phone Number: </p>
                <p className="normalText">(416) 355 1220</p>
              </div>
              <div className="textFlex">
                <p className="boldText">  </p>
                <p className="normalText"></p>
              </div>
            </div>
    
            <div className="clientAppointmentTable">
              <h5 className="sectionHead">Appointments</h5>
              <ClientAppointmentTable data={clientAppointmentTable} />
              <div className="buttonsWrap">
                <button className="suspendBtn">Suspend Account</button>
                <button className="deactivateBtn">Deactivate Account</button>
              </div>
            </div>
    
          </div>
        </main>
    )
}
