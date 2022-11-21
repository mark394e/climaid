function CalculationButton(props) {
  function scroll() {
    setTimeout(() => {
      window.scrollTo({ top: 2000, left: 2000, behavior: "smooth" });
    }, 10);
  }

  return (
    <button
      onClick={() => {
        props.setShowResults(true), scroll();
      }}
    >
      Click me!
    </button>
  );
}

export default CalculationButton;
