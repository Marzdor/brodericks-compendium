import React from "react";

const Scavenging = () => {
  return (
    <section className="container-scaveng">
      <h1 className="scaveng-title">d100 Table for Scavenging Plants</h1>
      <div>
        <h2 className="scaveng-title-sub">Easy</h2>
        <div className="scaveng-table">
          <p className="scaveng-table--l">1 - 29</p>
          <p className="scaveng-table--r">Very Common</p>
          <p className="scaveng-table--l">30 - 57</p>
          <p className="scaveng-table--r">Common</p>
          <p className="scaveng-table--l">56 - 79</p>
          <p className="scaveng-table--r">Uncommon</p>
          <p className="scaveng-table--l">80 - 91</p>
          <p className="scaveng-table--r">Rare</p>
          <p className="scaveng-table--l">92 - 99</p>
          <p className="scaveng-table--r">Very Rare</p>
          <p className="scaveng-table--l">100</p>
          <p className="scaveng-table--r">Very Rare or Legendary</p>
        </div>
        <p className="scaveng-desc">
          (Based on the number of plants on the list. Much more lenient.)
        </p>
      </div>
      <div>
        <h2 className="scaveng-title-sub">Medium</h2>
        <div className="scaveng-table">
          <p className="scaveng-table--l">1 - 29</p>
          <p className="scaveng-table--r">Very Common</p>
          <p className="scaveng-table--l">30 - 57</p>
          <p className="scaveng-table--r">Common</p>
          <p className="scaveng-table--l">56 - 79</p>
          <p className="scaveng-table--r">Uncommon</p>
          <p className="scaveng-table--l">80 - 91</p>
          <p className="scaveng-table--r">Rare</p>
          <p className="scaveng-table--l">92 - 99</p>
          <p className="scaveng-table--r">Very Rare</p>
          <p className="scaveng-table--l">100</p>
          <p className="scaveng-table--r">Very Rare or Legendary</p>
        </div>
        <p className="scaveng-desc">
          (More logarithmic. Slightly harder to do better on.)
        </p>
      </div>
      <div>
        <h2 className="scaveng-title-sub">Hard</h2>
        <div className="scaveng-table">
          <p className="scaveng-table--l">1 - 29</p>
          <p className="scaveng-table--r">Very Common</p>
          <p className="scaveng-table--l">30 - 57</p>
          <p className="scaveng-table--r">Common</p>
          <p className="scaveng-table--l">56 - 79</p>
          <p className="scaveng-table--r">Uncommon</p>
          <p className="scaveng-table--l">80 - 91</p>
          <p className="scaveng-table--r">Rare</p>
          <p className="scaveng-table--l">92 - 99</p>
          <p className="scaveng-table--r">Very Rare</p>
          <p className="scaveng-table--l">100</p>
          <p className="scaveng-table--r">Very Rare or Legendary</p>
        </div>
        <p className="scaveng-desc">
          (Very logarithmic. The actual result for legendary is a 0.38% success
          rate, so it’s pretty hard to do well.)
        </p>
      </div>
      <h2 className="scaveng-title">Scavenging Rules</h2>
      <p className="scaveng-rules">
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
