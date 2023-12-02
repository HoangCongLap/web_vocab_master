// bắt đầu vào học từ vựng
import React, { useEffect, useState } from "react";
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
  {
    id: 349,
    content: "exaination",
    phonetic: "/ɪɡˌæmɪˈneɪʃn/",
    position: "n",
    lesson_id: 3,
    course_id: 1,
    trans: "Kiểm t thi",
    trans_hint: "tham gia một kỳ thi đầu vào.",
    en_hint: "He is goinan entrance examination.",
    audio: "https://pi.nhalq.dev/kimochi/audio/348.mp3",
    picture: "https://pi.nhalq.dev/kimochi/image/348.png",
  },
  {
    id: 3497,
    content: "exaination",
    phonetic: "/ɪɡˌæmɪˈneɪʃn/",
    position: "n",
    lesson_id: 3,
    course_id: 1,
    trans: "Kiểm t thi",
    trans_hint: "tham gia một kỳ thi đầu vào.",
    en_hint: "He is goinan entrance examination.",
    audio: "https://pi.nhalq.dev/kimochi/audio/348.mp3",
    picture: "https://pi.nhalq.dev/kimochi/image/348.png",
  },
];
const Learning: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const handleFlip = () => {
    setIsFlipped(true);
  };
  const handleOnClick = () => {
    if (isFlipped) {
      nextVocab();
    }
  };
  const nextVocab = () => {
    setProgressValue(progressValue + 100 / vocabularies.length);
    if (index == vocabularies.length - 1) {
      toast("Wow so easy!");
      return;
    }
    setIndex(index + 1);
  };
  const handleRemembered = () => {
    nextVocab();
  };
  useEffect(() => {
    setIsFlipped(false);
  }, [index]);
  const renderContent = () => {
    if (index % 2) {
      return (
        <FlipItemShadow
          key={index}
          vocabulary={vocabularies[index / 2]}
          onFlip={handleFlip}
        />
      );
    } else {
      const vocab = vocabularies[(index - 1) / 2];
    }
  };
  return (
    <Container maxW="50%" bg="gray.100" height="calc(100vh)" color="white">
      <VStack>
        <ProgressBar value={progressValue} />
        <VStack width="50%">
          <HStack marginTop={"50px"}>
            <UseSound />
            <Slow />
          </HStack>
          {renderContent()}

          <Button
            bg={!isFlipped ? "gray.200" : "#58bd2f"}
            // bg={"#58bd2f"}
            fontSize={"20px"}
            height={"50px"}
            width={"250px"}
            color={"#fff"}
            borderRadius={"50px"}
            marginTop={"50px"}
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
            onClick={handleRemembered}
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
