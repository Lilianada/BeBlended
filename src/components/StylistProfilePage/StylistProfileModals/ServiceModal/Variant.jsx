import React, { useState } from "react";
import "./ServiceModal.scss";
import { TagsInput, VariantTable } from "../../../../components";
import { useForm } from "react-hook-form";

function Variant() {
  //useform hooks
  const { register, handleSubmit } = useForm();

  
  //variant array
  const [variant, setVariant] = useState([
    { num: 1, 
      input: "", 
      tags: [ ] 
    }]);

    

  //add variant options
  const handleVariantAdd = () => {
    const items = variant;
    const lastNum = items[items.length - 1];
    items.push({ num: lastNum + 1, input: "", tags: [] });
    setVariant([...items]);
    console.log(items);
  };

  const Option = ({ num, onRemove, inputChange, tags, setTags }) => {
    return (
      <div className="variantForm">
        <label className="formLabel" htmlFor="variant">
          Option {num}:
          <button
            className="removeBtn"
            onClick={(e) => {
              e.preventDefault();
              onRemove();
            }}
          >
            Remove
          </button>
        </label>
        <div className="variantFields">
          <div className="fields">
            <input
              type="text"
              name="variant-type"
              className="variantType"
              placeholder="i.e Length, Size etc"
              onChange={inputChange}
              {...register("variant-type")}
            />
            <TagsInput tags={tags} setTags={setTags} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="variantContent">
      <p className="variantHead">Options</p>
      {variant.map((item, id) => {
        return (
          <>
            <Option
              key={id}
              num={(variant.num = id + 1)}
              tags={variant[id].tags}
              inputChange={(e) => {
                e.preventDefault();
                variant[id].input = e.target.value;
              }}
              onRemove={() => {
                const tmp = variant.filter((i) => i !== variant[id]);
                setVariant(tmp);
              }}
              setTags={(tags) => {
                variant[id].tags = tags;
                setVariant([...variant]);
                console.log(tags);
              }}
            />
            {item.tags && (
              <VariantTable
                variant={variant}
                tags={variant.tags}
                input={variant.input}
              />
            )}
          </>
        );
      })}
      <button type="button" className="btn-primary" onClick={handleVariantAdd}>
        Add Another Variant
      </button>
    </div>
  );
}

export default Variant;
