import React from "react";
import useSound from "use-sound";
import boopSfx from "../voice/boop.mp3";
import { Button } from "@chakra-ui/react";
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
      <span role="img" aria-label="Person with lines near mouth">
        🗣
      </span>
    </Button>
  );
};
export default UseSound;
