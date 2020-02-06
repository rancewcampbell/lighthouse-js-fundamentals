function range(start, end, step) {
  let list = [];
  if (step <= 0) {
    return list;
  } else if (start > end) {
    return list;
  } else if ((start === undefined) | (end === undefined) | (step === undefined)) {
    return list;
  } else {
    for (let i = start; i <= end; i += step) {
      list.push(i);
    }
    return list;
  }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(10, 30));
console.log(range(0, 10, 0));
console.log(range(50, 0, 1));
console.log(range(0, 10));
