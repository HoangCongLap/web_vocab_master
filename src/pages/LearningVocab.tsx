// bắt đầu vào học từ vựng
import React, { useEffect, useState } from "react";
import FlipItemShadow from "../component/FlipItem/FlipItemShadow";
import { Button, Container, HStack, VStack } from "@chakra-ui/react";
import UseSound from "../component/Sound/UseSound";
import { Vocabulary, VocabularyReponse } from "../data/Vocabulary";
import { toast } from "react-toastify";
import Slow from "../component/Sound/Slow";
import ProgressBar from "../component/Progress/ProgressBar";
import Writewords from "../component/FormLabelWritewords/Writewords";
import axios from "axios";
import { getAuthV2 } from "../firebaseConfig";
import { useNavigate, useParams } from "react-router";
import WrongAnswer from "../component/WrongAnswer/WrongAnswer";
// const vocabularies: Vocabulary[] = [
//   {
//     id: 344,
//     content: "student",
//     phonetic: "/ˈstuːdnt/",
//     position: "n",
//     lesson_id: 1,
//     course_id: 1,
//     trans: "Học sinh, sinh viên",
//     trans_hint: "Em gái của anh ấy là một sinh viên ở trường đại học đó.",
//     en_hint: "His younger sister is a student at that university.",
//     audio: "http://daviser.ml/audio/344.mp3",
//     picture:
//       "https://wpvip.edutopia.org/wp-content/uploads/2022/10/shutterstock_1958383675-crop.jpg?w=200&quality=85",
//   },
//   {
//     id: 348,
//     content: "hai",
//     phonetic: "/ɪɡˌzæmɪˈneɪʃn/",
//     position: "n",
//     lesson_id: 2,
//     course_id: 1,
//     trans: "Kiểm tra, kỳ thi",
//     trans_hint: "Anh ấy chuẩn bị tham gia một kỳ thi đầu vào.",
//     en_hint: "He is going to take an entrance examination.",
//     audio: "https://pi.nhalq.dev/kimochi/audio/348.mp3",
//     picture: "https://pi.nhalq.dev/kimochi/image/348.png",
//   },
//   {
//     id: 349,
//     content: "ba",
//     phonetic: "/ɪɡˌæmɪˈneɪʃn/",
//     position: "n",
//     lesson_id: 3,
//     course_id: 1,
//     trans: "Kiểm t thi",
//     trans_hint: "tham gia một kỳ thi đầu vào.",
//     en_hint: "He is goinan entrance examination.",
//     audio: "https://pi.nhalq.dev/kimochi/audio/348.mp3",
//     picture: "https://pi.nhalq.dev/kimochi/image/348.png",
//   },
//   {
//     id: 3497,
//     content: "bon",
//     phonetic: "/ɪɡˌæmɪˈneɪʃn/",
//     position: "n",
//     lesson_id: 3,
//     course_id: 1,
//     trans: "Kiểm t thi",
//     trans_hint: "tham gia một kỳ thi đầu vào.",
//     en_hint: "He is goinan entrance examination.",
//     audio: "https://pi.nhalq.dev/kimochi/audio/348.mp3",
//     picture: "https://pi.nhalq.dev/kimochi/image/348.png",
//   },
// ];
const Learning: React.FC = () => {
  const navigate = useNavigate();
  const [vocabularies, setVocabularies] = React.useState<Vocabulary[]>([]);
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const auth = getAuthV2();
  const { courseId, lessionId } = useParams();
  const getData = async () => {
    const token = await auth?.currentUser?.getIdToken();
    axios
      .get<VocabularyReponse>(
        `https://pi.nhalq.dev/kimochiapi/api/lesson/${courseId}/${lessionId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log("response.data", response.data);
        setVocabularies(response.data.vocabularies);
      });
  };
  React.useEffect(() => {
    if (auth?.currentUser) {
      getData();
    }
  }, [auth?.currentUser]);

  const getTotalStep = () => {
    return vocabularies.length * 2;
  };
  const handleFlip = () => {
    setIsFlipped(true);
  };
  // xử lí tiếp tục khi hình đã lật
  const handleOnClick = () => {
    if (isFlipped) {
      nextVocab();
    }
  };
  const learnFinish = () => {
    toast("Wow. Finish!");
  };
  const nextVocab = () => {
    setProgressValue(progressValue + 100 / getTotalStep());
    if (index == getTotalStep() - 1) {
      learnFinish();
      navigate("/endoflesson");
      return;
    }
    setIndex(index + 1);
  };
  const handleRemembered = () => {
    setProgressValue(progressValue + (2 * 100) / getTotalStep());
    if (index == getTotalStep() - 2) {
      learnFinish();
      navigate("/endoflesson");
      return;
    }
    setIndex(index + 2);
  };
  useEffect(() => {
    setIsFlipped(false);
  }, [index]);
  const renderContent = () => {
    // console.log({ vocabularies });
    if (index % 2 == 0) {
      if (!vocabularies[index / 2]) {
        return <></>;
      }
      return (
        <>
          <FlipItemShadow
            key={index}
            vocabulary={vocabularies[index / 2]}
            onFlip={handleFlip}
          />
          <Button
            background={
              !isFlipped
                ? "gray.200"
                : "linear-gradient(83deg, #58cc02 19.02%, #23ac38 90.81%)"
            }
            boxShadow={!isFlipped ? "gray" : "0 6px 0 0 #209b32"}
            _hover={{
              background: !isFlipped
                ? "gray.200"
                : "linear-gradient(83deg, #7bea00 9.02%, #2fbf33 90.81%)",
            }}
            fontSize={"20px"}
            height={"50px"}
            width={"250px"}
            color={"#fff"}
            borderRadius={"50px"}
            marginTop={"20px"}
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
        </>
      );
    } else {
      console.log("vocabulariesxxx", vocabularies);
      const vocab = vocabularies[(index - 1) / 2];
      return <Writewords word={vocab.content} onSucces={nextVocab} />;
    }
  };
  if (!vocabularies || vocabularies.length === 0) {
    return <></>;
  }
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
        <ProgressBar value={progressValue} />
        <VStack width="50%">
          <HStack marginTop={"20px"}>
            <UseSound />
            <Slow />
          </HStack>
          {renderContent()}

          {/* đọc từ vựng */}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Learning;
