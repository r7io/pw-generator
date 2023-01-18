
function generate() {
    let password = "";
    let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%&*_-~";
    let availableChars = "";

    if (document.getElementById("uppercaseletters").checked) {
        availableChars += uppercaseLetters;
    }
    if (document.getElementById("lowercaseletters").checked) {
        availableChars += lowercaseLetters;
    }
    if (document.getElementById("numbers").checked) {
        availableChars += numbers;
    }
    if (document.getElementById("symbols").checked) {
        availableChars += symbols;
    }
    let length = document.getElementById("length").value;

    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars.charAt(randomIndex);
    }

    document.getElementById("password").innerHTML = password;
    document.getElementById("copy").disabled = false;
}

function copyPassword() {
    var password = document.getElementById("password").innerHTML;
    password = password.substring(password.indexOf(":") + 2);
    var textArea = document.createElement("textarea");
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    var done = document.getElementById("done-area");
    done.innerHTML = ("Copied password");
}