import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { StylistAdminHeader, BottomNavStylist, PayoutInfoAccordion } from "../../../components";
import "./PayoutInfo.scss";

const FAQ = [
  {
    head: "How do I get paid?",
    body: "Once you connect your bank account, you will be paid by direct deposit. If you are having any trouble with this, please email us at support@beblended.ca.",
  },
  {
    head: "When will I get paid?",
    body: "You will be paid 24 hours after the end time of your completed appointment. If you are having any trouble with this, please email us at support@beblended.ca.",
  },
  {
    head: "How much will I be paid?",
    body: "You will get paid 95% of your total appointment cost. BeBlended charges stylists a 5% service fee to help cover the cost of the platform and services we provide.",
  },
];

export default function PayoutInfo() {

  return (
    <main className="mainWrapper payoutInfo">
      <StylistAdminHeader />
        <div className="payoutInfo_head">
          <GrPrevious style={{ marginRight: ".5rem" }} />
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
            <i>To get paid you need to connect your bank account.</i>
          </p>
          <button className="activeBtn">Add bank account</button>
        </div>

        <div className="faqsAccordion">
          <h4 className="accordionHead">FAQs</h4>

          {FAQ.map((faq, id) => {
            return (
              <PayoutInfoAccordion key={id} head={faq.head} body={faq.body}/>
            );
          })}
        </div>
      </div>
      <BottomNavStylist />
    </main>
  );
}
