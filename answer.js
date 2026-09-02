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
