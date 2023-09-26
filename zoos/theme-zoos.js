let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
  let theme = document.getElementById("theme")

  if (theme.getAttribute("href") == "/zoos/css/styles.css") {
    theme.href = "/zoos/dark-theme/css/light-theme.css";
  } else {
    theme.href = "/zoos/css/styles.css";
  }
}

if (theme.getAttribute("href") == "/zoos/css/styles.css") {
  theme.href = "/zoos/dark-theme/css/light-theme.css";
} else {
  theme.href = "/zoos/css/styles.css";
}