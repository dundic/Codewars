function sumTwoSmallestNumbers(numbers) {  
  //Code here
  let [x,y] = numbers.sort((a,b) => a - b);
  return x + y;
}