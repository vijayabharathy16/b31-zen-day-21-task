var i = 11;
setTimeout(function(){
    document.getElementById('res').innerHTML ="Countdown Starts Now";

setTimeout(function(){
    i--;
    document.getElementById('res').innerHTML = i;
    setTimeout(function(){
        i--;
        document.getElementById('res').innerHTML = i;
        setTimeout(function(){
            i--;
            document.getElementById('res').innerHTML = i;
            setTimeout(function(){
                i--;
                document.getElementById('res').innerHTML = i;
                setTimeout(function(){
                    i--;
                    document.getElementById('res').innerHTML = i;
                    setTimeout(function(){
                        i--;
                        document.getElementById('res').innerHTML = i;
                        setTimeout(function(){
                            i--;
                            document.getElementById('res').innerHTML = i;
                            setTimeout(function(){
                                i--;
                                document.getElementById('res').innerHTML = i;
                                setTimeout(function(){
                                    i--;
                                    document.getElementById('res').innerHTML = i;                  
                                    setTimeout(function(){
                                       i--;
                                       document.getElementById('res').innerHTML = i;                                       
                                       setTimeout(function(){
                                           document.getElementById('res').innerHTML = "Happy Birthday";  
                                       },1300)
                                    },1300)
                                },1300)
                            },1300)
                        },1300)
                    },1300)
                },1300)
            },1300)
        },1300)
    },1300)
},1300);
},1000);