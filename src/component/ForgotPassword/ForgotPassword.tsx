// In ResetPassword.js
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { sendPasswordResetEmail, updatePassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useState } from "react";
import Nav from "../Nav";
import { useAuth } from "../../firebaseConfig";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState(""); // Thêm state cho mật khẩu mới
  const auth = useAuth();

  const handleOnClickLearn = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success(
        "Email đặt lại mật khẩu đã được gửi. Vui lòng kiểm tra hộp thư của bạn."
      );
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === "auth/user-not-found") {
        toast.error("Không tìm thấy người dùng với địa chỉ email này.");
      } else {
        toast.error(`Lỗi: ${errorMessage}`);
      }

      console.error(errorCode, errorMessage);
    }
  };

  const handleUpdatePassword = async () => {
    try {
      await updatePassword(auth.currentUser, newPassword);
      toast.success("Mật khẩu đã được cập nhật thành công.");
      // Có thể chuyển hướng người dùng đến trang đăng nhập hoặc trang chính sau khi cập nhật mật khẩu
    } catch (error) {
      // Xử lý lỗi khi cập nhật mật khẩu
      console.error(error);
    }
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      bg={useColorModeValue("white", "gray.700")}
      minH="100vh"
      gap={10}
    >
      <Nav />
      <Stack spacing={8} mx={"auto"} maxW={"lg"} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}> Forgot Password</Heading>
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
              <Input
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="newPassword">
              <FormLabel>New Password</FormLabel>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleOnClickLearn}
              >
                Reset Password
              </Button>
              <Button
                bg={"green.400"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
                onClick={handleUpdatePassword}
              >
                Update Password
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default ResetPassword;
