function lastIndexOf(arr, num) {
  const indexList = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      console.log(i);
      indexList.push(i);
    }
  }
  if (indexList.length === 0) {
    return -1;
  } else {
    return indexList.pop();
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), '=?', 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), '=?', 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), '=?', -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), '=?', 2);
console.log(lastIndexOf([], 3), '=?', -1);
