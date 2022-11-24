import { useState } from "react";

function ShowMoreBtn(props) {
  const [isHidden, setIsHidden] = useState(false);

  function scroll() {
    let mobil_viewport = window.matchMedia("(max-width: 600px)");
    if (mobil_viewport.matches) {
      setTimeout(() => {
        window.scrollTo({ top: 4000, left: 4000, behavior: "smooth" });
      }, 10);
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 2200, left: 2200, behavior: "smooth" });
      }, 10);
    }
  }

  function toggleHiddenClass() {
    setIsHidden((current) => !current);
  }

  return (
    <button
      className={isHidden ? "hidden" : ""}
      onClick={() => {
        props.setShowMore(true), toggleHiddenClass(), scroll();
      }}
    >
      Show more
    </button>
  );
}

export default ShowMoreBtn;
