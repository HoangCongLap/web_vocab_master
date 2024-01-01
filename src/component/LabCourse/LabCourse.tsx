import { Flex, useDisclosure } from "@chakra-ui/react";
import "./index.css";
import React from "react";
import DrawerCourse from "../../pages/CourseVocab";

const LabCourse = () => {
  const courseDisclouse = useDisclosure();
  const btnRef = React.useRef(null);
  return (
    <>
      <Flex flexDirection="row" position="sticky" top="64px" zIndex="101">
        {/* <div
        style={{
          height: "140px",
          width: "400px",
          background: "red",
          borderRadius: "10px",
          padding: "15px",
          position: "relative",
          marginTop: "50px",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", margin: "0 auto" }}
        >
          <img
            src="https://learn.mochidemy.com/image/img_25.png"
            alt="course-thumbnail"
            style={{ width: "100px" }}
          /> */}
        <button className="btn-5" ref={btnRef} onClick={courseDisclouse.onOpen}>
          <span>Khóa học</span>
        </button>
      </Flex>
      <DrawerCourse {...courseDisclouse} btnRef={btnRef} />
    </>
  );
};

export default LabCourse;
