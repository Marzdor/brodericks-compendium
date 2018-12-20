import React from "react";

const Scavenging = () => {
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

  function rollDie(e) {
    const roll = Math.round(Math.random() * (100 - 1) + 1);

    setResult(roll, e.target.id);
  }

  function setResult(roll, diff) {
    let result;
    switch (true) {
      case roll >= tableData[diff][0][0] && roll <= tableData[diff][0][1]:
        result = roll + " - " + tableData[diff][0][2];
        break;
      case roll >= tableData[diff][1][0] && roll <= tableData[diff][1][1]:
        result = roll + " - " + tableData[diff][1][2];
        break;
      case roll >= tableData[diff][2][0] && roll <= tableData[diff][2][1]:
        result = roll + " - " + tableData[diff][2][2];
        break;
      case roll >= tableData[diff][3][0] && roll <= tableData[diff][3][1]:
        result = roll + " - " + tableData[diff][3][2];
        break;
      case roll >= tableData[diff][4][0] && roll <= tableData[diff][4][1]:
        result = roll + " - " + tableData[diff][4][2];
        break;
      case roll >= tableData[diff][5][0] && roll <= tableData[diff][5][1]:
        result = roll + " - " + tableData[diff][5][2];
        break;
      default:
        console.log("error: " + roll);
    }
    document.querySelector("#result-" + diff).innerHTML = result;
  }

  // making the tables
  const tables = [];
  for (let key in tableData) {
    tables.push(
      <div className="scaveng-table-body" key={key}>
        <p className="scaveng-table-body-l">
          {tableData[key][0][0] + " - " + tableData[key][0][1]}
        </p>
        <p className="scaveng-table-body-r">{tableData[key][0][2]}</p>
        <p className="scaveng-table-body-l">
          {tableData[key][1][0] + " - " + tableData[key][1][1]}
        </p>
        <p className="scaveng-table-body-r">{tableData[key][1][2]}</p>
        <p className="scaveng-table-body-l">
          {tableData[key][2][0] + " - " + tableData[key][2][1]}
        </p>
        <p className="scaveng-table-body-r">{tableData[key][2][2]}</p>
        <p className="scaveng-table-body-l">
          {tableData[key][3][0] + " - " + tableData[key][3][1]}
        </p>
        <p className="scaveng-table-body-r">{tableData[key][3][2]}</p>
        <p className="scaveng-table-body-l">
          {tableData[key][4][0] + " - " + tableData[key][4][1]}
        </p>
        <p className="scaveng-table-body-r">{tableData[key][4][2]}</p>
        <p className="scaveng-table-body-l scaveng-table-body--last">
          {tableData[key][5][0]}
        </p>
        <p className="scaveng-table-body-r scaveng-table-body--last">
          {tableData[key][5][2]}
        </p>
      </div>
    );
  }
  //
  // making roll elements
  const roll = [];
  for (let key in tableData) {
    roll.push(
      <div className="scaveng-roll" key={"roll-" + key}>
        <button className="scaveng-roll-btn" id={key} onClick={rollDie}>
          Roll
        </button>
        <p id={"result-" + key}>Result Appears Here</p>
      </div>
    );
  }

  return (
    <section className="container-scaveng">
      <h1 className="scaveng-title">d100 Table for Scavenging Plants</h1>
      <div className="scaveng-table">
        <h2 className="scaveng-table-title">Easy</h2>
        {tables[0]}
        <p className="scaveng-table-desc">
          Based on the number of plants on the list. Much more lenient.
        </p>
        {roll[0]}
      </div>
      <div className="scaveng-table">
        <h2 className="scaveng-table-title">Medium</h2>
        {tables[1]}
        <p className="scaveng-table-desc">
          More logarithmic. Slightly harder to do better on.
        </p>
        {roll[1]}
      </div>
      <div className="scaveng-table">
        <h2 className="scaveng-table-title">Hard</h2>
        {tables[2]}
        <p className="scaveng-table-desc">
          Very logarithmic. The actual result for legendary is a 0.38% success
          rate, so it’s pretty hard to do well.
        </p>
        {roll[2]}
      </div>
      <h2 className="scaveng-title">Scavenging Rules</h2>
      <p className="scaveng-desc">
        Usual method for nature scavenging is a nature check. 10-14 is mildly
        successful, 15-19 is successful, 20+ is very successful. This would mean
        that for a mild success, roll on the table with disadvantage, for a
        success, roll on the table to see what kind of plant you get, and for
        very successful roll with advantage. In most cases, 100 will also count
        as Very Rare, Legendary should only be in one or two places around the
        world, so make sure the setting’s right to get a Legendary plant.
      </p>
    </section>
  );
};

export default Scavenging;
