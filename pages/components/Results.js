function Results(props) {
  let co2 = 0;

  props.socialMedia.forEach((element) => {
    co2 += element.minutes * element.emission;
  });

  return (
    <>
      <h2>Resultat</h2>
      <p>{co2.toFixed(2)} gEqCo2/hr</p>
    </>
  );
}

export default Results;
