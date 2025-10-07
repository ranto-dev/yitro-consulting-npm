const selectRandomObjects = (arr: [], num: number) => {
  const shuffled = [...arr];
  let i = arr.length;
  let temp, rand;

  while (i !== 0) {
    rand = Math.floor(Math.random() * i);
    i--;

    temp = shuffled[i];
    shuffled[i] = shuffled[rand];
    shuffled[rand] = temp;
  }

  return shuffled.slice(0, num);
};

export default selectRandomObjects;
