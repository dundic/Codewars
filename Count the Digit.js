function nbDig(n, d) {
  // your code
 result = ''
  for(let i = 0; i <= n; i++) {
  result += i ** 2
}
return result.split(d).length-1
}