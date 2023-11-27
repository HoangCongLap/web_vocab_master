// bắt đầu vào học từ vựng
import React from "react";
import FlipItemShadow from "./FlipItemShadow";
import { Button, Container, VStack } from "@chakra-ui/react";
const options = [
  {
    id: 344,
    content: "student",
    phonetic: "/ˈstuːdnt/",
    position: "n",
    lesson_id: "1",
    course_id: 1,
    trans: "Học sinh, sinh viên",
    trans_hint: "Em gái của anh ấy là một sinh viên ở trường đại học đó.",
    en_hint: "His younger sister is a student at that university.",
    audio: "http://daviser.ml/audio/344.mp3",
    picture: "http://daviser.ml/image/344.png",
  },
  {
    id: 348,
    content: "examination",
    phonetic: "/ɪɡˌzæmɪˈneɪʃn/",
    position: "n",
    lesson_id: 2,
    course_id: 1,
    trans: "Kiểm tra, kỳ thi",
    trans_hint: "Anh ấy chuẩn bị tham gia một kỳ thi đầu vào.",
    en_hint: "He is going to take an entrance examination.",
    audio: "https://pi.nhalq.dev/kimochi/audio/348.mp3",
    picture: "https://pi.nhalq.dev/kimochi/image/348.png",
  },
];
const StartLearn: React.FC = () => {
  return (
    <Container maxW="md" bg="gray.100" height="calc(100vh)" color="white">
      <VStack>
        <VStack mt={150}>
          <FlipItemShadow />
          <Button bg="red">Click</Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default StartLearn;
