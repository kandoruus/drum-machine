import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateDisplay } from "../app/actionCreators";

type Props = {
  buttonId: string
  audioId: string
  audioSrc: string
}

export const DrumPad:React.FC<Props> = ({ buttonId, audioId, audioSrc }): React.ReactElement => {

  const dispatch: DispatchType = useDispatch();
  const soundEffect: React.MutableRefObject<HTMLAudioElement | null> = useRef(null);
  const padButton: React.MutableRefObject<HTMLButtonElement | null> = useRef(null);

  const playSound = () => {
    if(soundEffect.current) {
      soundEffect.current.play();
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(updateDisplay(buttonId));
    playSound();
  }

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    switch(event.key){
      case audioId:
      case audioId.toLowerCase():
        if(padButton.current) {
          padButton.current.click();
        }
        break;
      default:
        break;
    }
  }, [audioId]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <button className='drum-pad' id={ buttonId } onClick={ handleClick } ref={ padButton }>
      <audio className='clip' id={ audioId } src={ audioSrc } ref={ soundEffect }></audio>
      { audioId }
    </button>
  );
}