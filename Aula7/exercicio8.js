let string= "ignaciogay"

function vogais(x){
    let y=0
    for(let i=0;i<x.length;i++)
        if(x[i]==='a'||x[i]==='e'||x[i]==='o'||x[i]==='i'||x[i]==='u'||x[i]==='A'||x[i]==='E'||x[i]==='O'||x[i]==='I'||x[i]==='U')
    y++;
    return y;
}

console.log(vogais(string));
