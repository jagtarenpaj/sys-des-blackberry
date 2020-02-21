// Set the date we're counting down to
var countDownDate = 900;

// Update the count down every 1 second
var x = setInterval(function() {
    
    var minutes = Math.floor((countDownDate % (60 * 60)) / ( 60));
    var seconds = Math.floor((countDownDate % (60)));
    
    // Output the result in an element with id="demo"
    if(seconds < 10 && minutes < 10){
        document.getElementById("timer").innerHTML = "0" + minutes + ":0" + seconds;
    }else{
        if(seconds < 10 || minutes < 10){
            if(seconds < 10){
                 document.getElementById("timer").innerHTML = minutes + ":0" + seconds;
            }else{
                 document.getElementById("timer").innerHTML = "0" + minutes + ":" + seconds;
            }
        }else{
            document.getElementById("timer").innerHTML = minutes + ":" + seconds;
        }
    }

    countDownDate--;
    
    // If the count down is over, write some text 
    if (countDownDate < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);
