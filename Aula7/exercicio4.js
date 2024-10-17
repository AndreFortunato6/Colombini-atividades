let nome = "André Luiz de Albuquerque Fortunato"
let jnome = nome.toLocaleLowerCase();
const NomeArray= jnome.split(" ");

function email (x){
    let aux = 0
    aux = x.length
    return x[0] + "."+x[aux-1] +"@facens.br"

}

console.log(email(NomeArray));




