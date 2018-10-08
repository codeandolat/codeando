//= require rails-ujs
//= require activestorage
//= require_tree .

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector(".delete").addEventListener("click", function() {
    document.querySelector("#flash").style.display = "none";
  });
});
