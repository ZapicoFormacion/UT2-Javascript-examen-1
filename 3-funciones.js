/**
 * 3 Función [4puntos]
 * 
 * Función que recibe como parámetros dos números y la operación a realizar. 
 * [1pt] Si la operación es 'sumar', muestra por pantalla la suma de ambos
 * [1pt] Si la operación es 'restar', muestra la resta
 * [1pt] Si la operación no  es ninguna de las dos, mostrar 'operación desconocida'
 * [1pt] Hacer que el parámetro de la operación sea siempre 'sumar' por defecto (en caso de que no se especifique)
 * 
 */

console.log('ejercicio 3') //no quitar este console.log, empezar debajo el ejercicio

function operación(número1, número2, operación = 'sumar') {
    let mensaje = ''
    switch (operación) {
        case 'sumar':
            mensaje = `${número1} + ${número2} = ` + (número1 + número2)
            break
        case 'restar':
            mensaje = `${número1} - ${número2} = ` + (número1 - número2)
            break
        default:
            mensaje = 'operación desconocida'
    }
    console.log(mensaje)
}


operación(3, 6)
operación(6, 3)
operación(3, 6, 'sumar')
operación(6, 3, 'sumar')
operación(3, 6, 'restar')
operación(6, 3, 'restar')
