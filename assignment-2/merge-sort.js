function mergeSort(array) {
  if (array.length === 1) return array;
  const mid = Math.ceil(array.length / 2);

  const firstHalf = mergeSort(array.slice(0, mid));
  const secondHalf = mergeSort(array.slice(mid));
  const result = [];

  while (firstHalf.length !== 0) {
    if (secondHalf.length === 0) {
      result.push(...firstHalf);
      break;
    }
    if (firstHalf[0] < secondHalf[0]) {
      result.push(firstHalf.shift());
    } else {
      result.push(secondHalf.shift());
    }
  }

  result.push(...secondHalf);

  return result;
}

// console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
// console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([5, 2, 4, 3, 7]));
