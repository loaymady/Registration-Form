function fun() {
  var characters = /^[A-Za-z ]+$/;
  var numbers = /^[0-9]+$/;
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var idLength = document.getElementById("userID").value.length;
  var passLength = document.getElementById("password").value.length;
  var userName = document.getElementById("name").value;
  var country = document.getElementById("country").value;
  var zipcode = document.getElementById("zcode").value;
  var userEmail = document.getElementById("email").value;
  var userSex = document.getElementById("male");
  var userSex2 = document.getElementById("female");
  var userLang1 = document.getElementById("lang1");
  var userLang2 = document.getElementById("lang2");
  if (idLength == 0) {
    window.alert("UserID shouldn't be empty please try again..!");
  } else if (idLength < 5 || idLength > 12) {
    window.alert("UserID length should be from 5 to 12 ..!");
  }
  if (passLength == 0) {
    window.alert("Password shouldn't be empty please try again..!");
  } else if (passLength < 7 || passLength > 12) {
    window.alert("Password length should be from 7 to 12 ..!");
  }
  if (userName.length == 0) {
    window.alert("Name shouldn't be empty please try again..!");
  } else if (!characters.test(userName)) {
    window.alert("Name should contain alphabates characters only..!");
  }
  if (country == "def") {
    window.alert("Please select your Country..!");
  }
  if (zipcode.length == 0) {
    window.alert("zip code shouldn't be empty please try again..!");
  } else if (!numbers.test(zipcode)) {
    window.alert("zip code should contain numbers only..!");
  }
  if (userEmail.length == 0) {
    window.alert("Email shouldn't be empty please try again..!");
  } else if (!validRegex.test(userEmail)) {
    window.alert("Invalid Email Address please try again..!");
  }
  if (!userSex.checked) {
    if (!userSex2.checked) {
      window.alert("please choose your Sex..!");
    }
  }
  if (!userLang1.checked) {
    if (!userLang2.checked) {
      window.alert("please choose your Language..!");
    }
  }
}
