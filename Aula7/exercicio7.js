let string = "Colombini";

function inverte(x){
    let invertida= "";
    for(let i=0;i<x.length; i++)
        invertida += x[x.length-1-i];
    return invertida;
}
console.log(inverte(string));