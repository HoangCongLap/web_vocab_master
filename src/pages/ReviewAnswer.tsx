import {
  Button,
  CloseButton,
  FormControl,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ReviewVocab } from "../data/ReviewVocab";
import { toast } from "react-toastify";
import { getAuthV2 } from "../firebaseConfig";
import axios from "axios";
import WrongAnswer from "../component/WrongAnswer/WrongAnswer";
import { useNavigate } from "react-router";
import { LearningProgess } from "../data/LearningProgress";
import { LevelVocab } from "../data/LevelVocab";
import { Vocabulary } from "../data/Vocabulary";

// const vocabularies: ReviewVocab[] = [
//   {
//     learningProgressDTO: {
//       level: 2,
//       lastModifiedTime: 1693741992,
//       vocabId: 349,
//     },
//     vocabulary: {
//       id: 349,
//       content: "learn",
//       phonetic: "/lɜːrn/",
//       position: "v",
//       lesson_id: 35,
//       course_id: 1,
//       trans: "Học hỏi, biết được, tìm hiểu",
//       trans_hint: "Anh ấy nên học hỏi (và thay đổi) từ sai lầm lớn đó.",
//       en_hint: "He should learn from his big mistake.",
//       audio: "https://pi.nhalq.dev/kimochi/audio/349.mp3",
//       picture: "https://pi.nhalq.dev/kimochi/image/349.png",
//     },
//   },
//   {
//     learningProgressDTO: {
//       level: 1,
//       lastModifiedTime: 1693842,
//       vocabId: 324,
//     },
//     vocabulary: {
//       id: 324,
//       content: "board",
//       phonetic: "/bɔːrd/",
//       position: "n",
//       lesson_id: 33,
//       course_id: 1,
//       trans: "Bảng, ván",
//       trans_hint: "Giáo viên đang viết trên bảng.",
//       en_hint: "The teacher is writing on the board.",
//       audio: "https://pi.nhalq.dev/kimochi/audio/324.mp3",
//       picture: "https://pi.nhalq.dev/kimochi/image/324.png",
//     },
//   },
// ];

const ReviewAnswer = () => {
  const navigate = useNavigate();
  const [fillInWord, setFillInWord] = useState("");
  const [showWrongAnswer, setShowWrongAnswer] = useState(false);
  const [index, setIndex] = useState(0);
  const [levelVocab, setLevelVocab] = React.useState<
    Record<number, LevelVocab>
  >([]);

  const [VocabularyAnswer, setVocabularyAnswer] = React.useState<ReviewVocab[]>(
    []
  );
  const auth = getAuthV2();
  //Lây danh sách vocab cần ôn tập
  const getDataListReviewVocab = async () => {
    const token = await auth?.currentUser?.getIdToken();
    axios
      .get<ReviewVocab[]>(
        "https://pi.nhalq.dev/kimochiapi/api/listreviewvocab",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log("getDataListReviewVocab.data", response.data);
        setVocabularyAnswer(response.data);
      });
  };
  React.useEffect(() => {
    if (auth?.currentUser) {
      getDataListReviewVocab();
    }
  }, [auth?.currentUser]);

  const vocabularies = VocabularyAnswer;
  console.log("vocabularies", vocabularies);
  // cập nhật Level của từ vựng reviewAnswer

  const UpdateLevelVocab = async () => {
    // const date = new Date();
    const token = await auth?.currentUser?.getIdToken();
    const list: LearningProgess[] = [];
    for (const [key, value] of Object.entries(levelVocab)) {
      list.push({
        level: value.level,
        vocabId: value.id,
      });
    }
    axios
      .put<LearningProgess[]>(
        "https://pi.nhalq.dev/kimochiapi/api/learningprogress",
        list,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log("levelAnsreview.data", response.data);
      });
  };

  // set Level của từ vựng
  const setLevel = (level: LevelVocab) => {
    levelVocab[level.id] = { ...level };
    setLevelVocab({ ...levelVocab });
    console.log("da nho review", levelVocab);
  };

  // if (VocabularyAnswer.length > 0) {
  //   console.log(
  //     "VocabularyAnswerxxx",
  //     VocabularyAnswer,
  //     VocabularyAnswer[0].vocabulary
  //   );
  // }
  const setLevelForVocabularyReview = (vocablary: Vocabulary) => {
    console.log("object", vocabularies[1].learningProgressDTO.level);
    const currentLevel = vocabularies[1].learningProgressDTO?.level;
    const newLevel = currentLevel + 1;
    console.log("newLevel", newLevel);

    setLevel({
      id: vocablary.id,
      level: newLevel,
    });
  };

  const getTotalStep = () => {
    return vocabularies.length;
  };
  const handleOnClickCloseReviewAnswer = () => {
    navigate("/review");
  };
  const handleOnClickreviewAnswer = (vocablary: Vocabulary) => {
    console.log("Vocabulary Trans:", VocabularyAnswer[index].vocabulary.trans);
    console.log("fill", fillInWord);
    if (fillInWord) {
      const isMatch = vocabularies[index].vocabulary.content === fillInWord;
      if (isMatch) {
        setLevelForVocabularyReview(vocablary);
        onSucces();
      } else if (showWrongAnswer == true) {
        onSucces();
        setShowWrongAnswer(false);
      } else {
        setShowWrongAnswer(true);
      }
    }
  };
  const onSucces = () => {
    if (index == getTotalStep() - 1) {
      toast("Wow. Finish!");
      navigate("/endofreview");
      UpdateLevelVocab();
      return;
    }
    setIndex(index + 1);
  };
  return (
    <Stack h="91vh">
      <Stack>
        <CloseButton
          size="lg"
          fontSize={20}
          marginTop={2}
          onClick={handleOnClickCloseReviewAnswer}
        />
      </Stack>

      <Stack
        id="123"
        w="60%"
        display={"Flex"}
        flexDirection={"column"}
        margin={"0px auto 0"}
      >
        <FormControl>
          <p
            style={{
              color: "#828282",
              textAlign: "center",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            Điền từ
          </p>

          <Text
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              fontStyle: "normal",
              color: "#06072E",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            {vocabularies[index] && vocabularies[index].vocabulary.trans}
          </Text>
          <Input
            autoFocus
            style={{
              background: "white",
              color: "black",
              marginTop: "40px",
              fontSize: "17px",
              borderRadius: "20px",
            }}
            placeholder="Gõ lại từ "
            type="fillInWord"
            value={fillInWord}
            onChange={(e) => setFillInWord(e.target.value)}
          />
        </FormControl>
      </Stack>
      <div style={{ width: "100%" }}>
        {showWrongAnswer && (
          <WrongAnswer vocabulary={vocabularies[index].vocabulary} />
        )}
      </div>
      <Button
        background={
          !fillInWord
            ? "gray.200"
            : "linear-gradient(83deg, #58cc02 19.02%, #23ac38 90.81%)"
        }
        boxShadow={!fillInWord ? "gray" : "0 6px 0 0 #209b32"}
        _hover={{
          background: !fillInWord
            ? "gray.200"
            : "linear-gradient(83deg, #7bea00 9.02%, #2fbf33 90.81%)",
        }}
        fontSize={"20px"}
        height={"50px"}
        width={"250px"}
        color={"#fff"}
        borderRadius={"50px"}
        margin={"50px auto 0"}
        onClick={() =>
          handleOnClickreviewAnswer(vocabularies[index].vocabulary)
        }
      >
        Tiếp Tục
      </Button>
    </Stack>
  );
};

export default ReviewAnswer;
