import React from "react";
import ServiceAccordion from "../Accordion/ServiceAccordion";
import "./ServiceFilled.scss";

function ServiceFilled() {
  const List = [
    {
      id: 1,
      name: "Classic Box Braids",
      price: 120,
      description:
        "Painless,  affordable, and lasting braids for all hair types. If you decide to bring your own hair, please only bring pre-stretched hair (i.e. xpressions, fretress, spectra).",
      duration: {
        startHours: 4,
        startMins: 30,
        endHours: 6,
        endMins: 30,
      },
      variant: [
        { type: "Size", options: ["Large", "Medium", "Small", "Tiny"] },
        { type: "Length", options: ["Brastrap", "Armpit", "Shoulder"] },
      ],
      total: 120,
    },
    {
      id: 2,
      name: "Knotless Box Braids",
      price: 120,
      description:
        "Painless,  affordable, and lasting braids for all hair types. If you decide to bring your own hair, please only bring pre-stretched hair (i.e. xpressions, fretress, spectra).",
      duration: {
        startHours: 4,
        startMins: 30,
        endHours: 6,
        endMins: 30,
      },
      variant: [
        { type: "Size", options: ["Large", "Medium", "Small", "Tiny"] },
        { type: "Length", options: ["Brastrap", "Armpit", "Shoulder"] },
      ],
      total: 100,
    },
    {
      id: 3,
      name: "Braided Ponytail",
      price: 120,
      description:
        "Painless,  affordable, and lasting braids for all hair types. If you decide to bring your own hair, please only bring pre-stretched hair (i.e. xpressions, fretress, spectra).",
      duration: {
        startHours: 4,
        startMins: 30,
        endHours: 6,
        endMins: 30,
      },
      variant: [
        { type: "Size", options: ["Large", "Medium", "Small", "Tiny"] },
        { type: "Length", options: ["Brastrap", "Armpit", "Shoulder"] },
      ],
      total: 140,
    },
  ];

  // const options = variantOptions.options;
  const [serviceList, setServiceList] = React.useState(List);

  return (
    <section className="serviceFilled">
      <div className="serviceFilled_Head">
        <h5 className="name">Service</h5>
      </div>
      {serviceList.map((item, id  ) => {
        return(
          <ServiceAccordion 
            key={id}
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            duration={item.duration}
            variant={item.variant}
            total={item.total}
             />
        )
      })}
    </section>
  );
}

export default ServiceFilled;
