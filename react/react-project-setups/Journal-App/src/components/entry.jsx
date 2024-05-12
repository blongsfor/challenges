import { useState } from "react";
import star from "../assets/star.svg";
import unstar from "../assets/unstar.svg";

export function Entry({ date, motto, notes }) {
  const [isStarred, setIsStarred] = useState(false);
  const handleClick = () => {
    setIsStarred(!isStarred);
  };

  return (
    <>
      <div className="entry">
        <img
          className="bookmark-image"
          src={isStarred ? unstar : star}
          alt={isStarred ? "unstar" : "star"}
          onClick={handleClick}
        />
        <date>{date}</date>
        <h3 className="entry-titel">{motto}</h3>
        <p className="entry-text">{notes}</p>
      </div>
    </>
  );
}
