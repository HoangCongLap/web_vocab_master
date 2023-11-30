import React from "react";
import useSound from "use-sound";
import boopSfx from "../../voice/boop.mp3";
import { Button, Icon } from "@chakra-ui/react";
import { MdSlowMotionVideo } from "react-icons/md";
const Slow = () => {
  const [playbackRate, setPlaybackRate] = React.useState(0.5);

  const [play] = useSound(boopSfx, {
    playbackRate,
    interrupt: true,
  });

  const handleClick = () => {
    setPlaybackRate(playbackRate);
    play();
  };

  return (
    <Button onClick={handleClick} borderRadius={"50px"} bg={"white"}>
      <Icon color={"Gold"} fontSize={25} as={MdSlowMotionVideo} />
    </Button>
  );
};
export default Slow;
