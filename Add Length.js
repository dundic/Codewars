function addLength(str) {

    let arr = [];
    let sum = str.split(' ');
    for ( let i = 0; i < sum.length; i++) {
      arr.push(sum[i] + " " + sum[i].length);
    }
    return arr;
  }
  