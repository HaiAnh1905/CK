function myFunction1() {
  document.getElementById("cnt-1").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropBtn_1")) {
    let dropdown = document.getElementsByClassName("cnt_1");
    let i;
    for (i = 0; i < dropdown.length; i++) {
      let openDropdown = dropdown[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
function myFunction2() {
  document.getElementById("cnt-2").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropBtn_2")) {
    let dropdown = document.getElementsByClassName("cnt_2");
    let i;
    for (i = 0; i < dropdown.length; i++) {
      let openDropdown = dropdown[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
function myFunction3() {
  document.getElementById("cnt-3").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropBtn_3")) {
    let dropdown = document.getElementsByClassName("cnt_3");
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
  let html = `<a class="cart" href="" class="in">
    <img src="https://cdn.adopets.com/organization/pet/picture/2022424_204739_1653425259518.jpeg?width=350" alt="" />
    <div class="txt">
      <h1>Name</h1>
      <div class="age">
        Male/Female . Age
      </div>
    </div>
  </a>`;
  second.insertAdjacentHTML("beforeend", html);
}
