// You need to write regex that will validate a password to make sure it meets the following criteria:
//     At least six characters long -> {6,}
//     contains a lowercase letter -> /[a-z]/
//     contains an uppercase letter -> /[A-Z]/
//     contains a digit -> /\d/
//     only contains alphanumeric characters (note that '_' is not alphanumeric)
// assign your RegExp to REGEXP:

const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{6,}$/;
