import { Box, Container, Flex, Input, Stack, VStack } from "@chakra-ui/react";

import { getAuthV2 } from "../firebaseConfig";
import axios from "axios";
import { Vocabulary } from "../data/Vocabulary";
import React from "react";

const NoteBook = () => {
  const [vocabularies, setVocabularies] = React.useState<Vocabulary[]>([]);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const auth = getAuthV2();

  const getDataVocabByLevel = async () => {
    const token = await auth?.currentUser?.getIdToken();
    axios
      .get<Vocabulary[]>(
        "https://pi.nhalq.dev/kimochiapi/api/listreviewvocablevel/2",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log("getDataVocabByLevel.data", response.data);
        setVocabularies(response.data);
      });
  };
  React.useEffect(() => {
    if (auth?.currentUser) {
      getDataVocabByLevel();
    }
  }, [auth?.currentUser]);

  const filteredVocabularies = vocabularies.filter((vocabulary) =>
    vocabulary.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("zzz", vocabularies);

  if (vocabularies.length > 0) {
    console.log("xxx", vocabularies[0].content);
  }
  return (
    <Container
      id="11122"
      minW="400px"
      maxW="50%"
      maxH="100%"
      bg="gray.100"
      height="calc(100vh)"
      color="white"
    >
      <>
        <style>
          {`
            .scaleOnHover {
              transform: scale(1);
              transition: transform 0.3s ease-in-out;
            }

            .scaleOnHover:hover {
              transform: scale(1.2);
            }
          `}
        </style>
        <Stack>
          <Stack
            direction={["column", "row"]}
            spacing="2px"
            color={"black"}
            marginTop={5}
          >
            <Box w="12.5%" h="40px" className="scaleOnHover">
              Cấp độ 1
            </Box>
            <Box w="12.5%" h="40px" className="scaleOnHover">
              Cấp độ 2
            </Box>
            <Box w="12.5%" h="40px" className="scaleOnHover">
              Cấp độ 3
            </Box>
            <Box w="12.5%" h="40px" className="scaleOnHover">
              Cấp độ 4
            </Box>
            <Box w="12.5%" h="40px" className="scaleOnHover">
              Cấp độ 5
            </Box>
            <Box w="12.5%" h="40px" className="scaleOnHover">
              Cấp độ 6
            </Box>
            <Box w="12.5%" h="40px" className="scaleOnHover">
              Cấp độ 7
            </Box>
            <Box w="12.5%" h="40px" className="scaleOnHover">
              Cấp độ 8
            </Box>
          </Stack>
        </Stack>
      </>

      <VStack>
        <p
          style={{
            color: "#66BB6A",
            fontSize: "24px",
            fontWeight: "Bold",
            marginTop: "30px",
          }}
        ></p>

        <Flex alignItems="center" position="relative">
          <Input
            isInvalid
            errorBorderColor="red.300"
            placeholder="Gõ vào đây từ bạn muốn tìm"
            color={"black"}
            width={300}
            zIndex={1}
            borderRadius={20}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src="https://learn.mochidemy.com/svg/search.svg"
            style={{
              position: "absolute",
              left: 255,
              top: 0,
              zIndex: 0,
              width: "35px",
              height: "40px",
            }}
          />
        </Flex>
        <VStack>
          {filteredVocabularies.map((vocabulary) => (
            //   <Flex
            //     key={vocabulary.id}
            //     alignItems="center"
            //     flexDirection="row"
            //     bg="white"
            //     p={4}
            //     borderRadius={10}
            //     boxShadow="md"
            //   >

            <p
              style={{
                fontWeight: "bold",
                fontStyle: "normal",
                fontSize: "24px",
                lineHeight: "45px",
                color: "black",
              }}
            >
              {vocabulary.content}
            </p>

            //   </Flex>
          ))}
        </VStack>
        {/* <p>{vocabularies[1].content}</p> */}
      </VStack>
    </Container>
  );
};

export default NoteBook;
