
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let messageInput = document.querySelector("#message");
let messageSendButton = document.querySelector("#sendbutton");
/*
sendButton.onclick = function(){
    alert("Hello JS!");
}
*/

let nameValid = false;
let emailValid = false;
let messageValid = false;

nameInput.addEventListener("keyup", function () {
    if (this.value.length >= 5) {
        nameValid = true;
    } else {
        nameValid = false;
    }
    allInputValidCheck();
});
emailInput.addEventListener("keyup", function () {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.value)) {
        emailValid = true;
    } else {
        emailValid = false;
    }
    allInputValidCheck();
});
messageInput.addEventListener("keyup", function () {
    if (this.value.length >= 20) {
        messageValid = true;
    } else {
        messageValid = false;
    }
    allInputValidCheck();
});

function allInputValidCheck() {
    if (nameValid && emailValid && messageValid) {
        messageSendButton.disabled = false;
    } else {
        messageSendButton.disabled = true;
    }
}
