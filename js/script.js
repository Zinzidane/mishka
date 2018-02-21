// Добавление карты Google Maps

function initMap() {
  var uluru = {lat: 59.938826, lng: 30.323083};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'zinzidane.github.io/mishka',
    icon: {
      url: "img//icons/icon-map-pin.svg",
      scaledSize: new google.maps.Size(124, 106)
    }
  });
}


// Навигация на мобильных устройствах
var navMain = document.querySelector(".main-nav");
var navToggler = document.querySelector(".main-nav__toggler");

navMain.classList.remove("main-nav--nojs");

navToggler.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});


// Иконка поиска