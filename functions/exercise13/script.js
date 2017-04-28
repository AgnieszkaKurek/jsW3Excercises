function getFactorsOfPositiveInteger(number){
var array = [];
for(var i = 0; i <= number ; i++) { 
number % i === 0? array.push(i):array ;
}
return array;
}