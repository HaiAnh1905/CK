function myFunction() {
  document.getElementById("kind-cnt").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropBtn")) {
    let dropdown = document.getElementsByClassName("cnt");
    let i;
    for (i = 0; i < dropdown.length; i++) {
      let openDropdown = dropdown[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const second = document.getElementById("second");
for (let product of Merchandise) {
  let html = `<a class="cart" href="">
    <img src="${product.img}" alt="" />
    <div class="txt">
      <h1>${product.title}</h1>
      <div class="prz-qtt">
        <div class="prize">${product.prize}</div>
      </div>
    </div>
  </a>`;
  second.insertAdjacentHTML("beforeend", html)
}
