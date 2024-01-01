"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  VStack,
  Text,

  // background,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FiBell, FiChevronDown } from "react-icons/fi";
import { useNavigate, useParams } from "react-router";
import Logo from "../Logo";
import { pageLinks } from "../../data/PageLinks";
// import DrawerCourse from "../../pages/CourseVocab";
import React from "react";
import { useAuth } from "../../firebaseConfig";

interface Props {
  children: React.ReactNode;
}

// const Links = ["Ôn tập", "Học từ mới ", "Sổ tay", "Khóa học"];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={3}
      py={3}
      rounded={"md"}
      fontWeight={900}
      fontSize={23}
      color={"gray.200"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("green.200", "green.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

interface Props {
  children: React.ReactNode;
}
export default function Layout(props: Props) {
  const { children } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  let username = null;
  const auth = useAuth();

  // const courseDisclouse = useDisclosure();
  // const btnRef = React.useRef(null);
  const handleOnclickLogin = () => {
    navigate("/login");
  };
  const handleOnclickLogo = () => {
    navigate("/");
  };
  if (
    auth?.currentUser?.email &&
    typeof auth?.currentUser?.email === "string"
  ) {
    username = auth?.currentUser?.email.split("@")[0];
  }
  username = auth?.currentUser?.emailVerified;
  return (
    <>
      <Box
        bg={useColorModeValue("green.400", "gray.400")}
        px={4}
        position="sticky"
        top="0"
        zIndex="100"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box onClick={handleOnclickLogo} marginRight={"2%"}>
            <Logo />
          </Box>
          <div>
            <HStack
              id="2222"
              as={"nav"}
              display={{ base: "none", md: "flex" }}
              justifyContent="center"
              gap={10}
              style={{
                listStyle: "none",
                color: "white",
                fontSize: "23px",
                fontFamily: "cursive",
                fontWeight: "bold",
              }}
            >
              {pageLinks.map((link) => {
                const { id, href, text, Image } = link;

                return (
                  <li key={id}>
                    <Box
                      as="a"
                      px={3}
                      py={3}
                      href={href}
                      textDecoration="none"
                      color="white"
                    >
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          width: "100%",
                          marginRight: "30px",
                          marginTop: "5px",
                          transition: "background 0.3s, color 0.3s",
                        }}
                        _hover={{
                          bg: "green.300",
                          color: "white",
                        }}
                      >
                        <img
                          src={Image}
                          alt={text}
                          width="30px"
                          height="20px"
                        />
                        <p> {text} </p>
                      </Box>
                    </Box>
                  </li>
                );
              })}
            </HStack>
          </div>
          <Flex alignItems={"center"}>
            <IconButton
              marginLeft={"130px"}
              size="lg"
              variant="ghost"
              aria-label="open menu"
              icon={<FiBell />}
            />
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <Avatar
                    size={"sm"}
                    src={
                      "https://imgt.taimienphi.vn/cf/Images/np/2023/1/5/avatar-tet-2023-30-anh-dai-dien-tet-quy-mao-dep-de-thuong-10.jpg"
                    }
                  />
                  <VStack
                    // bg={"red"}
                    // width={"205px"}
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    {/* <Text fontSize="sm">Justin Clark</Text> */}
                    <Text fontSize="18px">{username}</Text>
                    {/* <Text fontSize="xs" color="gray.600">
                      Admin
                    </Text> */}
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue("white", "gray.900")}
                borderColor={useColorModeValue("gray.200", "gray.700")}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleOnclickLogin}>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {pageLinks.map((link) => (
                <NavLink key={link.id}>{link.text}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      {/* <DrawerCourse {...courseDisclouse} btnRef={btnRef} /> */}
      <Box>{children}</Box>
    </>
  );
}
