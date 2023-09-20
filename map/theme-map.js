let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
  let theme = document.getElementById("theme")

  if (theme.getAttribute("href") == "/map/css/styles.css") {
    theme.href = "/map/dark-theme/css/light-theme.css";
  } else {
    theme.href = "/map/css/styles.css";
  }
}

if (theme.getAttribute("href") == "/map/css/styles.css") {
  theme.href = "/map/dark-theme/css/light-theme.css";
} else {
  theme.href = "/map/css/styles.css";
}