import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import Button from "components/Button";
import DayListItem from "components/DayListItem";
import Appointment from "components/Appointment";






// Stories of buttons

storiesOf("Button", module)
  .addParameters({
    backgrounds: [
      { name: "Cerulean", value: "#222f3e", default: true },
      { name: "Cosmo", value: "#1b1d1c", default: false },
      { name: "Cyborg", value: "#49c5b6", default: false },
      { name: "Darkly", value: "#3d3e3e", default: false },
      { name: "Flatly", value: "#51297f", default: false },
      { name: "Journal", value: "#fdd1ac", default: false },
      { name: "Litera", value: "#c6c6c6", default: false },
      { name: "Lumen", value: "#b4deec", default: false },
      { name: "Lux", value: "#ff584d", default: false },
      { name: "Materia", value: "#dfd7c2", default: false },
      { name: "Minty", value: "#49c5b6", default: false },
      { name: "Pulse", value: "#f04075", default: false },
      { name: "Sandstone", value: "#a66537", default: false },
      { name: "Simplex", value: "#d4cac1", default: false },
      { name: "Sketchy", value: "#927b62", default: false },
      { name: "Slate", value: "#272B30", default: false },
      { name: "Solar", value: "#002B36", default: false },
      { name: "Spacelab", value: "#6135d4", default: false },
      { name: "Superhero", value: "#2B3E50", default: false },
      { name: "ventablack", value: "#000000", default: false },
      { name: "Yeti", value: "#264942", default: false }]
  })
  .add("Base", () => <Button>Base</Button>)
  .add("Confirm", () => <Button confirm>Confirm</Button>)
  .add("Danger", () => <Button danger>Cancel</Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));

// Stories of Day List Item

  storiesOf("Day List Item", module) //Initiates Storybook and registers our DayListItem component
  .addParameters({
    backgrounds: [
      { name: "dark", value: "#222f3e", default: false },
      { name: "light", value: "#eaeaea", default: true },
    ]
  }) // Provides the default background color for our component
  .add("Unselected", () => <DayListItem name="Monday" spots={5} />) // To define our stories, we call add() once for each of our test states to generate a story
  .add("Selected", () => <DayListItem name="Monday" spots={5} selected />)
  .add("Full", () => <DayListItem name="Monday" spots={0} />)
  .add("Clickable", () => (
    <DayListItem name="Tuesday" setDay={action("setDay")} spots={5} /> // action() allows us to create a callback that appears in the actions panel when clicked
  ));


// Stories of Appointment
storiesOf("Appointment", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Appointment", () => <Appointment />)
  .add("Appointment with Time", () => <Appointment time="12pm" />);


  const days = [
    {
      id: 1,
      name: "Monday",
      spots: 2,
    },
    {
      id: 2,
      name: "Tuesday",
      spots: 5,
    },
    {
      id: 3,
      name: "Wednesday",
      spots: 0,
    },
    {
      id: 4,
      name: "Thursday",
      spots: 0,
    },
    {
      id: 5,
      name: "Friday",
      spots: 0,
    },
    {
      id: 6,
      name: "Saturday",
      spots: 0,
    },
    {
      id: 7,
      name: "Sunday",
      spots: 0,
    },
  ];

storiesOf("DayList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  })
  .add("Monday", () => (
    <DayList days={days} day={"Monday"} setDay={action("setDay")} />
  ))
  .add("Tuesday", () => (
    <DayList days={days} day={"Tuesday"} setDay={action("setDay")} />
  ));

  // Stories of Appointment
storiesOf("Appointment", module)
.addParameters({
  backgrounds: [{ name: "white", value: "#fff", default: true }]
})
.add("Appointment", () => <Appointment />)
.add("Appointment with Time", () => <Appointment time="12pm" />);




// Stories of Appointment
storiesOf("Appointment", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Appointment", () => <Appointment />)
  .add("Appointment with Time", () => <Appointment time="12pm" />);



  // Stories of Appointment
storiesOf("Appointment", module)
.addParameters({
  backgrounds: [{ name: "white", value: "#fff", default: true }]
})
.add("Appointment", () => <Appointment />)
.add("Appointment with Time", () => <Appointment time="12pm" />);



// Stories of Appointment
storiesOf("Appointment", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Appointment", () => <Appointment />)
  .add("Appointment with Time", () => <Appointment time="12pm" />);



  // Stories of Appointment
storiesOf("Appointment", module)
.addParameters({
  backgrounds: [{ name: "white", value: "#fff", default: true }]
})
.add("Appointment", () => <Appointment />)
.add("Appointment with Time", () => <Appointment time="12pm" />);