// Tipo de dato String. Asi se crea
var nombre = "Henry"

//Tipo de dato Number
var edad = "33"
var edad2 = 33; 

//console.log("comparacion ==", edad == edad2) // comparacion solo del valor

//console.log("comparacion ===",edad === edad2) // comparacion de valor y tipo de dato



//Tipo de dato Boolean 
var esEstudiante = true 
var esProfesor = false 

function esEstudianteFunc(condicion) {
    // Cuando se ingresa el valor de condicion en true entra en el if 
if (esEstudiante === condicion) {
    console.log("es estudiante")
    return true 
    // Si no es estudiante entra en el else 
} else {
    console.log("no es estudiante, es profesor")
    return false
}

}
// No se puede llamar igual una variable y una funcion, ya que esto nos dara un error
//console.log(esEstudianteFunc(true));
//console.log(esEstudianteFunc(false)); 




// Tipo de dato Undefined 
var x; 

// Tipo de dato Null
var y = null 

// Tipo de dato object 
var persona = {
nombre: "Henry",
edad: 30,
}

// Funciones 

function saludar(nombre) {
    return "hola " + nombre 
}

//console.log(saludar("Ale")) 

//OPERADORES
//console.log(1 + 1)
//console.log(10 - 7)
//console.log(10 * 3)
//console.log(5 / 1)
//console.log(10 ** 2)
//console.log(49 % 2)

//Asociatividad
//console.log(1 + 2 * 3)

var a = 1;
var b = 2;
var c = 3;

a = b = c;

//console.log(a, b, c) // Dara como resultado "3 3 3", ya que a vale igual a b y b igual a c. 
 // Y como C vale 3, los demas valen lo mismo


 //Operadores de comparacion 

//console.log(1 == 1);
//console.log(1 != 2);

//console.log(1 === "1");
//console.log(1 === 1);

//console.log(1 !== "1");
//console.log(1 !== 1);

//console.log(1 > 2);
//console.log(1 < 2);

//console.log(1 >= 2);
//console.log(4 >= 4);
//console.log(4 >= 3);
//console.log("---------------")

//OPERADORES LOGICOS

//console.log(true && true);
//console.log(false && true);
//console.log("------------");

//console.log(1 == 1) && (2 == 2);
//console.log(2 == 2) && (3 == 4);
//console.log("-----------")

//console.log(true || true);
//console.log(false || false)
//console.log("----------")

//Metodos

var nombre = "Arturo";
//console.log(nombre.length);

//Function 

function idioma(parametroDeLaFuncion) {
    if (parametroDeLaFuncion === "es"){
        return "Hola"
    } else if (parametroDeLaFuncion == "en")  {
        return "Hello"
    } else {
        return "No es un idioma valido"
    }
}

//console.log(idioma("es"));
//console.log(idioma("en"));
//console.log(idioma("br"))

function saludar (){
return "Hola " + " Estudiantes"
}
//console.log(saludar())

// estas lineas se usan para comentarios
/* estos para bloques */

//METODO MATH 
//console.log(Math.pow (2, 5));// 2 elevado al 5(2. 2. 2. 2. 2 = 32)

//console.log(Math.random());// Nos dara un numero random entre 0 y 1

//console.log(Math.random()*10);// multiplicamos por 10 
//console.log("--------------")

var numeroRandom = Math.random();
console.log(Math.random());//Nos dara un numero random entre 0 y 1
//random
console.log(numeroRandom * 10);// le quitamos que empiece en 0
//ceil
console.log(Math.ceil(numeroRandom * 10));// le quitamos los decimales y que redondee para arriba
//floor
console.log(Math.floor(numeroRandom * 10)); //le quitamos los decimales y que redondee para abajo
//Math.max
console.log(Math.max(2, 3, 5, 8));// nos trae que numero es el mayor
//Math.min
console.log(Math.min(2, 3, 4, 5)); // nos trae que numero es menor

