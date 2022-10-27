import React, { useState } from "react";
import "./IdUpload.scss";
import Logo from "../../../../../assets/logo-black.svg";
import { FaAngleLeft } from "react-icons/fa";
import BlobMB from "../../../../../assets/mobileBlob.svg";
import Blob from "../../../../../assets/IdVector.svg";
import BlobPurpleMB from "../../../../../assets/VectorPurpleMb.svg";
import { IoCloudUploadOutline, IoDocumentText } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { BsCheckSquareFill } from "react-icons/bs";

function IdUpload() {
  const [file, setFile] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);


  const handleChange = (e) => {
    let selected = e.target.files[0];
    setFile(selected);
    setIsUploaded(true);
    console.log(selected.name);
  };

  const handleClick  = (e) => {
    if ( setFile(e.target.files[0]) ) {
      setIsUploaded(true);
    }
  }

  return (
    <section className="idWrap">
      <header className="idWrap__Head">
        <button className="rowBack">
          <FaAngleLeft className="angleLeft" size={24} />
          <p>Back</p>
        </button>
        <div className="welcomeLogo">
          <img src={Logo} alt="Logo" />
        </div>
      </header>
      <img src={BlobPurpleMB} alt="Vector" className="mobileTopVector" />
      <img src={Blob} alt="Vector" className="desktopTopVector" />

      <div className="flexItems">
        <div className="itemOne">
          <h3>Please upload a piece of ID</h3>
          <p className="smallText">
            Your privacy is important to us. We’ll only use this document to
            verify your business and will never share or post it publicly.
          </p>
        </div>
        {/* Upload Id */}
        <div className="itemTwo">
          <div className="dropBox">
            <IoCloudUploadOutline className="uploadIcon" />
            <form className="uploadButtons" encType="multipart/form-data">
              <h5>Drop files here or</h5>
              <button className="browse">
                <input
                  type="file"
                  name="fileUpload"
                  className="upload"
                  multiple={false}
                  onChange={handleChange}
                  onClick={handleClick}
                  accept="image/jpeg,image/jpg,image/png,application/pdf,application/doc,application/docx"
                />
                browse
              </button>
            </form>
            <p>
              Please upload a file in one of these formats: .doc, .docx, .pdf,
              .jpg, .jpeg, .png
            </p>
          </div>
          {/* Upload complete content - to display it, use "uploadBox" instead */}
          <div className="uploadBox_off"> 
            <h5>File Upload</h5>
            <div className="childFlex">
              <IoDocumentText size={38} className="documentIcon" />
              <div className="docInfo">
                <p className="fileName">Document-1.pdf</p>
                <div className="progressInfo">
                  <progress
                    className="progressBar"
                    value="80"
                    max="100"
                  ></progress>
                  <MdCancel size={14} fill="#707070" />
                </div>
                <div className="fileSize">
                  <p className="size">12MB of 12MB</p>
                  <p className="percent">100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Input Options */}
        <div className="selectOptions">
          <p className="selectHead">We accept: </p>
          <div className="options">
            <div className="opt">
              <BsCheckSquareFill size={21} fill=" #DEDDDD" />
              <label htmlFor="passport">Passports</label>
            </div>
            <div className="opt">
              <BsCheckSquareFill size={21} fill=" #DEDDDD" />
              <label htmlFor="license">Driver’s License</label>
            </div>
            <div className="opt">
              <BsCheckSquareFill size={21} fill=" #DEDDDD" />
              <label htmlFor="card">
                Permanent Resident card
                <a href="/">with signature</a>
              </label>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <button
          className={`next ${isUploaded ? "activeBtn" : "inactiveBtn"}`}
          onClick={handleChange}
        >
          Next
        </button>
        <img src={BlobMB} alt="Blob" className="mobileBottomVector" />
      </footer>
    </section>
  );
}

export default IdUpload;
