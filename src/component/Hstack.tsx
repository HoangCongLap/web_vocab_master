import { Box, Flex } from "@chakra-ui/react";

const Hstack = () => {
  return (
    <Flex>
      <Box flex="1" background="gray.200" height="900px">
        hoang
      </Box>
      <Box flex="2" background="white" height="900px">
        cong
      </Box>
      <Box flex="1" background="gray.200" height="900px">
        lap
      </Box>
    </Flex>
  );
};

export default Hstack;
