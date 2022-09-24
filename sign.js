const btn = document.querySelector(".button");

//Regular expression Testing
emailRule =
  /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

btn.addEventListener("click", function () {
  // var formcheck = true;
  console.log("clicked");
  // confirm_check(formcheck);
  document.querySelector(".message").innerHTML = "";
  document.querySelector(".email_message").innerHTML = "";
  document.querySelector(".password_message").innerHTML = "";
  document.querySelector(".confirm_message").innerHTML = "";
  
  if (document.getElementById("name").value == "") {
    document.querySelector(".name_message").style.color = "red";
    document.querySelector(".name_message").innerHTML = "此欄位不可空白";
    return;
  } 


  if (document.getElementById("email").value.search(emailRule) === -1) {
    document.querySelector(".email_message").style.color = "red";
    document.querySelector(".email_message").innerHTML = "email格式錯誤";
    return;
  }

  if (document.getElementById("password").value == "") {
    document.querySelector(".password_message").style.color = "red";
    document.querySelector(".password_message").innerHTML = "此欄位不可空白";
    return;
  }

  if (document.getElementById("password").value.length > 12) {
    document.querySelector(".password_message").style.color = "red";
    document.querySelector(".password_message").innerHTML =
      "密碼不可超過12字元";
    return;
    }

    if (
      document.getElementById("password").value !==
      document.getElementById("confirm_password").value
    ) {
      document.querySelector(".confirm_message").style.color = "red";
      document.querySelector(".confirm_message").innerHTML = "not matching";
      return;
    }

  console.log("送出");
  window.location.replace("index.html");
  // email_check(formcheck);
  // password_check(formcheck);
  // namecheck(formcheck);
});

// function namecheck(formcheck) {
//   if (document.getElementById("name").value == "") {
//     document.querySelector(".name_message").style.color = "red";
//     document.querySelector(".name_message").innerHTML = "此欄位不可空白";

//   } else {
//     document.querySelector(".name_message").style.color = "green";
//     document.querySelector(".name_message").innerHTML = "V";
//   }
// }

// function email_check(formcheck) {
//   if (document.getElementById("email").value.search(emailRule) != -1) {
//     document.querySelector(".email_message").style.color = "green";
//     document.querySelector(".email_message").innerHTML = "V";
//   } else {
//     document.querySelector(".email_message").style.color = "red";
//     document.querySelector(".email_message").innerHTML = "email格式錯誤";

//   }
// }

// function password_check(formcheck) {
  
//   } else

//   } else {
//     document.querySelector(".password_message").style.color = "green";
//     document.querySelector(".password_message").innerHTML = "V";
//   }
// }

// function confirm_check(formcheck) {
//   if (
//     document.getElementById("password").value ==
//     document.getElementById("confirm_password").value
//   ) {
//     document.querySelector(".confirm_message").style.color = "green";
//     document.querySelector(".confirm_message").innerHTML = "matching";
//   } else {
    
// }
