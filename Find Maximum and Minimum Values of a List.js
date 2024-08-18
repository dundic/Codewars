var min = function(list){
  let minimum = list[0];
for(let i = 0; i < list.length; i++) {
  if(minimum > list[i]) {
  minimum = list[i];
  }
}
return minimum;
}

var max = function(list){
  let maximum = list[0];
for(let i = 0; i < list.length; i++) {
  if(maximum < list[i]) {
  maximum = list[i];
  }
}
return maximum;
}

let list = [7, 74, 8, -5];
max(list);