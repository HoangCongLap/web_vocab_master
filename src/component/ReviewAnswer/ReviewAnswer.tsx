import { Button, FormControl, Input, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { ReviewVocab } from "../../data/ReviewVocab";
import { toast } from "react-toastify";

const vocabularies: ReviewVocab[] = [
  {
    learningProgressDTO: {
      level: 2,
      lastModifiedTime: 1693741992,
      vocabId: 349,
    },
    vocabulary: {
      id: 349,
      content: "learn",
      phonetic: "/lɜːrn/",
      position: "v",
      lesson_id: 35,
      course_id: 1,
      trans: "Học hỏi, biết được, tìm hiểu",
      trans_hint: "Anh ấy nên học hỏi (và thay đổi) từ sai lầm lớn đó.",
      en_hint: "He should learn from his big mistake.",
      audio: "https://pi.nhalq.dev/kimochi/audio/349.mp3",
      picture: "https://pi.nhalq.dev/kimochi/image/349.png",
    },
  },
  {
    learningProgressDTO: {
      level: 1,
      lastModifiedTime: 1693842,
      vocabId: 324,
    },
    vocabulary: {
      id: 324,
      content: "board",
      phonetic: "/bɔːrd/",
      position: "n",
      lesson_id: 33,
      course_id: 1,
      trans: "Bảng, ván",
      trans_hint: "Giáo viên đang viết trên bảng.",
      en_hint: "The teacher is writing on the board.",
      audio: "https://pi.nhalq.dev/kimochi/audio/324.mp3",
      picture: "https://pi.nhalq.dev/kimochi/image/324.png",
    },
  },
];

const ReviewAnswer = () => {
  const [fillInWord, setFillInWord] = useState("");
  const [index, setIndex] = useState(0);

  const getTotalStep = () => {
    return vocabularies.length;
  };
  console.log("lap");
  const handleOnClickreviewAnswer = () => {
    console.log("Vocabulary Trans:", vocabularies[index].vocabulary.trans);

    console.log("fill", fillInWord);
    if (fillInWord) {
      const isMatch = vocabularies[index].vocabulary.content === fillInWord;
      if (isMatch) {
        onSucces();
      } else {
        toast.error("Nhập từ không đúng");
        console.log("ko");
      }
    }
  };
  const onSucces = () => {
    if (index == getTotalStep() - 1) {
      toast("Wow. Finish!");
      return;
    }
    setIndex(index + 1);
  };
  return (
    <>
      <Stack
        w="60%"
        h="84vh"
        display={"Flex"}
        flexDirection={"column"}
        margin={"50px auto 0"}
      >
        <FormControl id="fillInWord">
          {/* <FormLabel color={"black"} textAlign={"center"} fontSize={"40px"}>
          Nghe và viết lại
        </FormLabel> */}
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
            {vocabularies[index].vocabulary.trans}
          </Text>
          <Input
            autoFocus
            style={{
              background: "white",
              color: "black",
              marginTop: "50px",
              fontSize: "17px",
              width: "70%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            placeholder="Gõ lại từ "
            type="fillInWord"
            value={fillInWord}
            onChange={(e) => setFillInWord(e.target.value)}
          />
        </FormControl>
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
          margin={"300px auto 0"}
          onClick={handleOnClickreviewAnswer}
        >
          Tiếp Tục
        </Button>
      </Stack>
    </>
  );
};

export default ReviewAnswer;
