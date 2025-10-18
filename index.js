document.addEventListener("DOMContentLoaded", function () {
  const serviceHeads = document.querySelectorAll(".service__head");

  const serviceDescriptions = document.querySelectorAll(
    ".service__description"
  );

  serviceHeads.forEach((head, index) =>
    head.addEventListener("mouseover", function () {
      serviceHeads.forEach((el) =>
        el.classList.contains("service__head--active")
          ? el.classList.remove("service__head--active")
          : false
      );
      head.classList.add("service__head--active");
      serviceDescriptions.forEach((el) =>
        el.classList.contains("service__description--active")
          ? el.classList.remove("service__description--active")
          : false
      );
      serviceDescriptions[index].classList.add("service__description--active");
    })
  );
});
