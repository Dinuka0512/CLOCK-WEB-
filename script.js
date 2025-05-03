let hour;
let minits;
let secconds;

setInterval(updateTime, 1000);

function updateTime(){
    let currentdate = new Date;
    hour = currentdate.getHours();
    minits = currentdate.getMinutes();
    secconds = currentdate.getSeconds();

    // console.log(hour);
    // console.log(minits);
    // console.log(secconds);

    if(minits < 10){
        minits = "0" + minits;
    }
    
    if(secconds < 10){
        secconds = "0" + secconds;
    }

    if(hour < 10){
        hour = "0" + hour;
    }

    // HERE ADD THESE TO HTML FILE
    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minits").innerHTML = minits;
    document.getElementById("secconds").innerHTML = secconds;
}