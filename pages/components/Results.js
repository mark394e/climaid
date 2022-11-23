import { useState } from "react";
import BubbleChart from "./BubbleChart";
import ShowMoreBtn from "./ShowMoreBtn";

function Results(props) {
  const [showMore, setShowMore] = useState(false);

  let co2 = 0;

  props.socialMedia.forEach((element) => {
    co2 += element.hours * element.emission;
  });

  const beef = (co2 / 15.5).toFixed(2);
  const falafel = (co2 / 1).toFixed(2);
  const oat = (co2 / 0.88).toFixed(2);
  const dairy = (co2 / 3.2).toFixed(2);
  const rice = (co2 / 1.6).toFixed(2);
  const potatoes = (co2 / 0.5).toFixed(2);

  return (
    <>
      {" "}
      <h2>RESULT</h2>
      <div className="result_illustrations">
        <BubbleChart></BubbleChart>
        <div className="co2day">
          <h3>
            {co2.toFixed(2)} kg. CO<sub>2</sub> a day!
          </h3>
          <h4>
            With your CO<sub>2</sub> footprint you can produce...
          </h4>
          <div>
            <Produce
              productName="beef"
              amount={beef}
              productName2="falafel"
              amount2={falafel}
            ></Produce>
          </div>
          <div className="breakline"></div>
          <div>
            <ProduceL
              productName="dairy milk"
              amount={dairy}
              productName2="oat milk"
              amount2={oat}
            ></ProduceL>
          </div>
          <div className="breakline"></div>
          <div>
            <Produce
              productName="rice"
              amount={rice}
              productName2="potatoes"
              amount2={potatoes}
            ></Produce>
          </div>
        </div>
        {showMore && (
          <>
            <div className="co2week">
              <h3>
                {(co2 * 7).toFixed(2)} kg. CO<sub>2</sub> a week!
              </h3>
              <h4>Same as...</h4>
              <div>
                <Produce
                  productName="beef"
                  amount={beef * 7}
                  productName2="falafel"
                  amount2={falafel * 7}
                ></Produce>
              </div>
              <div className="breakline"></div>
              <div>
                <ProduceL
                  productName="dairy milk"
                  amount={dairy * 7}
                  productName2="oat milk"
                  amount2={oat * 7}
                ></ProduceL>
              </div>
              <div className="breakline"></div>
              <div>
                <Produce
                  productName="rice"
                  amount={rice * 7}
                  productName2="potatoes"
                  amount2={potatoes * 7}
                ></Produce>
              </div>
            </div>
            <div className="co2month">
              <h3>
                {(co2 * 30).toFixed(2)} kg. CO<sub>2</sub> a month!
              </h3>
              <h4>Same as...</h4>
              <div>
                <Produce
                  productName="beef"
                  amount={beef * 30}
                  productName2="falafel"
                  amount2={falafel * 30}
                ></Produce>
              </div>
              <div className="breakline"></div>
              <div>
                <ProduceL
                  productName="dairy milk"
                  amount={dairy * 30}
                  productName2="oat milk"
                  amount2={oat * 30}
                ></ProduceL>
              </div>
              <div className="breakline"></div>
              <div>
                <Produce
                  productName="rice"
                  amount={rice * 30}
                  productName2="potatoes"
                  amount2={potatoes * 30}
                ></Produce>
              </div>
            </div>
          </>
        )}
        <div className="co2year">
          <h3>
            {(365 * co2).toFixed(2)} kg. CO<sub>2</sub> a year!
          </h3>
          <h4>Same as...</h4>
          <div>
            <Produce
              productName="beef"
              amount={beef * 365}
              productName2="falafel"
              amount2={falafel * 365}
            ></Produce>
          </div>
          <div className="breakline"></div>
          <div>
            <ProduceL
              productName="dairy milk"
              amount={dairy * 365}
              productName2="oat milk"
              amount2={oat * 365}
            ></ProduceL>
          </div>
          <div className="breakline"></div>
          <div>
            <Produce
              productName="rice"
              amount={rice * 365}
              productName2="potatoes"
              amount2={potatoes * 365}
            ></Produce>
          </div>
        </div>
        <div className="clickbutton">
          <ShowMoreBtn
            setShowMore={setShowMore}
            showMore={showMore}
          ></ShowMoreBtn>
        </div>
      </div>
    </>
  );
}

export default Results;

function Produce(props) {
  return (
    <p>
      {props.amount} kg {props.productName} or {props.amount2} kg{" "}
      {props.productName2}.
    </p>
  );
}

function ProduceL(props) {
  return (
    <p>
      {props.amount} L {props.productName} or {props.amount2} L{" "}
      {props.productName2}
    </p>
  );
}
