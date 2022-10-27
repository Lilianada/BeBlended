import React, { useState } from "react";
import ClientHeader from "../ClientHeader/ClientHeader";
import "./ClientHero.scss";
import { RiSearchLine } from "react-icons/ri";

function ClientHero() {
  // const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    // setOpen(true);
  };

  return (
    <section className="clientHero__Wrapper">
      <ClientHeader />
        <div className="clientHero__Texts">
            <h5 className="smallHead">Afro-hair care</h5>
            <h2 className="clientHero__Head">
                Find a skilled
                <br />
                hairstylist near you
            </h2>
            <div className="mobileSearch">
                <div className="searchBox">
                    <div className="heroInput__Wrap">
                        <div className="inputWrap">
                            <label htmlFor="what">What</label>
                            <input
                            type="search"
                            name="what"
                            placeholder="Hairstyle, Hairstylist etc."
                            aria-label="search"
                            />
                        </div>
                        <hr />
                        <div className="inputWrap">
                            <label htmlFor="Where">Where</label>
                            <input
                            type="search"
                            name="where"
                            placeholder="Toronto, Montreal etc."
                            aria-label="search"
                            />
                        </div>
                        <hr/>
                        <div className="buttonsWrap">
                            <button className="clearBtn" onClick={handleClick} type="submit">
                                Clear
                            </button>
                            <button className="searchBtn" onClick={handleClick} type="submit">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="desktopSearch">
                <div className="searchBox">
                    <div className="heroInput__Wrap">
                        <div className="inputWrap">
                            <label htmlFor="what">What</label>
                            <input
                            type="search"
                            name="what"
                            placeholder="Hairstyle, Hairstylist etc."
                            aria-label="search"
                            />
                        </div>
                        <hr />
                        <div className="inputWrap">
                            <label htmlFor="Where">Where</label>
                            <input
                            type="search"
                            name="where"
                            placeholder="Toronto, Montreal etc."
                            aria-label="search"
                            />
                        </div>
                    </div>
                    <button className="searchIcon" onClick={handleClick} type="submit">
                        <RiSearchLine size={28} fill="white" />
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
}

export default ClientHero;
