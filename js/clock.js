window.onload = startTime();

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var timeOfDay = 'am';
    if (h>12) {
        timeOfDay = 'pm'
    }
    h = checkHour(h);
    m = checkTime(m);
    
    document.getElementById('clock').innerHTML =
    h + ":" + m + timeOfDay;
    var t = setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {  
        i = "0" + i
    }  // add zero in front of numbers < 10
    return i;
  }

  function checkHour(h) {
      if (h >= 12) {
          h -= 12;
      }
      if (h >= 0 && h < 1) {
          h = 12;
      }
      return h;
  }
