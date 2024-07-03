// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid
//  if they consist of four octets, with values between 0 and 255, inclusive.
// Valid inputs examples:

// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89

// Invalid input examples:

// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

// take str and split it at "."
// go over array and each element ->
// check if its <  256 & >= 0 and no letter / only a number
// if number in element > 1 first number cant be 0
// if so return true else false

function isValidIP(str) {
  const singleNumbers = str.split(".");
  if (isNaN(str)) {
    return false;
  }

  if (singleNumbers.length !== 4) {
    return false;
  }

  const isValid = singleNumbers.every((segment) => {
    if (/^\d+$/.test(segment)) {
      const num = parseInt(segment, 10);
      return num >= 0 && num < 256;
    } else {
      return false;
    }
  });

  return isValid;
}
