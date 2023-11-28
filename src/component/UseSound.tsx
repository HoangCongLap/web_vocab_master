import React from "react";
import useSound from "use-sound";
import boopSfx from "../voice/boop.mp3";
import { Button, Icon } from "@chakra-ui/react";
import { IoVolumeHighSharp } from "react-icons/io5";
const UseSound = () => {
  // const [playbackRate, setPlaybackRate] = React.useState(0.75);

  const [play] = useSound(boopSfx, {
    // playbackRate,
    interrupt: true,
  });

  const handleClick = () => {
    // setPlaybackRate(playbackRate + 0.1);
    play();
  };

  return (
    <Button onClick={handleClick}>
      {/* <span role="img" aria-label="Person with lines near mouth">
        🗣
      </span> */}
      <Icon fontSize={25} as={IoVolumeHighSharp} />
    </Button>
  );
};
export default UseSound;
