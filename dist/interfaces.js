//Interface, nos sirve para tipas nuestro datos
/*Al poner ? después de la key en interface, hacemos que la propiedad sea opcional, si no se pone, el obj creado a partir de la
interface debera tener si o si las propiedades declaradas en el interface*/
var person = {
    name: "alfredo",
    code: "01",
    charge: 1,
    description: "hola",
    sayHello: function () { return "Hola"; }
};
var secondPerson = {
    name: "marcelo",
    sayHello: function () { return "hola desde 2da persona"; }
};
secondPerson.charge = 10;
console.log('secondPerson', secondPerson);
