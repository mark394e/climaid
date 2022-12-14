import React, { useRef, useState } from "react";

function SocialMediaProvider(props) {
  const [hours, setHours] = useState(0);

  const handleChange = (event) => {
    props.setSocialMedia((prevState) =>
      prevState.map((sm) => {
        if (sm.name === props.name) {
          const newSm = { ...sm };
          newSm.hours = Number(event.target.value);
          return newSm;
        }
        return sm;
      })
    );
  };

  return (
    <>
      <div className="cloud">
        <article className="some-article">
          <div className="article-top">
            <div className="logo">{props.logo}</div>
            <h3>{props.name}</h3>
          </div>
          <p>
            I produce {props.emission} kg / CO<sub>2</sub> pr. hour
          </p>
          <div className="slidecontainer">
            <input
              className="slider"
              onChange={handleChange}
              type="range"
              min="0"
              max="24"
              defaultValue="0"
              step="0.5"
            />
            <p className="hours">{props.hours} hours</p>
          </div>
        </article>
      </div>
    </>
  );
}

export default SocialMediaProvider;
