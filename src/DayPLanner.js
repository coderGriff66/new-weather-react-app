import React from "react";
import WxIcons from "./WxIcons";
import "./DayPlanner.css";

export default function DayPlanner(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ];
    
    return days[day];
  }
  function MaxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return`${temperature}°`;
  }

  function MinTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (

  <div className="PlannerPanels">
          <h5 className="DayPlanner-day">{day()}</h5>
            <div>
            <WxIcons code={props.data.weather[0].icon} size={45} />
            </div>
              <div className="DayPlanner-temps">
                <span className="maxTemp"><strong>{MaxTemp()}</strong></span>
              
                  <span className="minTemp">{MinTemp()}</span>
                </div>
        </div>
  );
}
