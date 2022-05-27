let emailSU = document.getElementById("emailRegis");
let NickSU = document.getElementById("NickSU");
let passSU = document.getElementById("passRegis");
let SUBtn = document.getElementById("regisBtn");
const BLANK = "";
console.log(emailSU);
console.log(SUBtn);
SUBtn.addEventListener("click", function () {
  let email = emailSU.value;
  let nickname = NickSU.value;
  let pw = passSU.value;

  if (email == BLANK || nickname == BLANK || pw == BLANK) {
    alert("Điền dô đi, định đăng ký kiểu gì nếu không điền hử");
  } else if (pw < 8) {
    alert("Dưới 8 kí tự ai nhận cho hử?");
  } else {
    let account = {
      email: email,
      nickname: nickname,
      password: pw,
    };
    localStorage.setItem(nickname, JSON.stringify(account));
    alert("Hè hè chào mừng");

    // clear value
    emailSU.value = BLANK;
    NickSU.value = BLANK;
    passSU.value = BLANK;
  }
});
