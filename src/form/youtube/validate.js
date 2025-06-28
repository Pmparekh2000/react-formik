export const validate = (value) => {
  // Conditions 1: We need an error object to be returned from validate method.
  // Conditions 2: The returned error object needs to have the same keys as the name of the form fields.
  // Conditions 3: The values of these keys must be strings indicating what the error messages must be.
  let errors = {};

  if (!value.name) {
    errors.name = "Required";
  }

  if (!value.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
    errors.email = "Invalid email format";
  }

  if (!value.channel) {
    errors.channel = "Required";
  }

  return errors;
};
