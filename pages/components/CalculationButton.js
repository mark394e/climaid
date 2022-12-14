import React, { useState } from "react";

function CalculationButton(props) {
  const [active, setActive] = useState(true);

  //Hvis der ikke er ændret på hours, skal calculation-knappen være inaktiv

  const hasHours = (element) => element.hours > 0 && active;

  if (props.socialMedia && props.socialMedia.some(hasHours)) {
    setActive(false);
  }

  //Når der klikkes, skal vi scroll
  function scroll() {
    let mobil_viewport = window.matchMedia("(max-width: 600px)");
    if (mobil_viewport.matches) {
      setTimeout(() => {
        window.scrollTo({ top: 3350, left: 3350, behavior: "smooth" });
      }, 10);
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 1700, left: 1700, behavior: "smooth" });
      }, 10);
    }
  }

  return (
    <button
      onClick={() => {
        props.setShowResults(true), scroll();
      }}
      //Disabled er en boolian som i udgangspunktet er true, indtil socialmedia.hours er over 0
      disabled={active}
    >
      Calculate
    </button>
  );
}

export default CalculationButton;
