let array=[1,2,3,4,5,6,7,8,9,10]

function impar(x) {
    let array2=[]
    for (let i=0;i<x.length;i++){
        if(x[i]%2===1)
        array2 += x[i]+" ";
       
    }
    return array2;   
}

console.log(impar(array));