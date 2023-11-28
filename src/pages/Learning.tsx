// bắt đầu vào học từ vựng
import React, { useState } from "react";
import FlipItemShadow from "../component/FlipItemShadow";
import { Button, Container, HStack, Stack, VStack } from "@chakra-ui/react";
import UseSound from "../component/Sound/UseSound";
import { Vocabulary } from "../data/Vocabulary";
import { toast } from "react-toastify";
import Slow from "../component/Sound/Slow";

const vocabularies: Vocabulary[] = [
  {
    id: 344,
    content: "student",
    phonetic: "/ˈstuːdnt/",
    position: "n",
    lesson_id: 1,
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
const Learning: React.FC = () => {
  const [index, setIndex] = useState(0);
  const handleOnClick = () => {
    if (index == vocabularies.length - 1) {
      toast("Wow so easy!");
      return;
    }
    setIndex(index + 1);
  };
  return (
    <Container maxW="md" bg="gray.100" height="calc(100vh)" color="white">
      <VStack>
        <VStack mt={150}>
          <HStack>
            <UseSound />
            <Slow />
          </HStack>
          <FlipItemShadow vocabulary={vocabularies[index]} />
          <Button bg="red" onClick={handleOnClick}>
            Click
          </Button>
          {/* đọc từ vựng */}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Learning;
