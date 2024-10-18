const produto={
    name: "Lego Star Wars Jabba's Sail Barge",
    price: 1000,
    quantity: 1,
   
    calcularTotal: function(){
        return this.quantity * this.price
    }
}
console.log(produto.calcularTotal());