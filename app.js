

//ciclo  por conteo



// let numero = parseInt(prompt('ingrese un numero'))

// for(let i = 1; i <= 10; i++ ){
//     let resultado = numero * i
//     console.log(numero + " X " + i + " = " + resultado);
    
// }


//ciclo condicional while y do while

// let numero = 1

// while(numero <= 10){
//    console.log("se ejecuta",numero);
//    numero++
  
// }


// let nombre = prompt('ingrese un nombre')

// while(nombre != 'leo'){
//     alert('nombre incorrecto')
//     nombre = prompt('ingrese un nombre')
// }

// alert('bienvenido')
// let repetir = false
// do{
//     console.log("solo una vez");
// }while(repetir)

//switch
// let numero = parseInt(prompt('ingrese un numero'))
// switch (numero) {
//     case 5:
//     console.log('tu numero es cinco');
        
//         break;

//         case 7:
//             console.log('tu numero es siete');
//             break;
//     default:
//         console.log('cualquier numero');
//         break;
// }

let nombre =  prompt('ingrese su nombre')

switch (nombre) {
    
        case "leo":
        console.log("hola leo");
        break;
        
        case "marcos":
        console.log("hola marcos");
        break;

        case "alan":
            console.log("hola alan");
            break;
        
        case "raul":
              console.log("hola raul");
              break;
    default:
        console.log('no se quien sos');
        break;
}