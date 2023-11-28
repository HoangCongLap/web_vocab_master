"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Nav from "../component/Nav";
import SocialMediaButtons from "../component/SocialMediaButtons";
import { useNavigate } from "react-router";
export default function Login() {
  const navigate = useNavigate();
  const handleOnclickLearn = () => {
    navigate("/learn");
  };
  return (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      bg={useColorModeValue("gray.50", "gray.800")}
      minH="100vh"
      gap={10}
    >
      <Nav />
      <Stack spacing={8} mx={"auto"} maxW={"lg"} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"blue.400"}>Forgot password?</Text>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleOnclickLearn}
              >
                Sign in
              </Button>
              <Stack direction="row" spacing={4}>
                <div>Chưa có tài khoản? </div>
                <div>
                  <Text
                    as="a"
                    color={"blue.400"}
                    textDecor="underline"
                    fontWeight="bold"
                    href="/signup"
                  >
                    Tạo tài khoản mới
                  </Text>
                </div>
              </Stack>
              {/* những icon email,fb,... */}
              <SocialMediaButtons />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
