import React from "react";
import "./DropFile.scss";
import { IoCloudUploadOutline } from "react-icons/io5";

function DropFile() {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };
  return (
    <form
      className="dropBox"
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <label
        id="labelUpload"
        htmlFor="input-file-upload"
        className={dragActive ? "drag-active" : ""}
      >
        <IoCloudUploadOutline size={60} />
        <input
          ref={inputRef}
          type="file"
          className="inputFile"
          multiple={true}
          onChange={handleChange}
        />
        <p className="dropBox_text">
          Drop files here or
          <button className="uploadInput" onClick={onButtonClick}>
            browse
          </button>
        </p>
        <p className="smallText">
          Please upload a file in one of these formats: .jpg, .jpeg, .png, .gif
        </p>
      </label>
      {dragActive && (
        <div
          className="dragFile_element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
  );
}

export default DropFile;
