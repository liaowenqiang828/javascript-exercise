function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  const resultArray = collection.filter(number => number % 3 === 0);
  return resultArray;
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  const resultArray = collection.filter((number, index) => collection.indexOf(number) === index);
  return resultArray;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
