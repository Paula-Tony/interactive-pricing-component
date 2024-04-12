let rangeInput = document.getElementById("range");
let views = document.getElementById("views");
let price = document.getElementById("price");
let package = document.getElementById("package");
let period = document.getElementById("period");

rangeInput.addEventListener("change", function () {
  views.textContent = this.value;
  if (period.textContent === "month") {
    price.textContent = `$${(this.value * 16) / 100}.00`;
  } else {
    price.textContent = `$${(rangeInput.value * 16 * 11) / 100}.00`;
  }
});

package.addEventListener("change", function () {
  if (period.textContent === "month") {
    period.textContent = "year";
    price.textContent = `$${(rangeInput.value * 16 * 11) / 100}.00`;
  } else {
    period.textContent = 'month'
    price.textContent = `$${(rangeInput.value * 16) / 100}.00`;
  }
});
