import React, { useState } from "react";

const HoverButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? "Done!" : " "}
    </button>
  );
};

export default HoverButton;
