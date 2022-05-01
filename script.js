document.querySelector(".container").addEventListener("click", function (e) {
  const close = e.target.closest(".panel");
  console.log(close);

  if (!close) return;
  if (close.classList.contains("panel")) {
    document
      .querySelectorAll(".panel")
      .forEach((panel) => panel.classList.remove("panel-active"));

    close.classList.toggle("panel-active");
  }
});
