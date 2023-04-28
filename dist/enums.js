//ENUM , es un tipo de dato que nos permite alamcenar listas de valores estaticos
var Users;
(function (Users) {
    Users[Users["NormalUser"] = 0] = "NormalUser";
    Users[Users["PayedUser"] = 1] = "PayedUser";
    Users[Users["AdminUser"] = 2] = "AdminUser";
    Users[Users["MegaUser"] = 3] = "MegaUser";
})(Users || (Users = {}));
var myUser = Users.AdminUser;
console.log(myUser);
