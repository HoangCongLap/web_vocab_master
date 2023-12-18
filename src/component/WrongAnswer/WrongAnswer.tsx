// import { Vocabulary } from "../../data/Vocabulary";

// interface Props {
//   vocabulary: Vocabulary;
// }

const WrongAnswer = () => {
  return (
    <div
      style={{
        left: "50px",
        width: "500px",
        height: "300px",
        backgroundColor: "#EB5757",
        position: "absolute",
        backfaceVisibility: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16px",
        background: "white",
        color: "black",
        borderRadius: "10px",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      WrongAnswer
    </div>
  );
};

export default WrongAnswer;
