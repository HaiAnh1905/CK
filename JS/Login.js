let NickLG = document.getElementById("NickLO");
let passLG = document.getElementById("passLog");
let LGBtn = document.getElementById("loginBtn");
const BLANK = "";

LGBtn.addEventListener("click", function () {
  let nickname = NickLG.value;
  let pw = passLG.value;

  if (nickname == BLANK || pw == BLANK) {
    alert("Làm ơn á, điền hết dô");
  } else {
    let account = {
      nickname: nickname,
      password: pw,
    };

    let existAccount = localStorage.getItem(nickname);
    let obj = JSON.parse(existAccount);
    if (obj["nickname"] == nickname) {
      if (obj["password"] == pw) {
        alert("Xin chào trở lại!!!");
      } else {
        alert("Quên mật khẩu rồi na!");
      }
    } else {
      alert("Ngươi là ai, ta không biết, tạo tài khoản mới đi.");
    }
  }
});


