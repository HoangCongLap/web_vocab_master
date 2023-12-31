import { Text } from "@chakra-ui/react";

export default function Logo() {
  return (
    <button className="button" data-text="Awesome">
      <span className="actual-text">&nbsp;VocabMaster&nbsp;</span>
      <span aria-hidden="true" className="hover-text">
        &nbsp;VocabMaster&nbsp;
      </span>
    </button>
    // <Text
    //   fontSize="xx-large"
    //   fontWeight={"50%"}
    //   fontFamily="cursive"
    //   color="gray.200"
    //   minW={200}
    // >
    //   VocabMaster
    // </Text>
  );
}
