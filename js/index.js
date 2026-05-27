$(function () {
  let currentIndex = 0;
  // 1. Corrected selector to lowercase ".slide"
  const slides = document.querySelectorAll(".slide");

  function changeSlide() {
    slides[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].classList.add("active");
  }

  // 5. 500ms is very fast (0.5s). 3000ms (3s) is usually better for reading text.
  setInterval(changeSlide, 2000);

  $(".bar").on("click", function () {
    $("header .menu").toggleClass("on");

    $(".bar").css({ "z-index": "10" });
  });

  $("#visual ul li").on("click", function () {
    let index = $(this).index();

    let target;

    if (index == 0) target = $("#visual");
    if (index == 1) target = $("#con01");
    if (index == 2) target = $("#con02");
    if (index == 3) target = $("#con03");
    if (index == 4) target = $("#con04");

    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      600,
    );
  });

  $(window).on("scroll", function () {
    let scrollTop = $(window).scrollTop();

    $("#container section").each(function () {
      let sectionTop = $(this).offset().top;

      // 화면 높이 기준 X → section 위치 기준 O
      if (scrollTop >= sectionTop - 300) {
        $(this).find("h1").addClass("on");
      }
    });
  });
});
