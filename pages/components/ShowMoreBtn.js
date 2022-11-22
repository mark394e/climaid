import { useState } from "react";

function ShowMoreBtn(props) {
  const [isHidden, setIsHidden] = useState(false);

  function scroll() {
    setTimeout(() => {
      window.scrollTo({ top: 2200, left: 2200, behavior: "smooth" });
    }, 10);
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
