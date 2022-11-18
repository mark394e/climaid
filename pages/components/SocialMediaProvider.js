function SocialMediaProvider(props) {
  return (
    <article className="some-article">
      <div className="">{props.logo}</div>
      <h3>{props.name}</h3>
      <div className="slidecontainer">
        <input type="range" min="1" max="10" defaultValue="0"></input>
      </div>
    </article>
  );
}

export default SocialMediaProvider;
