function fibs(number) {
  const fibsArray = [];
  let prevprev = 0;
  let prev = 1;
  let current = 1;
  for (let i = 1; i <= number; i++) {
    switch (i) {
      case 1:
        fibsArray.push(0);
        break;
      case 2:
        fibsArray.push(1);
        break;
      default:
        fibsArray.push(current);
        prevprev = prev;
        prev = current;
        current = prev + prevprev;
    }
  }
  return fibsArray;
}

console.log(fibs(10));
