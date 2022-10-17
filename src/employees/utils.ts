function calculateAge(userDateinput) {
  const birthDate = new Date(userDateinput);
  console.log(' birthDate' + birthDate);

  // get difference from current date;
  const difference = Date.now() - birthDate.getTime();

  const ageDate = new Date(difference);
  const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
  return calculateAge;
}
module.exports = { calculateAge };
