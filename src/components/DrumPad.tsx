import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateDisplay } from "../app/actionCreators";

type Props = {
  buttonID: string
  audioID: string
  audioSRC: string
}

export const DrumPad:React.FC<Props> = ({ buttonID, audioID, audioSRC }) => {

  const dispatch: DispatchType = useDispatch();
  const soundEffect = useRef(null);

  const playSound = () => {
    if(soundEffect.current) {
      (soundEffect.current as HTMLMediaElement).play();
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(updateDisplay(buttonID));
    playSound();

  }

  return (
    <button className='drum-pad' id={ buttonID } onClick={ handleClick }>
      <audio className='clip' id={ audioID } src={ audioSRC } ref={ soundEffect }></audio>
      { audioID }
    </button>
  );
}