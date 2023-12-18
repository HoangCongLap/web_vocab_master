import React from "react";
import { Heading, Stack, VStack } from "@chakra-ui/react";
import LearnNewWords from "../component/LearnVocab/LearnVocab";
import { useParams } from "react-router";

const VocabLesson: React.FC = () => {
  return (
    // <div ="gray.100" color="white" p={10}>
    <>
      <Stack
        width={"85%"}
        background={"linear-gradient(0deg , #387ed9 65.50%, #0023ac 100.81%)"}
        boxShadow={"0 6px 0 0 #00209b"}
        p={5}
        alignItems={"center"}
        justifyContent="center"
        direction={{
          base: "column",
          md: "row",
        }}
        borderRadius={20}
        style={{ margin: "0 auto", marginTop: "20px" }}
      >
        <Heading fontSize={30}>1000 TỪ CƠ BẢN</Heading>
      </Stack>
      <VStack>
        <LearnNewWords courseId={1} />
      </VStack>
    </>
  );
};

export default VocabLesson;
