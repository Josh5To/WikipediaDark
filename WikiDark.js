var tds = document.body.getElementsByTagName("td")
for (var i = 0; i < tds.length; i++) {
    //tds[i].style.backgroundColor =  "#121212"
    let rgb = tds[i].style.backgroundColor
    //If no background color is given, make it match the body background
    if(!!rgb) {
        tds[i].style.backgroundColor =  "#121212"
    }
    console.log(rgb)
}
var trs = document.body.getElementsByTagName("tr")
for (var i = 0; i < trs.length; i++) {
    //trs[i].style.backgroundColor =  "#121212"
    let rgb = trs[i].style.backgroundColor
    //If no background color is given, make it match the body background
    if(!!rgb) {
        trs[i].style.backgroundColor =  "#121212"
    }
    console.log(rgb)
}

document.body.style.margin = "20px !important"


function rgbToHEX(r, g, b, a) {
    let rString = r.toString(16)
    let gString = g.toString(16)
    let bString = b.toString(16)
    let aString = Math.round(a * 255).toString(16)

    if (rString.length ==1) {
        rString = "0" + rString
    }
    if (gString.length ==1) {
        gString = "0" + gString
    }
    if (bString.length ==1) {
        bString = "0" + bString
    }
    if (aString.length ==1) {
        aString = "0" + aString
    }

    return "#" + rString + gString + bString + aString
}