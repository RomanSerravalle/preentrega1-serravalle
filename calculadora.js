//OPERACIONES

function sumar(valor1, valor2) {
  const resultado = valor1 + valor2;
  return resultado;
}

function restar(valor1, valor2) {
  const resultado = valor1 - valor2;
  return resultado;
}

function multiplicar(valor1, valor2) {
  const resultado = valor1 * valor2;
  return resultado;
}

function dividir(valor1, valor2) {
  const resultado = valor1 / valor2;
  return resultado;
}

//CALCULADORA

const nombre = prompt("Inserte su nombre: ");

function calculadora() {
  let operacion;

  while (operacion != "salir") {
    operacion = prompt(
      "¿Qué operación quiere realizar? \n+: Suma\n-: Resta\n*: Multiplicación\n/: División \n\nSalir"
    );

    operacion = operacion.toLowerCase();
    let valor1;
    let valor2;

    switch (operacion) {
      default:
        alert("La operación indicada es inválida.");

      case "+":
        valor1 = parseInt(prompt("Ingresar primer valor:"));
        valor2 = parseInt(prompt("Ingresar segundo valor:"));
        resultado = sumar(valor1, valor2);
        alert(nombre + ", el resultado es " + resultado);
        break;

      case "-":
        valor1 = parseInt(prompt("Ingresar primer valor:"));
        valor2 = parseInt(prompt("Ingresar segundo valor:"));
        resultado = restar(valor1, valor2);
        alert(nombre + ", el resultado es " + resultado);
        break;

      case "*":
        valor1 = parseInt(prompt("Ingresar primer valor:"));
        valor2 = parseInt(prompt("Ingresar segundo valor:"));
        resultado = multiplicar(valor1, valor2);
        alert(nombre + ", el resultado es " + resultado);
        break;

      case "/":
        valor1 = parseInt(prompt("Ingresar primer valor:"));
        valor2 = parseInt(prompt("Ingresar segundo valor:"));
        resultado = dividir(valor1, valor2);
        alert(nombre + ", el resultado es " + dividir(valor1, valor2));
        break;

      case "salir":
        break;
    }
  }
}

function tablas() {
  let tablasDe = parseInt(prompt(nombre + ", ¿qué tabla querés saber?"));

  for (let i = 1; i <= 10; i++) {
    alert(tablasDe + " multiplicado por " + i + " = " + tablasDe * i);
  }
}
