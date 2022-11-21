import { useState } from "react";

function CalculationButton(props) {
  //   const [result, setResult] = useState([]);

  return <button onClick={() => props.setShowResults(true)}>Click me!</button>;
}

export default CalculationButton;
