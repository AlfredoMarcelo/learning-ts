//Se puede extender una interface de un type, pero no un type de una interface ni un type de otro type

type Persona = {
    nombre: string
}

interface Empleado extends Persona{
    cargo: string;
}

const newEmpleado: Empleado = {
    cargo: "administrador",
    nombre: "alfredo"
} 

//Uniendo types

type User = {
    id: string;
}
type Admin = User & Persona;

const myAdmin: Admin = {
    id: "12",
    nombre: "marcos"
}

//Los types son mas especificos, juntar mas de un tipo no se puede hacer en interfaces

type ServiceResponseToken = string | null | undefined | number;
type UserTypes = "admin" | "user" | 0;

const myUser:UserTypes = "user";


//Lo bueno de las interfaces es que se pueden acoplar o juntar entre si, se puede usar el mismo nombre de la interface
//automaticamente se uniran las propiedades.
//Usar mas interfaces que types, recomendado por los creadores

interface Developer{
    name: string;
    stack: string[];
}

interface Developer{
    phone: string;
}



const me:Developer = {
    name: "",
    stack: [],
    phone: ""
}