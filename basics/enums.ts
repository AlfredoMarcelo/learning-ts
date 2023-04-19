//ENUM , es un tipo de dato que nos permite alamcenar listas de valores estaticos, enumera una lista comenzando por 0
//Sirve mas que nada para el manejo de valores de base de datos
enum Users{
    NormalUser, //0
    PayedUser,  //1
    AdminUser,  //2
    MegaUser    //3
}

const myUser = Users.AdminUser;
console.log(myUser)