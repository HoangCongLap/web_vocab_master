import {
  Button,
  CircularProgress,
  CircularProgressLabel,
  CloseButton,
  Container,
  Stack,
  VStack,
} from "@chakra-ui/react";

import Book from "../../img/book.png";
import { useNavigate } from "react-router";
import StyledButton from "../StyledButton";

const EndOfReviewAnswer = () => {
  const navigate = useNavigate();
  const handleOnclickCompletesLearning = () => {
    navigate("/lessonvocab/1");
  };
  const handleOnClickCloseReviewAnswer = () => {
    navigate("/review");
  };
  return (
    <Container
      minW="400px"
      maxW="50%"
      maxH="100%"
      bg="gray.100"
      height="calc(100vh)"
      color="white"
    >
      <Stack>
        <CloseButton
          size="lg"
          fontSize={20}
          marginTop={2}
          onClick={handleOnClickCloseReviewAnswer}
        />
      </Stack>
      <VStack>
        <p
          style={{
            color: "#66BB6A",
            fontSize: "24px",
            fontWeight: "Bold",
            marginTop: "30px",
          }}
        >
          Cố lên, bạn có thể làm được mà
        </p>
        <Stack marginTop={10}>
          <CircularProgress size={200} value={40} color="green.400">
            <CircularProgressLabel color={"green.400"}>
              40%
            </CircularProgressLabel>
          </CircularProgress>
        </Stack>
        <p
          style={{
            color: "#66BB6A",
            fontSize: "18px",
            marginTop: "30px",
          }}
        >
          Bạn đã trả lời đúng 1/6 câu
        </p>

        <StyledButton onClick={handleOnclickCompletesLearning}>
          Tiếp Tục
        </StyledButton>
      </VStack>
    </Container>
  );
};

export default EndOfReviewAnswer;
