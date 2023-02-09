let numbers = [
  76, 58, 64, 28, 13, 39, 12, 43, 49, 81, 42, 83, 82, 23, 62, 49, 40, 33, 29,
  62, 70, 49, 8, 81, 12, 38, 53, 13, 37, 9, 1, 7, 59, 42, 1, 97, 95, 73, 2, 40,
  94, 54, 28, 39, 64, 30, 20, 67, 67, 95, 21, 65, 58, 20, 97, 73, 88, 8, 27, 91,
  17, 46, 11, 83, 77, 44, 68, 76, 11, 80, 85, 47, 49, 40, 15, 72, 58, 91, 13,
  46, 74, 21, 40, 30, 46, 5, 29, 39, 74, 73, 83, 35, 66, 14, 62, 88, 27, 79, 47,
  81,
];

let palabras = [
  "plátano",
  "guitarra",
  "silla",
  "perro",
  "pájaro",
  "libro",
  "mesa",
  "ventana",
  "puerta",
  "ratón",
  "teclado",
  "monitor",
  "teléfono",
  "zapato",
  "reloj",
  "calculadora",
  "bolígrafo",
  "cuaderno",
  "lápiz",
  "borrador",
];

let chicos = [
  "ALEJANDRO C",
  "ALEJANDRO L",
  "CARO",
  "IGNACIO",
  "MATIAS",
  "RONALD",
  "SIMON",
  "CESAR",
  "EDGAR",
];

function esBacan(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] + " es bacan");
  }
}

// esBacan(chicos);

const minusculas = (array) => {
  return array.map((pepito) => pepito.toLowerCase());
};

// esBacan(minusculas(chicos));

function capitalize(array) {
  let variable = [];
  for (let i = 0; i < array.length; i++) {
    const palabra = array[i][0].toUpperCase() + array[i].slice(1).toLowerCase();
    variable = [...variable, palabra];
  }
  return variable;
}

// const array = ["CAROLINA", "SARA"];
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[0][0]);
// console.log(array[1][0]);
// console.log(array[0][array[0].length - 2]);

esBacan(capitalize(chicos));

let sales = [
  { producto: "Iphone", cantidad: 5, precio: 10 },
  { producto: "Samsung", cantidad: 3, precio: 20 },
  { producto: "Iphone", cantidad: 2, precio: 10 },
];

const ventaPorProducto = (array) => {
  const total = array.reduce((acumulado, venta) => {
    if (!acumulado[venta.producto]) {
      acumulado[venta.producto] = { cantidad: 0, total: 0 };
    }
    // 0 +
    acumulado[venta.producto].cantidad += venta.cantidad;
    acumulado[venta.producto].total += venta.precio * venta.cantidad;
    return acumulado;
  }, {});
  return total;
};

console.log(ventaPorProducto(sales));
