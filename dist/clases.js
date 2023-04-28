//Es parecido a una interface, js vanilla ya lo contiene
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.sayHi = function () {
        console.log("holaa");
    };
    return Animal;
}());
var myAnimal = new Animal();
myAnimal.sayHi();
