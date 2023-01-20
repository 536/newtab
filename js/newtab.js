function clock() {
    let time = new Date();
    let hh = time.getHours();  //时
    let mm = time.getMinutes();  //分
    let ss = time.getSeconds();  //秒
    // Math.floor() 向下取整
    h = "" + Math.floor(hh / 10) + hh % 10;
    m = "" + Math.floor(mm / 10) + mm % 10;
    s = "" + Math.floor(ss / 10) + ss % 10;
    document.getElementById("time").innerText = h + ":" + m + ":" + s;
}

clock();
setInterval(clock, 1000);
