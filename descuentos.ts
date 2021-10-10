let btnEnv = document.getElementById("btnEnviar");
let precio = document.getElementById("precio");
const descuento: number = 10;

btnEnv.addEventListener("click", () => {
  let precio1: number = Number(precio.value);
  let total: number = precio1 / descuento;
  let precioF: number = precio1 - total;
  console.log("el dato ingresado es ", precio1, ".");
  console.log("el descuento es del ", descuento, "%.");
  console.log("el Valor final a pagar es de: ", precioF);
});
