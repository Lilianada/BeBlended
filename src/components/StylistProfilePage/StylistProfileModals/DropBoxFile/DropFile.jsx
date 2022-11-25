import React, { useState } from "react";
import "./DropFile.scss";
import { IoCloudUploadOutline } from "react-icons/io5";

function DropFile() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  // drag state
  const [dragActive, setDragActive] = useState(false);
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
      setSelectedFile(e.dataTransfer.files[0]);
      setIsFilePicked(true);
      console.log(setSelectedFile);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setIsFilePicked(true);
      console.log(setSelectedFile);
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
      {isFilePicked ? (
        <label
          id="labelUploaded"
          htmlFor="input-file-upload"
          className={dragActive ? "drag-active" : ""}
        >
          <div className="fileName">
            <p>{selectedFile.name}</p>
          </div>
          <button className="browse" onClick={onButtonClick}>
            Browse
          </button>
        </label>
      ) : (
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
      )}
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
