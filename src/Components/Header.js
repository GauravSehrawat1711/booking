import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Hotels</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rental</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi</span>
          </div>
        </div>
        <h1 className="headerDis">
           Stay connected,Enjoy every holiday ,Get high discount 
        </h1>
        <p className="para">
          Get gift woutchers and addiditonal discounts and Easy guidence and safety
        </p>
        <button className="btn">Register/Sign in</button>
        <div className="headerSearch">
        <div className="headerSearchItem">
        <FontAwesomeIcon icon={faBed}  className="icons"/>
        <input type="text" className="headerSearchInput" placeholder="Search for booking"/>
        </div>
       
            <div className="headerSearchItem">
        <FontAwesomeIcon icon={faCalendarDays}  className="icons" />
       <span className="headerSearchText">from date to date</span>
        </div>
        <div className="headerSearchItem">

        
        <FontAwesomeIcon icon={faPerson}  className="icons" />
      <span className="headerSearchText">2 adults 1 child</span>
        </div>
        <button className="headerbtn">Search</button>
        </div>
      </div>
    </div>
  );
};
