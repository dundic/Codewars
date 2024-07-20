function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null;
}

let arr = [2, 3, 4, 5, 8];
let result = firstNonConsecutive(arr);
console.log(result);