function clock() {
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    let Med;
    if (hr > 12) {
      Med = "PM";
    } else {
      Med = "AM";
    }
    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    document.getElementById("digitalclock").innerHTML =
      hr + ":" + min + ":" + sec + "   " + " " + Med;
    setInterval(clock, 1000);
  }
  clock();