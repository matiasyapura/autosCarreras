let btnEnv = document.getElementById("btnEnviar");

let rotulo = document.getElementById("rotulo");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");

let dato = document.getElementById("dato");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");

rotulo.innerHTML = "Ingrese tiempo 1ra vuelta:  ";
rotulo1.innerHTML = "Ingrese tiempo 2ra vuelta:  ";
rotulo2.innerHTML = "Ingrese tiempo 3ra vuelta:  ";
rotulo3.innerHTML = "Ingrese tiempo 4ra vuelta:  ";

btnEnv.addEventListener("click", () => {
  // TU CODIGO VA AQUI, POR EJEMPLO:

  let vuelta1: number = dato.value;
  let vuelta2: number = dato1.value;
  let vuelta3: number = dato2.value;
  let vuelta4: number = dato3.value;

  let tiempoTotal: number =
    Number(vuelta1) + Number(vuelta2) + Number(vuelta3) + Number(vuelta4);

  console.log("El total del tiempo es: ", tiempoTotal);

  let promedio: number = Number(tiempoTotal) / 4;

  console.log("El promedio del tiempo es: ", promedio);
});
