var valorDolar = Number (prompt("digite um valor em dolar:"))

var taxacambio = 5.30

var valorconvertido = valorDolar * taxacambio

alert(`${valorDolar} USD = R$${valorconvertido.toFixed(2).replace(".",",")}`)