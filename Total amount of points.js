function points(games) {
  return games
  .map(game => {
   const [x,y] = game.split(':').map(s => parseInt(s)) 
   if(x > y) return 3;
    if(x < y) return 0; 
    return 1;})
    .reduce((total,currentValue) => total + currentValue)
}