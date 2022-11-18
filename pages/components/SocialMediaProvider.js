function SocialMediaProvider(props) {
  return (
    <article className="some-article">
      <div className="article-top">
        <div className="logo">{props.logo}</div>
        <h3>{props.name}</h3>
      </div>
      <div className="slidecontainer">
        <input type="range" min="0" max="24" defaultValue="0" step="0.5"></input>
      </div>
    </article>
  );
}

export default SocialMediaProvider;
