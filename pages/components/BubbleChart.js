import React from "react";

function BubbleChart() {
  return (
    <>
      <div id="circleContainer">
        <div id="beefvfalafel">
          <div className="circle scale">
            <h3>&#129385;</h3>
          </div>

          <div className="circle scale-falafel">
            <h3>&#129478;</h3>
          </div>
        </div>

        <div id="oatvdairy">
          <div className="circle scale-oat">
            <h3>&#127806;</h3>
          </div>
          <div className="circle scale">
            <h3>&#129371;</h3>
          </div>
        </div>

        <div id="ricevpotato">
          <div className="circle scale">
            <h3>&#127834;</h3>
          </div>
          <div className="circle scale-potato">
            <h3>&#129364;</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default BubbleChart;
