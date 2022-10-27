import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./TagsInput.scss";

function TagsInput({ tags, setTags }) {
  const handleKeyDown = (e) => {
    if (e.key !== ",") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]); 
    e.target.value = "";
  };

  const removeTag = (index) => {
    setTags(tags.filter((i) => i !== tags[index]));
  };

  return (
    <div className="tagsInput_Container">
      {tags.map((tag, index) => (
        <div className="tagItem" key={index}>
          <span className="text">{tag}</span>
          <span className="close" onClick={() => removeTag(index)}>
            <AiOutlineClose size={14} />
          </span>
        </div>
      ))}
      <input
        onKeyDown={handleKeyDown}
        type="text"
        className="tagsInput"
        placeholder="Enter options, separated by a comma."
      />
    </div>
  );
}

export default TagsInput;
