import React from "react";
import { Link } from "react-router-dom";

const Difficulty = props => {
  // making the tables
  const tables = [];
  for (let key in props.tableData) {
    tables.push(
      <div key={key}>
        <p>{props.tableData[key][0][0] + " - " + props.tableData[key][0][1]}</p>
        <p>{props.tableData[key][0][2]}</p>
        <p>{props.tableData[key][1][0] + " - " + props.tableData[key][1][1]}</p>
        <p>{props.tableData[key][1][2]}</p>
        <p>{props.tableData[key][2][0] + " - " + props.tableData[key][2][1]}</p>
        <p>{props.tableData[key][2][2]}</p>
        <p>{props.tableData[key][3][0] + " - " + props.tableData[key][3][1]}</p>
        <p>{props.tableData[key][3][2]}</p>
        <p>{props.tableData[key][4][0] + " - " + props.tableData[key][4][1]}</p>
        <p>{props.tableData[key][4][2]}</p>
        <p>{props.tableData[key][5][0]}</p>
        <p>{props.tableData[key][5][2]}</p>
      </div>
    );
  }
  //
  // making roll elements
  const roll = [];
  for (let key in props.tableData) {
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
