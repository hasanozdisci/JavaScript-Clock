let userName = prompt("Adinizi giriniz")
let selector = document.querySelector("#user")
selector.innerHTML = `Merhaba, ${userName}! Hoş geldin!`

    setInterval(showTime, 1000);
    function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let days =  ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    var today = days[time.getUTCDay()];

    hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
  
            let currentTime = hour + ":"  + min + ":" + sec + ":" + today
  
            document.getElementById("clock").innerHTML = currentTime;
        }
  
        showTime();