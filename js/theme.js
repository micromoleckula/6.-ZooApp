let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
  let theme = document.getElementById("theme")

  if (theme.getAttribute("href") == "/items/css/style.css") {
    theme.href = "/dark-theme/css/light-theme.css";
  } else {
    theme.href = "/items/css/style.css";
  }
}

if (theme.getAttribute("href") == "/items/css/style.css") {
  theme.href = "/dark-theme/css/light-theme.css";
} else {
  theme.href = "/items/css/style.css";
}