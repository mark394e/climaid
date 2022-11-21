import { useState } from "react";

function CalculationButton(props) {
  const [result, setResult] = useState();

  const calculate = (event) => {
    props.setResult((prevState) =>
      prevState.map((sm) => {
        return sm.minutes * sm.emission;
      })
    );
    console.log(result);
  };

  return <button onClick={calculate}>Click me!</button>;
}

export default CalculationButton;
