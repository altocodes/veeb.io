export const validateInput = (name: string, value: string, dispatch: Function) => {
  if (name === "name") {
    if (value.trim().length >= 3) {
      dispatch({
        type: "VALIDATE_INPUT",
        name,
        isValid: true,
        errorLabelIsActive: false,
      });
    } else {
      dispatch({
        type: "VALIDATE_INPUT",
        name,
        isValid: false,
        errorLabelIsActive: true,
      });
    }
  } else if (name === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(value)) {
      dispatch({
        type: "VALIDATE_INPUT",
        name,
        isValid: true,
        errorLabelIsActive: false,
      });
    } else {
      dispatch({
        type: "VALIDATE_INPUT",
        name,
        isValid: false,
        errorLabelIsActive: true,
      });
    }
  } else if (name === "phone") {
    if (value.trim().length >= 6) {
      dispatch({
        type: "VALIDATE_INPUT",
        name,
        isValid: true,
        errorLabelIsActive: false,
      });
    } else {
      dispatch({
        type: "VALIDATE_INPUT",
        name,
        isValid: false,
        errorLabelIsActive: true,
      });
    }
    // TODO: create validation for each of these name
  } else if (name === "contacts" || name === "source" || name === "addresses") {
    if (value.trim().length >= 6) {
      dispatch({
        type: "VALIDATE_INPUT",
        name,
        isValid: true,
        errorLabelIsActive: false,
      });
    } else {
      dispatch({
        type: "VALIDATE_INPUT",
        name,
        isValid: false,
        errorLabelIsActive: true,
      });
    }
  }
};