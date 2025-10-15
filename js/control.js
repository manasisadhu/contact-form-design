const form = document.getElementById("mform");
form.addEventListener("submit", function (e) {
  setTimeout(() => {
    form.reset(); // clears form inputs after submit
  }, 1000); // slight delay to allow API to capture data
});
