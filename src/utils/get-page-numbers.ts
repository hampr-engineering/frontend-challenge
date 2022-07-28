const getPageNumbers = (itemsLength: number, initialPageLength: number) => {
  let numbers = [];

  for (let i = 1; i <= Math.ceil(itemsLength / initialPageLength); i++) {
    numbers.push(i);
  }

  return numbers;
};

export default getPageNumbers;
