function Footer(props) {
  if (props.showResults == false) {
    //Footeren styles forskelligt alt efter om resultaterne vises eller ej
    return (
      <footer style={{ background: "none" }}>
        {" "}
        <p>KEA-caseopgave for Forte Advice</p>
        <p>© Janne Hjuler, Markus Hoffman og Marikka Højen</p>
      </footer>
    );
  }

  return (
    <footer>
      <p>KEA-caseopgave for Forte Advice</p>
      <p>© Janne Hjuler, Markus Hoffman og Marikka Højen</p>
    </footer>
  );
}

export default Footer;
