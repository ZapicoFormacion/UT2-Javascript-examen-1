/**
 * 1 Condicionales [3 puntos]
 * 
 * Crear un programa que pida al usuario(prompt) que introduzca uno de los siguientes caracteres: + - x /
 * 
 * Si introduce '+' mostrar por consola 'sumar'
 * Si introduce '-' mostrar por consola 'restar'
 * Si introduce 'x' mostrar por consola 'multiplicar'
 * Si introduce '/' mostrar por consola 'dividir'
 * Si no introduce ninguno de los anteriores, mostrar :'no conozco esa operación'
 * 
 */

console.log('ejercicio 1') //no quitar este console.log, empezar debajo el ejercicio

let mensaje = ''
switch (window.prompt('Operación?')) {
    case '+':
        mensaje = 'sumar'
        break
    case '-':
        mensaje = 'restar'
        break
    case 'x':
        mensaje = 'multiplicar'
        break
    case '/':
        mensaje = 'dividir'
        break
    default:
        mensaje = 'no conozco esa operación'
}
console.log(mensaje)