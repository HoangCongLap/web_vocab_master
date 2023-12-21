import { Button, Container, Image, VStack } from "@chakra-ui/react";

import Book from "../../img/book.png";

const EndOfLesson = () => {
  return (
    <Container
      minW="400px"
      maxW="50%"
      maxH="100%"
      bg="gray.100"
      height="calc(100vh)"
      color="white"
    >
      <VStack>
        <p
          style={{
            color: "#FFCB08",
            fontSize: "24px",
            fontWeight: "Bold",
            marginTop: "30px",
          }}
        >
          Bạn đã học 10 từ
        </p>
        <Image
          marginTop="30px"
          borderRadius="20px"
          boxSize="300px"
          src={Book}
          alt="Dan Abramov"
        />
        <Button
          fontSize={"20px"}
          height={"50px"}
          width={"250px"}
          color={"#fff"}
          borderRadius={"50px"}
          marginTop={"200px"}
          background={"linear-gradient(83deg, #58cc02 19.02%, #23ac38 90.81%)"}
          onClick={handleOnclickCompletesLearning}
        >
          Tiếp Tục
        </Button>
      </VStack>
    </Container>
  );
};

export default EndOfLesson;
