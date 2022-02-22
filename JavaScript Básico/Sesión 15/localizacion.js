var x = document.getElementById("mapas");

function verLocalizacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(verPosicion, verError);
    } else {
        x.innerHTML = "La geolocalización no esta soportada en este navegador.";
    }
}

function verPosicion(position) {
    var latitud_longitud = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitud_longitud + "&zoom=14&size=400x300&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
    document.getElementById("contenedor-mapa").innerHTML = "<img src='"+img_url+"'>";
}

function verError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "Permiso denegado."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Informacion no disponible."
            break;
        case error.TIMEOUT:
            x.innerHTML = "Tiempo agotado."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "Error desconocido."
            break;
    }
}