function sumDigits(number) {
  let sum = 0;
  let numStr = Math.abs(number);
  let arr = numStr.toString().split('');
    for(let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}