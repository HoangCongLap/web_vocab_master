import {
  Drawer,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const options = [
  {
    courseId: 1,
    desc: "Củng cố nền tảng tiếng Anh",
    title: "1000 TỪ CƠ BẢN",
  },
  {
    courseId: 6,
    desc: "Ôn IELTS 6.5 Reading &amp; Listening",
    title: "IELTS CƠ BẢN",
  },
  {
    courseId: 7,
    desc: "Ôn IELTS 6.5 Reading &amp; Listening fkdsnflsdfn,.fnflkdsnfklkfsdnflkjslkfjskaf",
    title: "Ifdsaf",
  },
  {
    courseId: 7,
    desc: "Ôn IELTS 6.5 Reading &amp; Listening fkdsnflsdfn,.fnflkdsnfklkfsdnflkjslkfjskaf",
    title: "Ifdsaf",
  },
  {
    courseId: 10,
    desc: "Ôn IELTS 6.5 Reading &amp; Listening fkdsnflsdfn,",
    title: "Ifdsaf",
  },
];
interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.MutableRefObject<null>;
}
function DrawerCourse({ isOpen, onClose, btnRef }: DrawerProps) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          overflowY="auto"
          maxH="100vh"
          maxW="30%"
          minWidth="min-content"
        >
          <DrawerCloseButton />
          <div
            style={{
              background:
                "  linear-gradient(0deg , #387ed9 65.50%, #0023ac 100.81%)",
              height: "80px",
              width: "100%",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                margin: "20px auto 0",
                color: "white",
              }}
            >
              CÁC KHÓA HỌC
            </p>
            <Stack width={"100%"} borderRadius={20} marginTop={5}>
              {options.map((course) => (
                <Stack
                  key={course.courseId}
                  p={3}
                  boxShadow="5px 10px 5px rgba(189, 189, 189, 0.9);"
                  backgroundColor={"#F8F8F8"}
                  alignItems="center"
                  borderRadius={20}
                  marginTop={5}
                >
                  <Heading size={"lg"}>{course.title}</Heading>
                  <Heading size={"20px"}>{course.desc}</Heading>
                  <Stack>
                    <Button size="md">Get Started</Button>
                  </Stack>
                </Stack>
              ))}
            </Stack>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawerCourse;
