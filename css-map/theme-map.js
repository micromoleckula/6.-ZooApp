let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
  let theme = document.getElementById("theme")

  if (theme.getAttribute("href") == "/css-map/css/styles.css") {
    theme.href = "/css-map/dark-theme/css/light-theme.css";
  } else {
    theme.href = "/css-map/css/styles.css";
  }
}

if (theme.getAttribute("href") == "/css-map/css/styles.css") {
  theme.href = "/css-map/dark-theme/css/light-theme.css";
} else {
  theme.href = "/css-map/css/styles.css";
}