import React, { useState } from "react";
import "../components/StylistProfilePage/PlaceholderContent/Placeholders.scss";
import Map from "../assets/Map.png";
import Pic from "../assets/BraidedLady.png";
import { MdEdit } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { TiLocation } from "react-icons/ti";
import { AiFillMessage, AiOutlineFileProtect } from "react-icons/ai";
import { RiDeleteBin7Fill, RiShieldCheckFill } from "react-icons/ri";
import {
  UploadPhoto,
  GalleryModal,
  AboutModal,
  AddOnModal,
  ServiceModal,
  PolicyModal,
  BusinessModal,
  ProfilePicture,
  BottomNavStylist,
  Footer,
  // Header,
} from "../components";
import { AnimatePresence } from "framer-motion";
import Carousel from "nuka-carousel";
import Header from "../components/StylistProfilePage/PlaceholderContent/Header";
import ReviewedFilled from "../components/StylistProfilePage/StylistProfileModals/ReviewFilled/ReviewFilled";
import {service, images, addon} from "../components/StylistProfilePage/PlaceholderContent/Placeholderdata";

function StylistProfile() {
  const [rating, setRating] = useState(0);
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  //modal
  const [openModal, setOpenModal] = useState({
    addPic: false,
    addProPic: false,
    gallery: false,
    about: false,
    service: false,
    addOn: false,
    privacy: false,
    business: false,
  });

  const handleModal = (
    addOn,
    addProPic,
    service,
    addPic,
    gallery,
    privacy,
    about,
    business
  ) => {
    setOpenModal((prevState) => {
      return {
        ...prevState,
        [addOn]: !prevState[addOn],
        [addProPic]: !prevState[addProPic],
        [addPic]: !prevState[addPic],
        [gallery]: !prevState[gallery],
        [about]: !prevState[about],
        [privacy]: !prevState[privacy],
        [service]: !prevState[service],
        [business]: !prevState[business],
      };
    });
  };
  return (
    <main className="contentWrap">
      <Header />

      <div className="content">
        {/* Stylist Name */}
        <div className="stylistName">
          <div className="profilePicture">
            <img src={Pic} alt="Profile Picture" />
          </div>

          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {openModal.addProPic && (
              <ProfilePicture
                openModal={openModal.addProPic}
                closeModal={setOpenModal}
              />
            )}
          </AnimatePresence>
          <div>
            <h5 className="name">Braids by Becky</h5>
            <div className="rating">
              <BsStarFill className="BsStarFill" />
              <h6 className="rate">0.0</h6>
              <span className="review">( 0 reviews )</span>
            </div>
          </div>
        </div>

        {/* Gallery upload */}
        <div className="galleryUpload_Placeholders">
          <div className="topButtons">
            <button
              className="showImage"
              onClick={() => handleModal("gallery")}
            >
              Show all photos
            </button>
            <AnimatePresence
              initial={false}
              exitBeforeEnter={true}
              onExitComplete={() => null}
            >
              {openModal.gallery && (
                <GalleryModal
                  openModal={openModal.gallery}
                  closeModal={setOpenModal}
                />
              )}
            </AnimatePresence>
            <button className="addImage" onClick={() => handleModal("addPic")}>
              <GrAdd className="GrAdd" /> Add Pictures
            </button>
            <AnimatePresence
              initial={false}
              exitBeforeEnter={true}
              onExitComplete={() => null}
            >
              {openModal.addPic && (
                <UploadPhoto
                  openModal={openModal.addPic}
                  closeModal={setOpenModal}
                />
              )}
            </AnimatePresence>
          </div>

          {/* desktop gallery items */}
          <div className="galleryItems">
            {images.map((image, id) => 
            <div className="image" key={id}>{image.item}</div>
            ) }
          </div>

          {/* mobile gallery carousel items */}
          <div className="galleryItems_Slide">
            <Carousel
              defaultControlsConfig={{
                pagingDotsStyle: {
                  fill: "#C4C4C4",
                },
              }}
              renderCenterLeftControls={true}
              renderCenterRightControls={true}
            >
              {images.map((image, id) => (
                <div className="image" key={id} draggable="false">
                  {image.item}
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="aboutPlaceholder">
          <div className="aboutPlaceholder_Left">
            <div className="aboutPlaceholder_Head">
              <h5 className="name">About</h5>
              <button
                className="editButton"
                onClick={() => handleModal("about")}
              >
                <MdEdit className="MdEdit" />
                Edit
              </button>
              <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                {openModal.about && (
                  <AboutModal
                    openModal={openModal.about}
                    closeModal={setOpenModal}
                  />
                )}
              </AnimatePresence>
            </div>
            {/* Text box for about */}
            <div className="aboutTextBox">
              <p className="text">
                Welcome to Braids by Becky, located in the heart of Toronto,
                Ontario, Canada. I’m an experienced hairdresser specialising in
                knotless braids, box braids, braided ponytails, and crochet. I
                look forward to meeting you!
              </p>
            </div>
          </div>

          <div className="aboutPlaceholder_Right">
            <div className="listItem">
              <TiLocation className="TiLocation" />
              <p>City, Country</p>
              <button className="editButton">
                {" "}
                <MdEdit className="MdEdit" />
              </button>
            </div>
            {/* Business Hour Modal */}
            <div className="listItem">
              <AiFillMessage className="AiFillMessage" />
              <p>Business hours</p>
              <button
                className="editButton"
                onClick={() => handleModal("business")}
              >
                {" "}
                <MdEdit className="MdEdit" />
              </button>
              <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                {openModal.business && (
                  <BusinessModal
                    openModal={openModal.business}
                    closeModal={setOpenModal}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Rules and cancellation policy */}
            <div className="listItem">
              <AiOutlineFileProtect className="AiOutlineFileProtect" />
              <p>Rules and cancellation policy</p>
              <button
                className="editButton"
                onClick={() => handleModal("policy")}
              >
                {" "}
                <MdEdit className="MdEdit" />
              </button>
              <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                {openModal.policy && (
                  <PolicyModal
                    openModal={openModal.policy}
                    closeModal={setOpenModal}
                  />
                )}
              </AnimatePresence>
            </div>
            <div className="listItem">
              <RiShieldCheckFill className="RiShieldCheckFill" />
              <p>Licensed Hairstylist</p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="servicePlaceholder">
          <div className="servicePlaceholder_Head">
            <h5 className="name">Services</h5>
            <button
              className="editButton"
              onClick={() => handleModal("service")}
            >
              <GrAdd className="GrAdd" />
              Add
            </button>
            <AnimatePresence
              initial={false}
              exitBeforeEnter={true}
              onExitComplete={() => null}
            >
              {openModal.service && (
                <ServiceModal
                  openModal={openModal.service}
                  closeModal={setOpenModal}
                />
              )}
            </AnimatePresence>
          </div>
          {/* Service items listed out */}
          <div className="serviceListBox">
            {service.map((item, id) => (
              <div className="serviceList" key={id}>
                <div className="list">
                  <p className="serviceName"> {item.serviceName} </p>
                  <span className="bar"></span>
                  <p className="price">
                    Starting from <span>${item.servicePrice} </span>{" "}
                  </p>
                </div>
                <div className="list">
                  <button
                    className="editButton"
                    onClick={() => handleModal("service")}
                  >
                    <MdEdit className="MdEdit" />
                  </button>
                  <AnimatePresence
                    initial={false}
                    exitBeforeEnter={true}
                    onExitComplete={() => null}
                  >
                    {openModal.service && (
                      <ServiceModal
                        openModal={openModal.service}
                        closeModal={setOpenModal}
                      />
                    )}
                  </AnimatePresence>
                  <button
                    type="button"
                    className="deleteButton"
                    // onClick={handleDelete}
                  >
                    <RiDeleteBin7Fill className="RiDeleteBin7Fill" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add-Ons */}
        <div className="addOnsPlaceholder">
          <div className="addOnsPlaceholder_Head">
            <h5 className="name">Add-Ons</h5>
            <button className="editButton" onClick={() => handleModal("addOn")}>
              <GrAdd className="GrAdd" />
              Add
            </button>
            <AnimatePresence
              initial={false}
              exitBeforeEnter={true}
              onExitComplete={() => null}
            >
              {openModal.addOn && (
                <AddOnModal
                  openModal={openModal.addOn}
                  closeModal={setOpenModal}
                />
              )}
            </AnimatePresence>
          </div>
          <div className="addonListBox">
            {addon.map((item, id) => (
              <div className="addonList" key={id}>
                <div className="list">
                  <p className="addonName"> {item.addonName} </p>
                  <span className="bar"></span>
                  <p className="price">
                    Starting from <span>${item.addonPrice} </span>{" "}
                  </p>
                </div>
                <div className="list">
                  <button
                    className="editButton"
                    onClick={() => handleModal("addOn")}
                  >
                    <MdEdit className="MdEdit" />
                  </button>
                  <AnimatePresence
                    initial={false}
                    exitBeforeEnter={true}
                    onExitComplete={() => null}
                  >
                    {openModal.addOn && (
                      <AddOnModal
                        openModal={openModal.addOn}
                        closeModal={setOpenModal}
                      />
                    )}
                  </AnimatePresence>
                  <button
                    type="button"
                    className="deleteButton"
                    // onClick={handleDelete}
                  >
                    <RiDeleteBin7Fill className="RiDeleteBin7Fill" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reviewsPlaceholder">
        <ReviewedFilled />
        </div>

        {/* Location */}
        <div className="locationPlaceholder">
          <div className="locationPlaceholder_Head">
            <h5 className="className">Location</h5>
          </div>
          {/* Map */}
          <img src={Map} alt="map" />
        </div>

        {/* Footer */}
        <BottomNavStylist />
      </div>
      
      <div className="footer">
        <Footer />
      </div>
    </main>
  );
}

export default StylistProfile;
