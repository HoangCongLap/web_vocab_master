"use client";

import {
  // Avatar,
  Box,
  Button,
  Divider,
  Heading,
  //   List,
  //   ListIcon,
  //   ListItem,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";

// import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router";
import { getAuthV2 } from "../../firebaseConfig";
import { LessonResponse } from "../../data/Lesson";
import React from "react";

// const options = [
//   {
//     courseId: 1,
//     lessonId: 1,
//     titleVN: "1.Trường học",
//     titleEN: "Schools",
//   },
//   {
//     courseId: 1,
//     lessonId: 2,
//     titleVN: "2.Kì thi",
//     titleEN: "Examination",
//   },
//   {
//     courseId: 1,
//     lessonId: 3,
//     titleEN: "Extracurricular Activities",
//     titleVN: "3.Hoạt động ngoại khóa",
//   },
//   {
//     lessonId: 4,
//     titleEN: "School Stationery",
//     titleVN: "4.Dụng cụ học tập",
//     courseId: 1,
//   },
//   {
//     lessonId: 5,
//     titleEN: "School Subjects",
//     titleVN: "5.Các môn học",
//     courseId: 1,
//   },
//   {
//     lessonId: 6,
//     titleEN: "Classroom",
//     titleVN: "6.Lớp học",
//     courseId: 1,
//   },
//   {
//     lessonId: 7,
//     titleEN: "Universities",
//     titleVN: "7.Trường đại học",
//     courseId: 1,
//   },
//   {
//     lessonId: 8,
//     titleEN: "Body",
//     titleVN: "8.Bộ phận cơ thể",
//     courseId: 1,
//   },
//   {
//     lessonId: 9,
//     titleEN: "Appearance",
//     titleVN: "9.Ngoại hình",
//     courseId: 1,
//   },
//   {
//     lessonId: 10,
//     titleEN: "Characteristics",
//     titleVN: "10.Tính cách",
//     courseId: 1,
//   },
//   {
//     lessonId: 11,
//     titleEN: "Age",
//     titleVN: "11.Tuổi tác",
//     courseId: 1,
//   },
//   {
//     lessonId: 12,
//     titleEN: "Feelings",
//     titleVN: "12.Cảm xúc",
//     courseId: 1,
//   },
//   {
//     lessonId: 13,
//     titleEN: "Family",
//     titleVN: "13.Gia đình",
//     courseId: 1,
//   },
//   {
//     lessonId: 14,
//     titleEN: "Relationships",
//     titleVN: "14.Các mối quan hệ",
//     courseId: 1,
//   },
//   {
//     lessonId: 15,
//     titleEN: "Colours",
//     titleVN: "15.Màu sắc",
//     courseId: 1,
//   },
//   {
//     lessonId: 16,
//     titleEN: "Shapes",
//     titleVN: "16.Hình dạng",
//     courseId: 1,
//   },
//   {
//     lessonId: 17,
//     titleEN: "Numbers",
//     titleVN: "17.Số đếm",
//     courseId: 1,
//   },
//   {
//     lessonId: 18,
//     titleEN: "Ordinal Numbers",
//     titleVN: "18.Số thứ tự",
//     courseId: 1,
//   },
//   {
//     lessonId: 19,
//     titleEN: "Days In A Week",
//     titleVN: "19.Ngày trong tuần",
//     courseId: 1,
//   },
//   {
//     lessonId: 20,
//     titleEN: "Talking About Time",
//     titleVN: "20.Nói về thời gian",
//     courseId: 1,
//   },
// ];
interface LearnNewWordsProps {
  courseId: number;
}
interface PackageTierProps {
  // title: string;
  // options: Array<{ lessonId: number; titleVN?: string }>;

  titleEN?: string;
  titleVN?: string;
  checked?: boolean;
  courseId: number;
  lessonId: number;
}
const PackageTier = ({
  titleVN,
  titleEN,
  courseId,
  lessonId,
  checked = false,
}: PackageTierProps) => {
  const navigate = useNavigate();
  const handleOnclickGetStartLearn = () => {
    navigate(`/learning/${courseId}/${lessonId}`);
  };
  const colorTextLight = checked ? "white" : "purple.600";
  const bgColorLight = checked ? "purple.400" : "gray.300";

  const colorTextDark = checked ? "white" : "purple.500";
  const bgColorDark = checked ? "purple.400" : "gray.300";

  return (
    <Stack
      width={"100%"}
      backgroundColor="#e0e0e0"
      boxShadow="5px 10px 5px rgba(189, 189, 189, 0.9);"
      borderRadius={20}
    >
      <Stack
        p={3}
        backgroundColor={"#F8F8F8"}
        alignItems="center"
        borderRadius={20}
      >
        <Heading size={"lg"}>{titleEN}</Heading>
        <Heading size={"xs"}>{titleVN}</Heading>

        <Stack>
          <Button
            size="md"
            color={useColorModeValue(colorTextLight, colorTextDark)}
            bgColor={useColorModeValue(bgColorLight, bgColorDark)}
            onClick={handleOnclickGetStartLearn}
          >
            Get Started
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
const LearnNewWords = ({ courseId }: LearnNewWordsProps) => {
  const [lesson, setLesson] = React.useState<LessonResponse[]>([]);
  const auth = getAuthV2();
  const getData = async () => {
    const token = await auth?.currentUser?.getIdToken();
    axios
      .get<LessonResponse[]>(
        `https://pi.nhalq.dev/kimochiapi/api/lessons/${courseId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          params: {
            fromId: 0,
            limit: 10,
          },
        }
      )
      .then((response) => {
        console.log("response.data", response.data);
        setLesson(response.data);
      });
  };
  React.useEffect(() => {
    console.log("auth", auth?.currentUser);
    if (auth?.currentUser) {
      getData();
    }
  }, [auth?.currentUser]);

  return (
    <Box width={"60%"}>
      <Stack spacing={4} direction={"column"}>
        <Stack gap={8}>
          <Divider />
          {lesson.map((individualLesson, index) => {
            console.log("tu", individualLesson);
            return (
              <PackageTier
                key={individualLesson.lesson.lessonId}
                titleVN={index + 1 + "." + individualLesson.lesson.titleVN}
                titleEN={individualLesson.lesson.titleEN}
                courseId={courseId}
                lessonId={individualLesson.lesson.lessonId}
              />
            );
          })}
          <Divider />
        </Stack>
      </Stack>
    </Box>
  );
};

export default LearnNewWords;