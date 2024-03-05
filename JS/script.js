/*

    Autor: Diego Alejandro Forero Rubiano
    Fecha de la ultima actualización: 04 de marzo de 2024
    Ultimos cambios realizados: Se agregaron diferentes comentarios respecto al funcionamiento de cada una de las secciones
    del archivo JavaScript que se encuentra debajo

*/

/* Creo la clase CalculadoraBase teniendo en cuenta el paradigma de POO */
class CalculadoraBase {

    /*Se crea un constructor para que la clase CalculadoraBase inicie con el valor de la variable resultado como vacio */
    constructor() { this.resultado = ''; }

    /* 
        Se crea una sentencia condicional if que funcionara de tal manera en la que reciba el parametro valor el cual se basa
        escencialmente en los botones que representan funciones, como =, C, etc. entre los cuales en caso de que se oprima el 
        = en el teclado virtual de la calculadora accione la funcion eval proveniente de JavaScript para que tome la cadena 
        que se encuentre en el input de la calculadora y calcule el resultado respecto a la misma, así, simplificando esta 
        condicional, ya que no es necesario agregar una condicion en caso de que el usuario ingrese +, -, *, o /.

        En caso de que se oprima la tecla C en el teclado virtual de la calculadora, el codigo respondera realizando un barrido
        o una limpieza total del input principal, devolviendo el valor del input a "vacio".

        Por ultimo, después de ejecutar alguna accion gracias al resultado de la senetencia condicional, se utilizara el get element
        by id para actualizar el contenido del input con el id resultado
    */
    agregarValor(valor) {
        if (valor === '=') this.resultado = eval(this.resultado);
        else if (valor === 'C') this.resultado = '';
        else this.resultado += valor;
        document.getElementById('resultado').value = this.resultado; // Actualizar el campo de resultado en el HTML
    }
}

/* Se crea la constante Calculadora la cual se encargara de instanciar la clase Calculadora Base */
const calculadora = new CalculadoraBase();

/* Se obtienen todos los elementos (botones) y se encapsula dentro de la constante botones*/
const botones = document.querySelectorAll('button');

/*
    Se utiliza el metodo forEach teniendo en cuenta la variable botones par aque por cada button que se encuentre dentro
    de la constante botones y despues se crea un evento listener el cual se va a encargar de que al momento de oprimir un
    boton representante de un numero o un simbolo de una operación lo lleve al input
*/
botones.forEach((boton) => {
    boton.addEventListener('click', () => {
        const valor = boton.textContent;
        calculadora.agregarValor(valor);
    });
});