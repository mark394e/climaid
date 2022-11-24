import FooterContent from "./FooterContent";

function Footer(props) {
  if (props.showResults == false) {
    //Footeren styles forskelligt alt efter om resultaterne vises eller ej
    return (
      <footer style={{ background: "rgb(21, 19, 57)", color: "whitesmoke" }}>
        <FooterContent />
      </footer>
    );
  }

  return (
    <footer>
      <FooterContent />
    </footer>
  );
}

export default Footer;
