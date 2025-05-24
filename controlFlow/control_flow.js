let userRole = "admin";
let accessLevel;

if (userRole === "admin"){
    accessLevel = "Full access granted";

}else if (userRole === "manager" ){
    accessLevel = "Limited access granted";
}else{
    accessLevel = "No access granted"
}

console.log("Access Level", accessLevel);

let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome, Admin!";
    }else{
        userMessage = "Welcome, User!";
    }
}else{
    userMessage = "Please log in to access the system.";
}

console.log("User Message", userMessage);


let userType ="sucriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory ="Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "suscriber":
        userCategory = "Suscriber";
        break;
    default:
        userCategory= "Unknown"
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);


let roleServices ="empleado";
let authoricedLevel;

if (roleServices === "empleado"){
    authoricedLevel = "Empleado!, Acceso autorizado a los Servicios Dietéticos";
}else if (roleServices === "miembro inscrito" ){
    authoricedLevel = "Miembro Inscrito!, Acceso autorizado a los Servicios Dietéticos y a una interacción uno a uno con un dietista. ";
}else if (roleServices === "suscriptor" ){
    authoricedLevel = "Suscriptor!, Acesso autorizado parcial para facilitar unicamnete los 'Servicios Dietéticos' ";

}else if(roleServices === "no suscriptor"){
    authoricedLevel = " No Suscriptor!, Necesistas realizar la suscripcion para acceder a esta instalacion";
    
}else{
    authoricedLevel = "Desconosco tu soliticud";
}

console.log("Role Service: ", authoricedLevel);