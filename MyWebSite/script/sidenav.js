document.getElementById("fold").addEventListener("click", function () {
  var sidenav = document.getElementById("sidenav");
  var width = window.innerWidth;

  if (width < 992) { // Для мобильных устройств
      if (sidenav.classList.contains("open")) {
          sidenav.classList.remove("open"); // Закрываем меню
      } else {
          sidenav.classList.add("open"); // Открываем меню
      }
  } else {
      sidenav.classList.toggle("collapsed"); // Сворачиваем меню на ПК
  }
});
