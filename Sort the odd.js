function sortArray(array) {
  // Return a sorted array.
  let oddArr = array.filter(e => e % 2).sort((a,b) => a - b);
  return array.map(e => e % 2 ? oddArr.shift() : e );
}