
let number = 10;
let countdown = document.getElementById("countdown");
let screen = document.getElementById("screen");
countdown.innerHTML = number;



setTimeout(()=> {
    number--;
    countdown.innerHTML = number;
    setTimeout(()=>{
        number--;
        countdown.innerHTML = number;
        setTimeout(()=> {
            number--;
            countdown.innerHTML = number;
            setTimeout(()=>{
                number--;
                countdown.innerHTML =number;
                setTimeout(()=>{
                    number--;
                    countdown.innerHTML = number;
                    setTimeout(()=>{
                        number--;
                        countdown.innerHTML =number;
                        setTimeout(()=>{
                            number--;
                            countdown.innerHTML =number;
                            setTimeout(()=>{
                                number--;
                                countdown.innerHTML =number;
                                setTimeout(()=>{
                                    number--;
                                    countdown.innerHTML = number;
                                    setTimeout(()=>{
                                        number--;
                                        countdown.innerHTML = number;
                                        setTimeout(()=>{
                                            countdown.style="display: none;";
                                            screen.style = "display: block; color: blue;";
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                                
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)