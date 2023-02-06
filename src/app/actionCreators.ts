import * as actionTypes from "./action-types"

export function updateDisplay(soundID: string): UpdateDisplayAction {
  return {
    type: actionTypes.UPDATEDISPLAY,
    payload: soundID  
  };
}