import React from "react";
import "./HeaderDate.css";

export default function HeaderDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  
   let now = new Date();
   let date = now.getDate();
   let day = days[now.getDay()];
   let month = months[now.getMonth()];
   let year = now.getFullYear();
   let hours = now.getHours();
   if (hours < 10) {
     hours =`0${hours}`;
   }
   let minutes = now.getMinutes();
   if (minutes < 10) {
     minutes = `0${minutes}`;
   } 

  return(
    <div className="HeaderDate">
    <div className="row">
          <div className="col-6">
            <h3 className="HeaderDate">Your Weather Forecast</h3>
          </div>
            <div className="col-6">
              <ul className="HeaderDate">
                <li>
                  <strong>{day}, {month} {date}, {year}</strong>
                </li>
                <li>
                  <strong>{hours}:{minutes}</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
  );
}
