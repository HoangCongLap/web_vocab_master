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
import { useNavigate } from "react-router";
import Logo from "../Logo";
import { pageLinks } from "../../data/PageLinks";
import DrawerCourse from "../../pages/CourseVocab";
import React from "react";

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
  const courseDisclouse = useDisclosure();
  const btnRef = React.useRef(null);
  const handleOnclickLogin = () => {
    navigate("/login");
  };
  const handleOnclickLogo = () => {
    navigate("/");
  };
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
              {/* <li>
              <Box
                px={3}
                py={3}
                textDecoration="none"
                color="white"
                transition="background 0.3s"
                _hover={{
                  bg: "green.300",
                  color: "white",
                }}
                ref={btnRef}
                onClick={courseDisclouse.onOpen}
              >
                Khóa học
              </Box>
            </li> */}

              {/* /fdsgfdgsdgfsdg */}
              {/* {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))} */}
            </HStack>
          </div>
          <Flex alignItems={"center"}>
            <IconButton
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
                      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Justina Clark</Text>
                    <Text fontSize="xs" color="gray.600">
                      Admin
                    </Text>
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
      <DrawerCourse {...courseDisclouse} btnRef={btnRef} />
      <Box>{children}</Box>
    </>
  );
}
