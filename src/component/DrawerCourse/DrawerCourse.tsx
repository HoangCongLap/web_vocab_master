import {
  Drawer,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import React from "react";
function DrawerCourse() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
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
              }}
            >
              CÁC KHÓA HỌC
            </p>
            <Stack
              marginTop={20}
              height={700}
              width={"70%"}
              backgroundColor="#e0e0e0"
              boxShadow="5px 10px 5px rgba(189, 189, 189, 0.9);"
              borderRadius={20}
            >
              <Stack
                // height={"100%"}
                width={"100%"}
                marginTop={20}
                p={3}
                backgroundColor={"#F8F8F8"}
                alignItems="center"
                borderRadius={20}
              ></Stack>
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
