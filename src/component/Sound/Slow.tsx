// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import useSound from "use-sound";
import { Button, Icon } from "@chakra-ui/react";
import { MdSlowMotionVideo } from "react-icons/md";
import { Vocabulary } from "../../data/Vocabulary";
interface Props {
  vocabulary: Vocabulary;
}
const Slow = ({ vocabulary }: Props) => {
  const [play] = useSound(vocabulary.audio, {
    playbackRate: 0.5,
    interrupt: true,
  });

  const handleClick = () => {
    play();
  };

  return (
    <Button onClick={handleClick} borderRadius={"50px"} bg={"white"}>
      <Icon color={"Gold"} fontSize={25} as={MdSlowMotionVideo} />
    </Button>
  );
};
export default Slow;
