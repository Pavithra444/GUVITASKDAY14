const countdown=document.createElement("h1");
countdown.setAttribute("style","text-align:center;color:green;font-size:80px");

document.body.appendChild(countdown);

const countDownTimer = () => {
    countdown.innerText="10";
    setTimeout(() => {
        countdown.innerText="9";
        countdown.setAttribute("style","text-align:center;color:orange;font-size:80px");
        setTimeout(() => {
            countdown.innerText="8";
            countdown.setAttribute("style","text-align:center;color:green;font-size:80px");
            setTimeout(() => {
                countdown.innerText="7";
                countdown.setAttribute("style","text-align:center;color:orange;font-size:80px");
                setTimeout(() => {
                    countdown.innerText="6";
                    countdown.setAttribute("style","text-align:center;color:green;font-size:80px");
                    setTimeout(() => {
                        countdown.innerText="5";
                        countdown.setAttribute("style","text-align:center;color:orange;font-size:80px");
                        setTimeout(() => {
                            countdown.innerText="4";
                            countdown.setAttribute("style","text-align:center;color:green;font-size:80px");
                            setTimeout(() => {
                                countdown.innerText="3";
                                countdown.setAttribute("style","text-align:center;color:orange;font-size:80px");
                                setTimeout(() => {
                                    countdown.innerText="2";
                                    countdown.setAttribute("style","text-align:center;color:green;font-size:80px");
                                    setTimeout(() => {
                                        countdown.innerText="1";
                                        countdown.setAttribute("style","text-align:center;color:orange;font-size:80px");
                                        setTimeout(() => {
                                            countdown.innerText="Happy Independence Day";
                                            countdown.setAttribute("style","text-align:center;color:blue;font-size:80px");
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
}

countDownTimer();