export const getRandomNumber = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export const getRandomArray = (array) => {
  let counter = getRandomNumber(1, array.length);
  const arrayCopy = [...array];
  const randomArray = [];


  while (counter > 0) {
    const randomIndex = getRandomNumber(0, arrayCopy.length - 1);
    const [randomElement] = arrayCopy.splice(randomIndex, 1);

    randomArray.push(randomElement);

    counter--;
  }

  return randomArray;
};

export const render = (container, element, place) => {
  container.insertAdjacentElement(place, element);
};

