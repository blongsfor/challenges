import { useState } from "react";
import star from "../assets/star.svg";
import unstar from "../assets/unstar.svg";

export function Entry({ date, title, text }) {
  return (
    <>
      <div className="entry">
        <img className="bookmark-image" src={star} alt="bookmark" />
        <date>{date}</date>
        <h3 className="entry-titel">{title}</h3>
        <p className="entry-text">{text}</p>
      </div>
    </>
  );
}

/*
let [star, setStar] = useState(star);

function handleclick({ bookmark }) {
  setStar(bookmark);
}
*/
