let array=[3,6,8,4,11,45,5,23,1]

function encontraMaiorNumero(a) {
    let x=a[0];
    for(let i=0;i<a.length; i++)
        if(x<a[i])
            x=a[i];

return x
}
console.log(encontraMaiorNumero(array));