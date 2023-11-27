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
// import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router";
const options = [
  {
    courseId: 1,
    lessonId: 1,
    titleVN: "1.Trường học",
    titleEN: "Schools",
  },
  {
    courseId: 1,
    lessonId: 2,
    titleVN: "2.Kì thi",
    titleEN: "Examination",
  },
  {
    courseId: 1,
    lessonId: 3,
    titleEN: "Extracurricular Activities",
    titleVN: "3.Hoạt động ngoại khóa",
  },
  {
    lessonId: 4,
    titleEN: "School Stationery",
    titleVN: "4.Dụng cụ học tập",
    courseId: 1,
  },
  {
    lessonId: 5,
    titleEN: "School Subjects",
    titleVN: "5.Các môn học",
    courseId: 1,
  },
  {
    lessonId: 6,
    titleEN: "Classroom",
    titleVN: "6.Lớp học",
    courseId: 1,
  },
  {
    lessonId: 7,
    titleEN: "Universities",
    titleVN: "7.Trường đại học",
    courseId: 1,
  },
  {
    lessonId: 8,
    titleEN: "Body",
    titleVN: "8.Bộ phận cơ thể",
    courseId: 1,
  },
  {
    lessonId: 9,
    titleEN: "Appearance",
    titleVN: "9.Ngoại hình",
    courseId: 1,
  },
  {
    lessonId: 10,
    titleEN: "Characteristics",
    titleVN: "10.Tính cách",
    courseId: 1,
  },
  {
    lessonId: 11,
    titleEN: "Age",
    titleVN: "11.Tuổi tác",
    courseId: 1,
  },
  {
    lessonId: 12,
    titleEN: "Feelings",
    titleVN: "12.Cảm xúc",
    courseId: 1,
  },
  {
    lessonId: 13,
    titleEN: "Family",
    titleVN: "13.Gia đình",
    courseId: 1,
  },
  {
    lessonId: 14,
    titleEN: "Relationships",
    titleVN: "14.Các mối quan hệ",
    courseId: 1,
  },
  {
    lessonId: 15,
    titleEN: "Colours",
    titleVN: "15.Màu sắc",
    courseId: 1,
  },
  {
    lessonId: 16,
    titleEN: "Shapes",
    titleVN: "16.Hình dạng",
    courseId: 1,
  },
  {
    lessonId: 17,
    titleEN: "Numbers",
    titleVN: "17.Số đếm",
    courseId: 1,
  },
  {
    lessonId: 18,
    titleEN: "Ordinal Numbers",
    titleVN: "18.Số thứ tự",
    courseId: 1,
  },
  {
    lessonId: 19,
    titleEN: "Days In A Week",
    titleVN: "19.Ngày trong tuần",
    courseId: 1,
  },
  {
    lessonId: 20,
    titleEN: "Talking About Time",
    titleVN: "20.Nói về thời gian",
    courseId: 1,
  },
];
interface PackageTierProps {
  // title: string;
  options: Array<{ lessonId: number; titleVN?: string }>;
  titleEN?: string;
  titleVN?: string;
  checked?: boolean;
}
const PackageTier = ({
  // title,
  //   options,
  //   typePlan,
  titleVN,
  titleEN,
  checked = false,
}: PackageTierProps) => {
  const navigate = useNavigate();
  const handleOnclickGetStartLearn = () => {
    navigate("/start");
  };
  const colorTextLight = checked ? "white" : "purple.600";
  const bgColorLight = checked ? "purple.400" : "gray.300";

  const colorTextDark = checked ? "white" : "purple.500";
  const bgColorDark = checked ? "purple.400" : "gray.300";

  return (
    <Stack borderRadius={20} background="gray.400" p={3} alignItems="center">
      <Heading size={"lg"}>{titleEN}</Heading>
      <Heading size={"xs"}>{titleVN}</Heading>

      {/* <List spacing={3} textAlign="start">
        {options.map((name) => (
          <ListItem key={name.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {name.name}
          </ListItem>
        ))}
      </List> */}

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
  );
};
const LearnNewWords = () => {
  return (
    <Box>
      <Stack spacing={4} direction={"column"}>
        <Stack>
          <Divider />
          {options.map((option) => (
            <PackageTier
              key={option.courseId}
              // lessonId={option.lessonId}
              titleVN={option.titleVN}
              titleEN={option.titleEN}
              options={options}
            />
          ))}
          <Divider />
        </Stack>
      </Stack>
    </Box>
  );
};

export default LearnNewWords;
