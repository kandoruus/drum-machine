import { UPDATEDISPLAY } from "./action-types";

const initDisplay: string = "";

export const reducer = (state: string = initDisplay, action: UpdateDisplayAction):string =>  {
  switch (action.type) {
    case UPDATEDISPLAY:
      return action.payload;
    default:
      return state;
  }
}