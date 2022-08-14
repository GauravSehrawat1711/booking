import React, { useState } from "react";
import "./List.css";
import { Header } from "../Components/Header";
import { NavBarHome } from "../Components/NavBarHome";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../Components/SearchItem";

export const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [booking, setOptions] = useState(location.state.booking);
  const [openDate, setOpenDate] = useState(false);
  console.log(booking)

  return (
    <div className="main">
      <NavBarHome />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h2>Search</h2>
            <div className="lsitem">
              <label>Destination</label>
              <input type="text" value={destination} onChange={(e)=>setDestination(e.target.value)}/>
            </div>
            <div className="lsitem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsitem">
              <label className="a">Options</label>
              <div className="allInfo">

              <div className="lsOptionsItem">
                <span className="lsOptionText">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>

              <div className="lsOptionsItem">
                <span className="lsOptionText">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>


              <div className="lsOptionsItem">
                <span className="lsOptionText">
                  Adult
                </span>
                <input  type="number" placeholder={booking.adult} min={1} className="lsOptionInput" />
              </div>


              <div className="lsOptionsItem">
                <span className="lsOptionText">
                Children
                </span>
                <input   type="number" min={0} placeholder={booking.children} className="lsOptionInput" />
              </div>

              <div className="lsOptionsItem">
                <span className="lsOptionText">
               Room
                </span>
                <input  type="number" min={1} placeholder={booking.room} className="lsOptionInput" />
              </div>

            </div>
              </div>
              <button>Search</button>
          </div>
          <div className="listResult">
             <SearchItem/>
             <SearchItem/>
             <SearchItem/>
             <SearchItem/>
             <SearchItem/>
             <SearchItem/>


          </div>
        </div>
      </div>
    </div>
  );
};
