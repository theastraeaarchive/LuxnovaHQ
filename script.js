
const password = "LUXENTRY";

window.onload = () => {
  setTimeout(() => {
    document.getElementById("splash").classList.add("hidden");
    document.getElementById("login-screen").classList.remove("hidden");
  }, 2000);
};

function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === password) {
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("hq").classList.remove("hidden");
    fetchMoonPhase();
  } else {
    alert("Access Denied.");
  }
}

function switchTab(id) {
  document.querySelectorAll('.panel').forEach(p => p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  logMessage("Switched to " + id + " panel.");
}

function logMessage(msg) {
  const log = document.getElementById("log");
  const time = new Date().toLocaleTimeString();
  log.innerHTML += `[${time}] ${msg}<br>`;
}

function openLink(url) {
  window.open(url, "_blank");
  logMessage("Launched: " + url);
}

function fetchMoonPhase() {
  fetch("https://shrewdly.herokuapp.com/")
    .then(res => res.json())
    .then(data => {
      document.getElementById("moon-phase").innerText = 
        `${data.name} — ${data.description}`;
    }).catch(() => {
      document.getElementById("moon-phase").innerText = "Failed to fetch moon phase.";
    });
}

function launchNotion() {
  try {
    window.location.href = "notion://";
  } catch {
    openLink("https://notion.so");
  }
  logMessage("Notion launched.");
}
