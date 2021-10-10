let btnEnv = document.getElementById("btnEnviar");
let precio = document.getElementById("precio");
const descuento: number = 10;

btnEnv.addEventListener("click", () => {
  let precios: number = Number(precio.value);
  let total: number = precios / descuento;
  let precioF: number = precios - precioF;
  console.log("el dato ingresado es ", precioF);
});
