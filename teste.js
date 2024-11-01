var numeros = [4,5,7];
var resul1 = numeros.map(function(num){
return num * 2});

var resul2 = numeros.reduce(function(x,v){
    return x + v;
});

console.log(resul1);
console.log(resul2);

resul1.forEach(element=>{
    resul3= element * resul2;
});

console.log(resul3)