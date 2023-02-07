import React from 'react';
import { DrumPad } from './DrumPad';
import { drumPadProps } from '../helpers/constants';
import { useSelector } from 'react-redux';

export const DrumMachine:React.FC = (): React.ReactElement => {
  const displayText: string = useSelector((state: string) => state);
  return (
    <div id="drum-machine">
      <div id="button-wrapper">
        {drumPadProps.map(drumPad => <DrumPad key={drumPad.audioId} buttonId={drumPad.buttonId} audioId={drumPad.audioId} audioSrc={drumPad.audioSrc}/>)}
      </div>
      <div id="control-panel">
        <div id="display">{displayText}</div>
      </div>
    </div>
  );
}