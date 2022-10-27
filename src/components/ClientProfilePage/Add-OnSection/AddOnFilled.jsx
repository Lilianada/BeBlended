import React from "react";
import Accordion from "../Accordion/AddonAccordion";
import './AddOnFilled.scss';

function AddOnFilled() {
  const List = [
    {
      id: 1,
      name: "Hair Extension",
      price: 120,
      description: "Pre-stretched hair (i.e. xpressions, fretress, spectra).",
      variant: [
        { type: "Number", options: ["1 pack ", "2 pack", "3 pack", "4 pack", "5 pack"] },
        { type: "Length", options: ["Brastrap", "Armpit", "Shoulder"] },
      ],
      total: 100,
    },
    {
      id: 2,
      name: "Hair Accessories",
      price: 120,
      description: "Different hair accessoies for your hair(i.e beads, hooks).",
      variant: [
        { type: "Number", options: ["1 pack ", "2 pack", "3 pack", "4 pack", "5 pack"] },
        { type: "Accesories", options: ["Beads", "Ropes", "Hooks"] },
      ],
      total: 140,
    },
  ]

  const [addOnList, setAddOnList] = React.useState(List);

  return (
    <section className="addOn_Filled">
      <div className="addOn_Head">
        <h5 className="name">Add-Ons</h5>
      </div>
      {addOnList.map((item, id) => {
        return (
          <Accordion
            key={id}
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            variant={item.variant}
            total={item.total}
          />
        );
      })}
    </section>
  );
}

export default AddOnFilled;
