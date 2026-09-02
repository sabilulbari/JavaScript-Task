// Question No. 1

const describeValue = (value) => {
  const typeOfValue = typeof value;
  if (value) {
    return `"${typeOfValue} | truthy"`;
  } else {
    return `"${typeOfValue} | falsy"`;
  }
};


