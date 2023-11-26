"use client";
import logo from "../img/logo.svg";
import { Box, Flex, Button, Stack, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        backgroundImage={
          " https://img4.thuthuatphanmem.vn/uploads/2020/12/25/photo-blue-banner_060833022.jpg"
        }
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <img src={logo} />
          {/* <Box>Logo</Box> */}

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
