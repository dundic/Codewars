function powersOfTwo(n){
  let c = []
    for(let i = 0; i <= n; i++) {
     c.push(Math.pow(2, i))
   }
   return c
 }