function clock() {
    console.clear();
    let currentTime = new Date;
    let str = '';
    str += currentTime.getHours()+ ':' + currentTime.getMinutes()+ ':' + currentTime.getSeconds();
    console.log(str);


}



setInterval(clock, 1000);

