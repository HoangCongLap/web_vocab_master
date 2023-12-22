// import { Vocabulary } from "../../data/Vocabulary";

import { Vocabulary } from "../../data/Vocabulary";

interface Props {
  vocabulary: Vocabulary;
}

const WrongAnswer = ({ vocabulary }: Props) => {
  return (
    <div
      style={{
        left: "50px",
        width: "500px",
        height: "300px",
        backgroundColor: "#EB5757",
        // position: "absolute",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16px",
        color: "white",
        borderRadius: "20px",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      {vocabulary.content}
      {vocabulary.phonetic}
      {vocabulary.trans}
      {vocabulary.en_hint}
    </div>
  );
};

export default WrongAnswer;
