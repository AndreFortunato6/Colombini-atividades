const aluno ={
    name: "André",
    age:18,
    curso: "Engenharia da Computação",
    ra:248133,

    mostrarInformações : function(){

        return this.name+"\n"+ this.age+ "\n" +this.curso+ "\n"+ this.ra }
}
console.log(aluno.mostrarInformações());

