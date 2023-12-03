import React from "react";
import { Container, Heading, Stack, VStack } from "@chakra-ui/react";
import LearnNewWords from "../component/LearnNewWords";

const VocabLesson: React.FC = () => {
  return (
    // <div ="gray.100" color="white" p={10}>
    <>
      <Stack
        background="blue.500"
        p={5}
        alignItems={"center"}
        justifyContent="center"
        direction={{
          base: "column",
          md: "row",
        }}
        borderRadius={20}
      >
        <Heading size={"md"}>1000 TỪ CƠ BẢN</Heading>
      </Stack>
      <VStack>
        <LearnNewWords />
      </VStack>
    </>
  );
};

export default VocabLesson;
