import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateDisplay } from "../app/actionCreators";

type Props = {
  buttonID: string
  audioID: string
  audioSRC: string
}

export const DrumPad:React.FC<Props> = ({ buttonID, audioID, audioSRC }) => {

  const dispatch: DispatchType = useDispatch();
  const soundEffect: React.MutableRefObject<HTMLAudioElement | null> = useRef(null);

  const playSound = () => {
    if(soundEffect.current) {
      soundEffect.current.play();
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(updateDisplay(buttonID));
    playSound();
  }

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    switch(event.key){
      case audioID:
      case audioID.toLowerCase():
        dispatch(updateDisplay(buttonID));
        playSound();
        break;
      default:
        break;
    }
  }, [audioID, buttonID, dispatch]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <button className='drum-pad' id={ buttonID } onClick={ handleClick }>
      <audio className='clip' id={ audioID } src={ audioSRC } ref={ soundEffect }></audio>
      { audioID }
    </button>
  );
}