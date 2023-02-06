import React from 'react';
import { DrumPad } from './DrumPad';
import { drumPadProps } from '../helpers/constants';
import { useSelector } from 'react-redux';

export function DrumMachine() {
  const displayText: string = useSelector((state: string) => state);
  return (
    <div id="drum-machine">
      <div id="button-wrapper">
        {drumPadProps.map(drumPad => <DrumPad buttonID={drumPad.buttonID} audioID={drumPad.audioID} audioSRC={drumPad.audioSRC}/>)}
      </div>
      <div id="control-panel">
        <div id="display">{displayText}</div>
      </div>
    </div>
  );
}