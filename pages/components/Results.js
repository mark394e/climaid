import { useState } from "react";

function Results(props) {
  let co2 = 0;

  props.socialMedia.forEach((element) => {
    co2 += element.minutes * element.emission;
  });

  const beef = 15500 / co2;
  const tofu = 800 / co2;
  const oat = 880 / co2;
  const dairy = 3200 / co2;
  const rice = 1600 / co2;
  const potatoes = 500 / co2;

  return (
    <>
      <h2>RESULT</h2>
      <div>
        <div className="co2day">
          <h3>{co2.toFixed(2)} g. CO2 a day!</h3>
          <h4>Same as...</h4>
          <p>
            {beef.toFixed(2)} kg beef or
            <br />
            {tofu.toFixed(2)} kg tofu!
          </p>
          <p>
            {dairy.toFixed(2)} L dairy milk or
            <br />
            {oat.toFixed(2)} L oat milk!
          </p>
          <p>
            {rice.toFixed(2)} kg rice or
            <br />
            {potatoes.toFixed(2)} kg potatoes!
          </p>
        </div>
        <div className="co2week">
          <h3>{(co2 * 7).toFixed(2)} g. CO2 a week!</h3>
          <h4>Same as...</h4>
          <p>
            {(beef * 7).toFixed(2)} kg beef or
            <br />
            {(tofu * 7).toFixed(2)} kg tofu!
          </p>
          <p>
            {(dairy * 7).toFixed(2)} L dairy milk or
            <br />
            {(oat * 7).toFixed(2)} L oat milk!
          </p>
          <p>
            {(rice * 7).toFixed(2)} kg rice or
            <br />
            {(potatoes * 7).toFixed(2)} kg potatoes!
          </p>
        </div>
        <div className="co2month">
          <h3>{co2.toFixed(2) * 30} g. CO2 a month!</h3>
          <h4>Same as...</h4>
          <p>
            {(beef * 30).toFixed(2)} kg beef or
            <br />
            {(tofu * 30).toFixed(2)} kg tofu!
          </p>
          <p>
            {(dairy * 30).toFixed(2)} L dairy milk or
            <br />
            {(oat * 30).toFixed(2)} L oat milk!
          </p>
          <p>
            {(rice * 30).toFixed(2)} kg rice or
            <br />
            {(potatoes * 30).toFixed(2)} kg potatoes!
          </p>
        </div>
        <div className="co2year">
          <h3>{365 * co2.toFixed(2)} g. CO2 a year!</h3>
          <h4>Same as...</h4>
          <p>
            {(beef * 365).toFixed(2)} kg beef or
            <br />
            {(tofu * 365).toFixed(2)} kg tofu!
          </p>
          <p>
            {(dairy * 365).toFixed(2)} L dairy milk or
            <br />
            {(oat * 365).toFixed(2)} L oat!
          </p>
          <p>
            {(rice * 365).toFixed(2)} kg rice or
            <br />
            {(potatoes * 365).toFixed(2)} kg potatoes!
          </p>
        </div>
      </div>
    </>
  );
}

export default Results;
