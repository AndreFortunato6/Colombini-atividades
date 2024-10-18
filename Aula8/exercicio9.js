const endereco={
    rua: "Estrada da Ponte Lavrada",
    numero:121,
    bairro:"Adão Pires de Albuquerque",
    cidade:"São Roque",
}
for(let prop in endereco){
    console.log(prop+" "+endereco[prop]);
}