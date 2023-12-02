import { Button, FormControl, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { toast } from "react-toastify";
interface Props {
  word: string;
  onSucces: () => void;
}

const Writewords = ({ word, onSucces }: Props) => {
  const [heardWords, setHeardWords] = useState("");
  const handleOnClickCheckWords = () => {
    if (!heardWords) {
      toast.error("Please enter");
      return;
    }
    const isMatch = word === heardWords;
    if (isMatch) {
      onSucces();
    } else {
      toast.error("sai");
    }
  };
  return (
    <>
      {/* <Writewords />; */}
      <Stack
        style={{
          width: "170%",
          marginTop: "40px",
        }}
      >
        <FormControl id="heardWords">
          {/* <FormLabel color={"black"} textAlign={"center"} fontSize={"40px"}>
          Nghe và viết lại
        </FormLabel> */}
          <p
            style={{
              color: "black",
              textAlign: "center",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            Nghe và viết lại
          </p>
          <Input
            style={{
              background: "white",
              color: "black",
              marginTop: "40px",
              fontSize: "17px",
            }}
            placeholder="Gõ lại từ bạn đã nghe được"
            type="heardWords"
            value={heardWords}
            onChange={(e) => setHeardWords(e.target.value)}
          />
        </FormControl>
        console.log({heardWords});
      </Stack>
      <Button
        // bg={!isFlipped ? "gray.200" : "#58bd2f"}
        bg={"#58bd2f"}
        fontSize={"20px"}
        height={"50px"}
        width={"250px"}
        color={"#fff"}
        borderRadius={"50px"}
        marginTop={"60px"}
        onClick={handleOnClickCheckWords}
      >
        Kiểm tra
      </Button>
    </>
  );
};

export default Writewords;
