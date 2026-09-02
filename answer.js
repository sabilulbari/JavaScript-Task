// Question No. 1

const describeValue = (value) => {
  const typeOfValue = typeof value;
  if (value) {
    return `"${typeOfValue} | truthy"`;
  } else {
    return `"${typeOfValue} | falsy"`;
  }
};

// Question No. 2

const getDayType = (dayName) => {
  const inputDayName = dayName.toLowerCase();

  switch (true) {
    case inputDayName == "friday" || inputDayName == "saturday":
      return "Weekend";
    case inputDayName == "sunday" || inputDayName == "monday" || inputDayName == "tuesday" || inputDayName == "wednesday" || inputDayName == "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
};

// Question No. 3

const validateUsername = (user) => {
  const userName = user.toLowerCase();

  if (userName.length <= 4) {
    return "Too Short";
  } else if (userName.includes(" ")) {
    return "No Space Allowed";
  } else if (userName.includes("admin")) {
    return "Reserved Word";
  } else return "Available";
};

// Question No. 4

const getCngFare = (distance, isNight = false, waitingMinutes = 0) => {
  let fare = 50;

  if (distance > 2) {
    fare = fare + (distance - 2) * 15;
  }

  fare = fare + waitingMinutes * 2;

  if (isNight) {
    fare = fare * 1.2;
  }

  return fare;
};

// Question No. 5

const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return "Won";
  }

  if (ballsLeft <= 0) {
    return "Lost";
  }

  const requiredRate = (runsNeeded / ballsLeft) * 6;

  let verdict;

  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};