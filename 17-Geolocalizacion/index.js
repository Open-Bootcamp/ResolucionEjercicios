let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 43.288773445332524,
        lng: -2.163845628766325,
      },
      map,
      title: "Zarautz",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 36.164983935422484,
        lng: -86.78260332112534,
      },
      map,
      title: "Nashville",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 36.242150706885596,
        lng: -6.0775131009957715,
      },
      map,
      title: "El Palmar",
    })
  );
}
