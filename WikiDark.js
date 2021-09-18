document.body.style.backgroundColor = "#121212 !important";
document.body.getElementById("mw-page-base").style.setProperty('background-color', '#121212', 'important')
divs = document.body.getElementsByTagName(div)
for (div in divs) {
    div.style.setProperty('background-color', '#121212', 'important')
}