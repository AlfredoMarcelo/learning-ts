//Interface, nos sirve para tipas nuestro datos
/*Al poner ? después de la key en interface, hacemos que la propiedad sea opcional, si no se pone, el obj creado a partir de la 
interface debera tener si o si las propiedades declaradas en el interface*/
//Es similar a un contrato, bosquejo donde se define los datos que debe tener un obj

/*Tambien sirve para definir funciones, pero solo para describir el dato que va a devolver la funcion*/

interface Person{
    name?: string,
    code?: string | number,
    charge?: number,
    description?: string,
    sayHello: () => string
}


let person: Person = {
    name: "alfredo",
    code: "01",
    charge: 1,
    description: "hola",
    sayHello: () => "Hola"
};

let secondPerson: Person = {
    name: "marcelo",
    sayHello: () => "hola desde 2da persona"
}
secondPerson.charge = 10

console.log('secondPerson', secondPerson)
