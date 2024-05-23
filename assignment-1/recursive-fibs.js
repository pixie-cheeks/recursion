function fibsAux(number) {
  if (number === 1) return 0;
  if (number === 2) return 1;
  return fibsAux(number - 1) + fibsAux(number - 2);
}

function fibsRec(number) {
  if (number === 1) {
    return [0];
  }
  return fibsRec(number - 1).concat(fibsAux(number));
}

console.log(fibsRec(8));
