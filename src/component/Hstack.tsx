import { Box, Flex } from "@chakra-ui/react";
import Layout from "./Layout";

interface Props {
  children: React.ReactNode;
}
const Hstack = ({ children }: Props) => {
  return (
    <Layout>
      <Flex>
        <Box flex="1" background="gray.200">
          hoang
        </Box>
        <Box flex="2" background="white">
          {children}
        </Box>
        <Box flex="1" background="gray.200">
          lap
        </Box>
      </Flex>
    </Layout>
  );
};

export default Hstack;
