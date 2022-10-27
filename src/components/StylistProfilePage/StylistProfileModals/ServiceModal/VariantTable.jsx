import React from "react";
import "./ServiceModal.scss";
import CurrencyInput from "react-currency-input-field";
import { useForm } from "react-hook-form";
import { useState } from "react";

function VariantTable({ variant, tags, input }) {
  // useform hooks
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);
  
  return (
    <div className="variantData">
      <table className="variantTable">
        <thead className="tableHead">
          <tr className="tableRow">
            <th className="dataHead">Variant: {input} </th>
            <th className="dataHead">Price</th>
            <th className="dataHead">Duration</th>
          </tr>
        </thead>

        {variant.map((tag, id) => {
          return (
            <tbody className="tableBody" key={id} >
              <tr className="tableRow" >
                <td className="tableData"> {tag} </td>
                <td className="tableData">
                  <CurrencyInput
                    name="variant-data-price"
                    {...register("price")}
                    className="priceField"
                    placeholder="$0.00"
                    prefix="$"
                    decimalSeparator=","
                    groupSeparator="."
                    onValueChange={(value, name) => console.log(value, name)}
                    required={true}
                  />
                </td>
                <td className="tableData">
                  <div className="timeWrap">
                    <CurrencyInput
                      type="text|number"
                      name="hours"
                      {...register("hours")}
                      className="timeField"
                      placeholder="0 hrs"
                      min="0"
                      max="23"
                      maxLength="2"
                      suffix=" hrs"
                      required
                    />
                    <CurrencyInput
                      type="text|number"
                      name="minutes"
                      {...register("minutes")}
                      className="timeField"
                      placeholder="0 min"
                      min="0"
                      max="59"
                      maxLength="2"
                      suffix=" min"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default VariantTable;
