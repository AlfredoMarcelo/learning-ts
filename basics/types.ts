let age: number = 20
let nombre: string = "alfredo"
let isValid: boolean = true

//Objetos
let person: object = {name: "alfredo"}

//Arreglos
let fruits: Array<string> = ["manzana", "pera"]
let valores: number[]  = [600, 1500]
let paises: object[] = [{name: "chile"}, {name: "colombia"}, {name: "perú"}]

//Cualquier tipo (any), evitar este uso
let response: any = "hola"
response = 20;
response = true;
response = ["hola", 23];

//VOID (funcion que no retorna nada)

function saludar(): void{
    console.log("first")
}

//UNKNOW

let response2:unknown;
response2 = true;
if(response2){
    console.log("es true")
}

//NULL y UNDEFINED(ambos sirven para manejo de respuesta de API, manejo de errores )

let response3 = null;   //no estan disponible, esta vacia o ha retornado algo que no retorno nada
let response4 = undefined; //no han sido inicializadas o no ha sido definida


//Valor con mas de un tipo de dato
//(?.)Operador null safety, permite evaluar que sea diferente de undefined o null
//Este tipo de uso sirve para validar datos de API

//Tambien se puede crear un type para definir un grupo de tipos de datos
//Esto ayuda a centralizar la logica de los tipos de datos, ayuda bastante a manejar errores o cambios
type datosDeResponse = string | number | undefined;


let response5: datosDeResponse= 5;
response5?.toString()



//Type ASSERTION (xx as dato), castear un tipo de dato, con esto hacemos que se trate un valor como estimemos
//Ej: hacer que lo trate como string para q muestre metodos de estring
let message: any = "";
(message as string).slice(1)

//Otro uso, dentro de una variable

let messageUppercase = (message as string).toUpperCase()
//Otra manera, castear el valor con <> en adelante sera string
let messageUppercase2 = <string> message;
messageUppercase2.toUpperCase();

//Casteando un htmlElement
//casteo con <>, se usa antes del valor de la variable
const canvas = <HTMLCanvasElement>document.getElementById("canvas");
//Otra manera, utilizando as, seria lo mismo
const canvas2 = document.getElementById("canvas") as HTMLCanvasElement;