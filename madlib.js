const madLib = (profession, name, activity, isHappyEnding) => {
  let message = "";
  message += `There was a ${profession} named ${name}.\n`;
  message += `They love to ${activity}.\n`;
  if (isHappyEnding) {
    message += `meow`;
  } else {
    message += `They went to the olympics to breakdance, lost, and never did it again.`;
  }
  return message;
};

module.exports = madLib;
