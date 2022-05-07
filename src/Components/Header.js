import React from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./Header.css";
import { DateRange } from "react-date-range";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { format } from "date-fns";
export const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [hideDate,setHideDate]=useState(false)
  const [options,setOptions]=useState(false)
  const [booking,setBooking]=useState({
      adult:1,
      children:0,
      room:1
  })

  const handleClick=(name,operation)=>{
      
      setBooking((prev)=>{
    return{
   ...prev,
   [name]:operation==="i"?booking[name]+1:booking[name]-1,
      }

  })
}

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
          Get gift woutchers and addiditonal discounts and Easy guidence and
          safety
        </p>
        <button className="btn">Register/Sign in</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="icons" />
            <input
              type="text"
              className="headerSearchInput"
              placeholder="Search for booking"
            />
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="icons" />
            <span onClick={()=>setHideDate(!hideDate)} className="headerSearchText">{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
          {hideDate &&  <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="icons" />
            <span  onClick={()=>setOptions(!options)} className="headerSearchText">{`${booking.adult} Adult . ${booking.children} Children . ${booking.room} Room `}</span>
            { options && <div className="options">
                <div className="optionItem">
                    <span>Adult</span>
                    <div className="innerOption">
                    <button className="b" disabled={booking.adult<=1} onClick={()=>handleClick("adult","d")}>-</button>
                    <span>{booking.adult}</span>
                    <button className="b" onClick={()=>handleClick("adult","i")}>+</button>
                </div>
                </div>
                <div className="optionItem">
                    <span>Children</span>
                <div className="innerOption">
                    <button className="b" disabled={booking.children<=0} onClick={()=>handleClick("children","d")}>-</button>
                    <span>{booking.children}</span>
                    <button className="b" onClick={()=>handleClick("children","i")}>+</button>
                </div>
                </div>
                <div className="optionItem">
                    <span>Room</span>
                <div className="innerOption">
                    <button className="b" disabled={booking.room<=1} onClick={()=>handleClick("room","d")}>-</button>
                    <span>{booking.room}</span>
                    <button className="b" onClick={()=>handleClick("room","i")}>+</button>
                </div>
                </div>


            </div>}
          </div>
          <button className="headerbtn">Search</button>
        </div>
      </div>
    </div>
  );
};
