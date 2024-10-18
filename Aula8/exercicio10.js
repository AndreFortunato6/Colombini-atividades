const aluno1 ={
    name: "Vivi",
    age:15,
    curso: "Psicologia",
    ra:248133,
}
const aluno2 ={
    name: "André",
    age:18,
    curso: "Engenharia da Computação",
    ra:248134,
}
const aluno3 ={
    name: "Ignacio",
    age:20,
    curso: "Engenharia da Computação",
    ra:248133,
}
const aluno4 ={
    name: "André",
    age:14,
    curso: "Engenharia da Computação",
    ra:248132,
}
let arrayalunos = [aluno1,aluno2,aluno3,aluno4]

function alunoMaior(x){
    let arrayMaior=[];
    for (let i=0; i<x.length;i++)
        if(x[i].age>=18)
            arrayMaior.push(x[i]);
        return arrayMaior
}

console.log(alunoMaior(arrayalunos));

