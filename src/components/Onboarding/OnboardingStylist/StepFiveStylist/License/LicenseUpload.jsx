import React from "react";
import './LicenseUpload.scss';
import Logo from '../../../../../assets/logo-black.svg';
import { FaAngleLeft } from 'react-icons/fa';
import BlobMB from '../../../../../assets/mobileBlob.svg';
import Blob from '../../../../../assets/IdVector.svg';
import BlobPurpleMB from '../../../../../assets/VectorPurpleMb.svg';
import {IoCloudUploadOutline, IoDocumentText} from 'react-icons/io5';
import { MdCancel } from "react-icons/md";


function LicenseUpload() {
 
  return (
    <section className="licenseWrap">
      <header className="licenseWrap__Head">
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
          <h3 className="itemHead_Mobile">Perfect!
            <span> Please upload a 
            copy of your license.
            </span>
          </h3>
          <h3 className="itemHead_Desktop">Perfect! Please upload a copy of your license.</h3>
          <p className="smallText">
            Your privacy is important to us. We’ll only use this 
            <br/>document to verify your business and will never share 
            <br/>or post it publicly. 
          </p>
        </div>
        {/* Upload License */}
        <div className="itemTwo" >
          <div className="dropBox" style={{display: 'block'}}>
            <IoCloudUploadOutline  className="uploadIcon" />
            <form className="uploadButtons" encType="multipart/form-data">
              <h5>Drop files here or</h5>
              <input type="file" name="fileUpload" className="upload" accept="image/jpeg,image/jpg,image/png,application/pdf,application/doc,application/docx"/>
              <button className="browse">
                browse
              </button>
            </form>
            <p>Please upload a file in one of these formats:
              .doc, .docx, .pdf, .jpg, .jpeg, .png
            </p>
          </div>
          {/* Upload complete content */}
          <div className="uploadBox" style={{display: 'none'}}>
            <h5>File Upload</h5>
            <div className="childFlex">
              <IoDocumentText size={38} className="documentIcon"/>
              <div className="docInfo">
                <p className="fileName">Document-1.pdf</p>
                <div className="progressInfo">
                  <progress className="progressBar" value="80" max="100"></progress>
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
      </div>

      <footer>
        <button className="skip">Skip & continue later</button>
        <button className="next">Next</button>
        <img src={BlobMB} alt="Blob" className="mobileBottomVector" />
      </footer>
    </section>
  );
}

export default LicenseUpload;
