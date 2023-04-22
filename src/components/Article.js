import React, { useState } from "react";

function Article() {
  const [hoveredWord, setHoveredWord] = useState("");

  const handleWordHover = (e) => {
    const word = e.target.textContent;
    setHoveredWord(word);
  };
  
  const handleWordLeave = () => {
    setHoveredWord("");
  };
  const paragraph = "This is a sample paragraph.";
  const words = paragraph.split(" ");

  return (
    <div>
      <p>
        {words.map((word, index) => (
          <span key={index} onMouseOver={handleWordHover} onMouseOut={handleWordLeave}>
            {word}{" "}
          </span>
        ))}
      </p>
      <p>Hovered word: {hoveredWord}</p>
    </div>
  );
}

export default Article;
