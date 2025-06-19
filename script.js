let captchaCodeEl = document.getElementById("captchacode");
let captchaInputEl = document.getElementById("captchainput");
let refreshEl = document.querySelector(".refresh");
let posMessageEl = document.querySelector(".possitivemessage");
let negMessageEl = document.querySelector(".negativemessage");
let submitEl = document.querySelector(".submit");


let captchaText = ``;
let buttonDisable = true;


refreshEl.addEventListener("click", generateCaptcha)
submitEl.addEventListener("click", validateCaptcha)

window.addEventListener("keyup", (e) => {
  
  if (captchaInputEl.value != `` && e.key == "Enter")
    validateCaptcha();
  else if (captchaInputEl.value != ``) {
    negMessageEl.classList.add("displaynone");
    posMessageEl.classList.add("displaynone");
    buttonDisable = false;
    // console.log(captchaInputEl.value)
  }
  else if (captchaInputEl.value == ``)
    buttonDisable = true;
  
  buttonDisablecheck();
})

function buttonDisablecheck() {
  if (buttonDisable){
    submitEl.classList.add("disable");
    submitEl.style.cursor = "not-allowed";
  }
  else{
    submitEl.classList.remove("disable");
    submitEl.style.cursor = "pointer";
  }

}

function generateCaptcha() {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{};:,.<>?";

  const allChars = upper + lower + numbers + symbols;
  let captcha = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    captcha += allChars[randomIndex];
  }

  captchaText = captcha;
  captchaCodeEl.value = captchaText.split("").join(" ");
  console.log(captchaCodeEl.value);
  captchaInputEl.value = ``;
}


function validateCaptcha() {

  if (captchaInputEl.value == ``) {

  }
  console.log(captchaText);
  console.log(captchaInputEl.value);
  if (captchaInputEl.value == captchaText) {
    posMessageEl.classList.remove("displaynone");
    negMessageEl.classList.add("displaynone");
  }
  else {
    negMessageEl.classList.remove("displaynone");
    posMessageEl.classList.add("displaynone");
  }
  generateCaptcha();

}

generateCaptcha();