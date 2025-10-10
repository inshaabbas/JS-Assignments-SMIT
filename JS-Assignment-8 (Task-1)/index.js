let balance = 1000;
let currentAction = null;

const screens = {
  welcome: document.getElementById("screen-welcome"),
  pin: document.getElementById("screen-pin"),
  menu: document.getElementById("screen-menu"),
  amount: document.getElementById("screen-amount"),
  receipt: document.getElementById("screen-receipt")
};

function showScreen(name) {
  for (let key in screens) {
    screens[key].classList.remove("active");
  }
  screens[name].classList.add("active");
}

// ===== Welcome Screen =====
document.getElementById("btn-welcome-next").addEventListener("click", () => {
  showScreen("pin");
});

// ===== PIN Screen =====
document.getElementById("btn-pin-next").addEventListener("click", () => {
  const pinValue = document.getElementById("pin-input").value;
  const err = document.getElementById("pin-error");

  if (pinValue.length === 4 && !isNaN(pinValue)) {
    err.textContent = "";
    showScreen("menu");
  } else {
    err.textContent = "PIN must be 4 digits!";
  }
});

// ===== Menu Options =====
document.querySelectorAll(".menu-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const action = btn.getAttribute("data-action");
    if (action === "balance") {
      showReceipt(null, balance);
    } else {
      currentAction = action;
      document.getElementById("amount-title").textContent =
        action === "deposit" ? "Enter deposit amount" : "Enter withdrawal amount";
      document.getElementById("amount-input").value = "";
      document.getElementById("amount-error").textContent = "";
      showScreen("amount");
    }
  });
});

// ===== Amount Submit =====
document.getElementById("btn-amount-submit").addEventListener("click", () => {
  const amtInput = document.getElementById("amount-input").value;
  const err = document.getElementById("amount-error");
  const amt = parseFloat(amtInput);

  if (isNaN(amt) || amt <= 0) {
    err.textContent = "Enter a valid amount!";
    return;
  }
  if (currentAction === "withdraw" && amt > balance) {
    err.textContent = "Insufficient balance!";
    return;
  }

  err.textContent = "";
  if (currentAction === "deposit") {
    balance += amt;
  } else if (currentAction === "withdraw") {
    balance -= amt;
  }

  showReceipt(amt, balance);
});

// ===== Back Button =====
document.getElementById("btn-amount-back").addEventListener("click", () => {
  showScreen("menu");
});

// ===== Show Receipt =====
function showReceipt(transactedAmount, newBalance) {
  const id = "TX" + Math.floor(Math.random() * 1000000);
  const now = new Date();
  document.getElementById("receipt-id").textContent = id;
  document.getElementById("receipt-balance").textContent = newBalance.toFixed(2);
  document.getElementById("receipt-date").textContent = now.toLocaleString();
  showScreen("receipt");
}

// ===== Receipt Buttons =====
document.getElementById("btn-receipt-done").addEventListener("click", () => {
  showScreen("menu");
});

document.getElementById("btn-receipt-exit").addEventListener("click", () => {
  showScreen("pin");
  document.getElementById("pin-input").value = "";
});
