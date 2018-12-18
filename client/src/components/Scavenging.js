import React from "react";

const Scavenging = () => {
  return (
    <section className="container-scaveng">
      <h1>d100 Table for Scavenging Plants</h1>
      <div className="scaveng-table">
        <h2 className="scaveng-table-title">Easy</h2>
        <div className="scaveng-table-body">
          <p className="scaveng-table-body-l">1 - 29</p>
          <p className="scaveng-table-body-r">Very Common</p>
          <p className="scaveng-table-body-l">30 - 57</p>
          <p className="scaveng-table-body-r">Common</p>
          <p className="scaveng-table-body-l">56 - 79</p>
          <p className="scaveng-table-body-r">Uncommon</p>
          <p className="scaveng-table-body-l">80 - 91</p>
          <p className="scaveng-table-body-r">Rare</p>
          <p className="scaveng-table-body-l">92 - 99</p>
          <p className="scaveng-table-body-r">Very Rare</p>
          <p className="scaveng-table-body-l scaveng-table-body--last">100</p>
          <p className="scaveng-table-body-r scaveng-table-body--last">
            Very Rare or Legendary
          </p>
        </div>
        <p className="scaveng-table-desc">
          Based on the number of plants on the list. Much more lenient.
        </p>
      </div>
      <div className="scaveng-table">
        <h2 className="scaveng-table-title">Medium</h2>
        <div className="scaveng-table-body">
          <p className="scaveng-table-body-l">1 - 53</p>
          <p className="scaveng-table-body-r">Very Common</p>
          <p className="scaveng-table-body-l">54 - 79</p>
          <p className="scaveng-table-body-r">Common</p>
          <p className="scaveng-table-body-l">80 - 91</p>
          <p className="scaveng-table-body-r">Uncommon</p>
          <p className="scaveng-table-body-l">92 - 96</p>
          <p className="scaveng-table-body-r">Rare</p>
          <p className="scaveng-table-body-l">97 - 99</p>
          <p className="scaveng-table-body-r">Very Rare</p>
          <p className="scaveng-table-body-l scaveng-table-body--last">100</p>
          <p className="scaveng-table-body-r scaveng-table-body--last">
            Very Rare or Legendary
          </p>
        </div>
        <p className="scaveng-table-desc">
          More logarithmic. Slightly harder to do better on.
        </p>
      </div>
      <div className="scaveng-table">
        <h2 className="scaveng-table-title">Hard</h2>
        <div className="scaveng-table-body">
          <p className="scaveng-table-body-l">1 - 55</p>
          <p className="scaveng-table-body-r">Very Common</p>
          <p className="scaveng-table-body-l">56 – 81</p>
          <p className="scaveng-table-body-r">Common</p>
          <p className="scaveng-table-body-l">82 - 93</p>
          <p className="scaveng-table-body-r">Uncommon</p>
          <p className="scaveng-table-body-l">94 - 98</p>
          <p className="scaveng-table-body-r">Rare</p>
          <p className="scaveng-table-body-l">99</p>
          <p className="scaveng-table-body-r">Very Rare</p>
          <p className="scaveng-table-body-l scaveng-table-body--last">100</p>
          <p className="scaveng-table-body-r scaveng-table-body--last">
            Very Rare or Legendary
          </p>
        </div>
        <p className="scaveng-table-desc">
          Very logarithmic. The actual result for legendary is a 0.38% success
          rate, so it’s pretty hard to do well.
        </p>
      </div>
      <h2>Scavenging Rules</h2>
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
