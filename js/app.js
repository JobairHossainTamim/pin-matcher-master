function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}

document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const calInput = document.getElementById("typed-number");

  if (isNaN(number)) {
    if (number == "C") {
      calInput.value = "";
    }
  } else {
    const previousNumber = calInput.value;
    const newNumber = previousNumber + number;
    calInput.value = newNumber;
  }
});

document.getElementById("submitt").addEventListener("click", function () {
  verifyPin();
});

function verifyPin() {
  const pin = document.getElementById("display-pin").value;
  const typedNumber = document.getElementById("typed-number").value;
  const failed = document.getElementById("notification-failed");
  const success = document.getElementById("notification-success");
  if (pin == typedNumber) {
    success.style.display = "block";
    failed.style.display = "none";
  } else {
    failed.style.display = "block";
    success.style.display = "none";
  }
}
