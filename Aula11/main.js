function popularLista() {

let file ='https://6724b57fc39fedae05b270ac.mockapi.io/Animals';

fetch(file)

.then(response => response.json())

.then(myArray => {
    const lista = document.getElementById('listaAnimais');
    myArray.forEach(item=>{
        const li = document.createElement('li');
       li.textContent= `Nome: ${item.name}, Idade: ${item.idade}, Raça: ${item.raca}, ID: ${item.id}`;
        lista.appendChild (li);
    });
    
})
.catch(error=>{
    console.error('Erro na busca de dados:',error);

});

}

popularLista();

function add(){

    let file ='https://6724b57fc39fedae05b270ac.mockapi.io/Animals';
          fetch(file, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "name": 'Pandora',
            "idade": 9,
            "raca": 'Cachorro'

          })
      })
      .then(response => response.json())
      .then(myArray => {
        console.log(myArray);
         })
      .catch(error => {
          console.error('Erro ao cadastrar o animal:', error);
      });
  }


