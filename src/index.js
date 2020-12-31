// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);

//
//
//

// import animals from "./data";
// //  to assign a name to the objects in the array animal
// const [cat, dog] = animals;

// // to assign a name to the properties of the object cat.
// //The name should be same as the property name in the array
// // to assign a new name to the name to the name below we can use :

// // to assign a name to the property
// // const { name: catName, sound: catSound } = cat;

// // to default a value to the property
// //const { name = "Fuffy", sound = "Purr" } = cat;

// // to get a object property of an property
// const {
//   name,
//   sound,
//   feedingRequirements: { food, water }
// } = cat;

// console.log(food);
