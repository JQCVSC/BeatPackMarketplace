var buyCountText = document.querySelector("#buy-count");
var rapBtn = document.querySelector("#rap-btn");
var rnbBtn = document.querySelector("#rnb-btn");
var afrolatinBtn = document.querySelector("#afrolatin-btn");
var trapBtn = document.querySelector("#trap-btn");
var footer = document.querySelector("footer");
var signUpForm = document.querySelector(".email-sign-up");
var input = document.querySelector("input");
var signUpBtn = document.querySelector("#sign-up");
var counter = 0;

function addToBuyList() {
  counter += 1;
  //counter = counter + 1;
  if(counter === 1){
                                //"1 Pet" or below
    buyCountText.textContent = counter + " Packs"
  } else {
    buyCountText.textContent = counter + " Packs"
  }
}

rapBtn.addEventListener("click", addToBuyList);
rnbBtn.addEventListener("click", addToBuyList);
afrolatinBtn.addEventListener("click", addToBuyList);
trapBtn.addEventListener("click", addToBuyList);

function emailSubmitHandler(){
  var confirmationMsg = document.createElement("p");
  confirmationMsg.textContent = "Thanks for subscribing! A confirmation email was sent to " + input.value;
  signUpForm.remove();
  footer.appendChild(confirmationMsg);
}

signUpBtn.addEventListener("click", emailSubmitHandler);