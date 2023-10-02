// db
import { initialState } from "@/utils/data/BetaPage/inputFields";

export const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      return {
        ...state,
        [action.name]: {
          value: action.value,
          isValid: state[action.name].isValid,
          errorLabelIsActive: false,
        },
      };
    case "VALIDATE_INPUT": {
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          isValid: action.isValid,
          errorLabelIsActive: action.errorLabelIsActive,
        },
      };
    }
    case "RESET_STATE": {
      return initialState;
    }
    default:
      return state;
  }
};