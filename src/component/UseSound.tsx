import { useSound } from "react-use-sound";
import PlayButton from "./PlayButton"; // Assuming PlayButton is defined somewhere

const soundUrl = "/sounds/guitar-loop.mp3";

const UseSound: React.FC = () => {
  const [play, { stop, isPlaying }] = useSound(soundUrl);

  return (
    <PlayButton
      active={isPlaying}
      size={60}
      iconColor="var(--color-background)"
      idleBackgroundColor="var(--color-text)"
      activeBackgroundColor="var(--color-primary)"
      play={play}
      stop={stop}
    />
  );
};

export default UseSound;
