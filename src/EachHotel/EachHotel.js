import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Header } from "../Components/Header";
import { NavBarHome } from "../Components/NavBarHome";
import "./Eachhotel.css";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { MailList } from "../Components/MailList";
import { Footer } from "../Components/Footer";
export const EachHotel = () => {
  const [slideNumber, setSilderNum] = useState(0);
  const [open, setOpen] = useState(false);
  const images = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAo1TvbZkp3ceKTKtydClAaJE-eXxltxieccsvDzPyu4pwoCTwA3N5ZVC89julmIVCIuU&usqp=CAU",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwj4HRQf3bMJDyAgH3rs6sAWcKYB3VIsrysrIU34EtccwSN4_KTkhgEA1o4DiWMEi2RO4&usqp=CAU",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejXc4b8vOe0v5-7KvRs6jyu2CYhrT4Nn2y1pVVqXmiH0GzE81XVeR4M-4fYDTyEhpzJ4&usqp=CAU",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYq5L302VJ0cRSfFtcmI-j9nsoKe_T-r5g5P-Dpjx-wvo0HIUI9Bl8tuuWxR8QgOlWXvI&usqp=CAU",
    },
    {
      src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
  ];

  const handleClick = (i) => {
    setSilderNum(i);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleArrow = (d) => {
    let newSlide;
    if (d === "l") {
      newSlide = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlide = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSilderNum(newSlide);
  };

  return (
    <div>
      <NavBarHome />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={handleClose}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleArrow("l")}
            />
            <div className="sliderWrap">
              <img src={images[slideNumber].src} className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleArrow("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Book Now</button>
          <h1 className="hotelTittle">Grand Hotel</h1>
          <div className="hotelAdd">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>21 Hotel Nagar ,New Delhi</span>
          </div>
          <span className="hotelDistance">Near 500m to new mertro line</span>
          <span className="hotelPrice">
            Booking your ticket at $120 and free 3 times meal
          </span>
          <div className="hotelImages">
            {images.map((photo, i) => (
              <div className="hotelImageWrap">
                <img
                  onClick={() => handleClick(i)}
                  src={photo.src}
                  alt="img"
                  className="hotelImage"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelText">
              <h1>Take A Sound Sleep At Hotel Grand</h1>
              <p>
                During a year that upended the entire world — and, with it, the
                entire hospitality industry — hotel groups large and small have
                demonstrated incredible perseverance. They've navigated
                lockdowns, donated rooms to first responders, found ways to
                support their staff, and, as conditions improved, welcomed back
                guests with service that may have looked a bit different but
                felt no less gracious. In fact, T+L readers awarded hotels even
                higher marks, on average, than last year, which is especially
                impressive given all of the COVID-19 safety protocols brands had
                to implement.
              </p>
            </div>
            <div className="price">
              <h1>Perfect Stay for 10 Days Just in</h1>
              <h2>
                <b>$954 </b>For 10 Days
              </h2>
              <span>We are Rated as 9.0 ,know as Heart of Delhi</span>

              <button>Book Now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};
