const random = (min, max, current) => {
  let randomNum = Math.random() * (max - min) + min;
  let roundedRandom = Math.round(randomNum);

  if (current === roundedRandom) {
    return roundedRandom + 1 > max ? roundedRandom - 1 : roundedRandom + 1;
  }

  return roundedRandom;
};

export { random };
