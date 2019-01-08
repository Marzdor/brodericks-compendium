import React from "react";
import { Link } from "react-router-dom";

const Difficulty = props => {
  const tableData = {
    easy: [
      [1, 29, "Very Common"],
      [30, 57, "Common"],
      [56, 79, "Uncommon"],
      [80, 91, "Rare"],
      [92, 99, "Very Rare"],
      [100, 100, "Very Rare or Legendary"]
    ],
    medium: [
      [1, 53, "Very Common"],
      [54, 79, "Common"],
      [80, 91, "Uncommon"],
      [92, 96, "Rare"],
      [97, 99, "Very Rare"],
      [100, 100, "Very Rare or Legendary"]
    ],
    hard: [
      [1, 55, "Very Common"],
      [56, 81, "Common"],
      [82, 93, "Uncommon"],
      [94, 98, "Rare"],
      [99, 99, "Very Rare"],
      [100, 100, "Very Rare or Legendary"]
    ]
  };
  // making the tables
  const tables = [];
  for (let key in tableData) {
    tables.push(
      <div key={key}>
        <p>{tableData[key][0][0] + " - " + tableData[key][0][1]}</p>
        <p>{tableData[key][0][2]}</p>
        <p>{tableData[key][1][0] + " - " + tableData[key][1][1]}</p>
        <p>{tableData[key][1][2]}</p>
        <p>{tableData[key][2][0] + " - " + tableData[key][2][1]}</p>
        <p>{tableData[key][2][2]}</p>
        <p>{tableData[key][3][0] + " - " + tableData[key][3][1]}</p>
        <p>{tableData[key][3][2]}</p>
        <p>{tableData[key][4][0] + " - " + tableData[key][4][1]}</p>
        <p>{tableData[key][4][2]}</p>
        <p>{tableData[key][5][0]}</p>
        <p>{tableData[key][5][2]}</p>
      </div>
    );
  }
  //
  // making roll elements
  const roll = [];
  for (let key in tableData) {
    roll.push(
      <div key={"roll-" + key}>
        <Link id={key} onClick={props.diffClicked} to="/scavenge">
          Select
        </Link>
      </div>
    );
  }
  return (
    <section>
      <h1>Difficulty Selection</h1>
      <div>
        <h2>Easy</h2>
        {tables[0]}
        <p>Based on the number of plants on the list. Much more lenient.</p>
        {roll[0]}
      </div>
      <div>
        <h2>Medium</h2>
        {tables[1]}
        <p>More logarithmic. Slightly harder to do better on.</p>
        {roll[1]}
      </div>
      <div>
        <h2>Hard</h2>
        {tables[2]}
        <p>
          Very logarithmic. The actual result for legendary is a 0.38% success
          rate, so it’s pretty hard to do well.
        </p>
        {roll[2]}
      </div>
    </section>
  );
};

export default Difficulty;
