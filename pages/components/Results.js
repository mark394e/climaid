import { useState } from "react";

function Results(props) {
  let co2 = 0;

  props.socialMedia.forEach((element) => {
    co2 += element.minutes * element.emission;
  });

  const beef = co2 / 15500;
  const tofu = co2 / 800;
  const oat = co2 / 880;
  const dairy = co2 / 3200;
  const rice = co2 / 1600;
  const potatoes = co2 / 500;

  return (
    <>
      <h2>RESULT</h2>
      <div className="co2day">
        <h3>{co2.toFixed(2)} g. CO2 a day!</h3>
        <h4>In comparisson</h4>
        <Produce productName="beef" amount={beef}></Produce>
        <Produce productName="tofu" amount={tofu}></Produce>
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
    </>
  );
}

export default Results;

function Produce(props) {
  return (
    <p>
      With your co2 footprint you can produce {props.amount.toFixed(2)}kg of {props.productName}!
    </p>
  );
}
