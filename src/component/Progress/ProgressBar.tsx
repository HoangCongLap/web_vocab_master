import { Progress } from "@chakra-ui/react";
function ProgressBar() {
  return (
    <Progress
      mt={50}
      width={"80%"}
      height={"20px"}
      value={100}
      borderRadius={"10px"}
      // size="xs"
      colorScheme="green"
    />
  );
}

export default ProgressBar;
