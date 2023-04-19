var age = 20;
var nombre = "alfredo";
var isValid = true;
//Objetos
var person = { name: "alfredo" };
//Arreglos
var fruits = ["manzana", "pera"];
var valores = [600, 1500];
var paises = [{ name: "chile" }, { name: "colombia" }, { name: "perú" }];
//Cualquier tipo (any), evitar este uso
var response = "hola";
response = 20;
response = true;
response = ["hola", 23];
//VOID (funcion que no retorna nada)
function saludar() {
    console.log("first");
}
//UNKNOW
var response2;
response2 = true;
if (response2) {
    console.log("es true");
}
//NULL y UNDEFINED(ambos sirven para manejo de respuesta de API, manejo de errores )
var response3 = null; //no estan disponible, esta vacia o ha retornado algo que no retorno nada
var response4 = undefined; //no han sido inicializadas o no ha sido definida
var response5 = 5;
response5 === null || response5 === void 0 ? void 0 : response5.toString();
//Type ASSERTION (xx as dato), castear un tipo de dato, con esto hacemos que se trate un valor como estimemos
//Ej: hacer que lo trate como string para q muestre metodos de estring
var message = "";
message.slice(1);
//Otro uso, dentro de una variable
var messageUppercase = message.toUpperCase();
//Otra manera, castear el valor con <> en adelante sera string
var messageUppercase2 = message;
messageUppercase2.toUpperCase();
//Casteando un htmlElement
//casteo con <>, se usa antes del valor de la variable
var canvas = document.getElementById("canvas");
//Otra manera, utilizando as, seria lo mismo
var canvas2 = document.getElementById("canvas");
