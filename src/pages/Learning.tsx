// bắt đầu vào học từ vựng
import React, { useState } from "react";
import FlipItemShadow from "../component/FlipItemShadow";
import { Button, Container, HStack, VStack } from "@chakra-ui/react";
import UseSound from "../component/Sound/UseSound";
import { Vocabulary } from "../data/Vocabulary";
import { toast } from "react-toastify";
import Slow from "../component/Sound/Slow";
import ProgressBar from "../component/Progress/ProgressBar";
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
    <Container maxW="50%" bg="gray.100" height="calc(100vh)" color="white">
      <VStack>
        <ProgressBar />
        <VStack>
          <HStack marginTop={"50px"}>
            <UseSound />
            <Slow />
          </HStack>
          <FlipItemShadow vocabulary={vocabularies[index]} />
          <Button
            bg="#58bd2f"
            fontSize={"20px"}
            height={"50px"}
            width={"250px"}
            color={"#fff"}
            borderRadius={"50px"}
            marginTop={"100px"}
            onClick={handleOnClick}
          >
            Tiếp Tục
          </Button>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              color: "black",
              cursor: "pointer",
              textDecoration: "underline",
              margin: "1rem 0px",
            }}
          >
            Mình đã thuộc từ này
          </p>
          {/* đọc từ vựng */}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Learning;
