const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
  "O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
  "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
   "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
   "%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
   "<",">",".","?","/"];

let getBtn = document.getElementById("gen-btn")
let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let passwordLength = document.getElementById("password-length")
let randomPassword1 = ""
let randomPassword2 = ""
let randomNumber1 = 0
let randomNumber2 = 0

getBtn.addEventListener("click", function() {
  if(passwordLength.value < 0 || passwordLength.value > 20) {
    passwordLength.value = 20
  }
  generate()

  password1.textContent = randomPassword1
  randomPassword1 = ""

  password2.textContent = randomPassword2
  randomPassword2 = ""

})

function generate() {
  for (let i = 0; i < passwordLength.value; i++){
    randomNumber1 = Math.floor(Math.random() * (characters.length))
    randomPassword1 += characters[randomNumber1]

    randomNumber2 = Math.floor(Math.random() * (characters.length))
    randomPassword2 += characters[randomNumber2]
  }
}
