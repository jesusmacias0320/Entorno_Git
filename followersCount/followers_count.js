let count = 0; // Initialize count to 0

function increaseCount(){
    count++; //Incrementar el conteo en 1
    displayCount(); // Mostrar el conteo
    checkCountValue();// Verificar el valor del count y mostrar mensajes
}

function displayCount(){
    document.getElementById('countDisplay').innerText = count; // Mostrar conteo en el HTML
}

function checkCountValue(){
    if(count === 10){
        alert("¡Tu publicacion de Instagram gano 10 seguidores! ¡Felicidades!");
    }else if(count === 20){
        alert("¡Tu publicación de Instagram ganó 20 seguidores! ¡Sigue así!");
    }
}