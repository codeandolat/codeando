//= require rails-ujs
//= require activestorage
//= require tinymce
//= require_tree .

document.addEventListener("DOMContentLoaded", function (event) {
  if (document.querySelector(".delete")) {
    document.querySelector(".delete").addEventListener("click", function() {
      document.querySelector("#flash").style.display = "none";
    });
  }
});
