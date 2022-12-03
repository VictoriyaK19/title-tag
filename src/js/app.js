import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
  var timer = setTimeout(() => {
    document.title = "One new message";
    clearTimeout(timer);
  }, 3000);

});
