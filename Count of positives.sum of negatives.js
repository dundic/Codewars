function countPositivesSumNegatives(input) {
  // your code here
  let arr = [];
  let sumPos = 0;
  let sumNeg = 0;
  if (input == null || input.length == 0) {
    return [];
  } 
   for ( let i = 0; i < input.length; i++) {
     if ( input[i] > 0) {
       sumPos ++;
     } else {
       sumNeg += input [i];
     }
   }
   arr.push(sumPos);
  arr.push(sumNeg);
  return arr;
}