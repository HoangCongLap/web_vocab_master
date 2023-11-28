// lật bóng của từ vựng ./learn
import React, { useState } from "react";
import { Vocabulary } from "../data/Vocabulary";
interface Props {
  vocabulary: Vocabulary;
}

const FlipItemShadow = ({ vocabulary }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => {
    setIsFlipped(!isFlipped);
  };

  const cardStyle: React.CSSProperties = {
    width: "200px",
    height: "300px",
    perspective: "1000px",
    transformStyle: "preserve-3d",
    transition: "transform 0.5s",
    cursor: "pointer",
    transform: isFlipped ? "rotateY(180deg)" : "none",
    // margin: "auto",
    // position: "absolute",
    // top: "50px",
    // left: "50%",
  };

  const frontStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    position: "absolute",
    backfaceVisibility: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    background: "white",
    color: "black",
    borderRadius: "10px",
  };

  const backStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    position: "absolute",
    backfaceVisibility: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    background: "white",
    color: "black",
    borderRadius: "10px",
    transform: isFlipped ? "rotateY(180deg)" : "backStyle",
  };

  return (
    <div style={cardStyle} onClick={handleToggle}>
      <div style={frontStyle}>{vocabulary.trans}</div>
      <div style={backStyle}>{vocabulary.content}</div>
    </div>
  );
};

export default FlipItemShadow;
