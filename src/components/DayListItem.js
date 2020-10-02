import React from "react";
// import classnames from "classnames";
import "components/DayListItem.scss";


export default function DayListItem(props) {
  // create an object for the classNames function called dayClass that applies the following:
  // const itemClass = classnames......

  // const itemClass = classnames("day-list__item", {
  //   "day-list__item--selected": props.selected,
  //   "day-list__item--full": props.spots === 0
  // })


  // day-list__item all the time
  let dayClass  = "day-list__item";


  // day-list__item--selected class name if props.selected is true
  if (props.selected === true) {
    dayClass += " day-list__item--selected";
  }


  // day-list__item--full class name if props.spots is 0.
  if (props.spots === 0) {
    dayClass += " day-list__item--full";
	}

  return (
    <li class={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots}</h3>
    </li>
  );
}