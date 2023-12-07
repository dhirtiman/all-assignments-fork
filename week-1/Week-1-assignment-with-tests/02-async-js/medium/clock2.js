function convert12(str){
    let [hours,minutes,seconds] = str.split(':');
    let period = 'AM';

    if(hours >= 12) {
        period = 'PM';
        if(hours > 12){
            hours -= 12;
        }
    }

    if (hours == 0 ){
        hours = 12;
    }

    return `${hours}:${minutes}:${seconds} ${period}`;
}


function clock() {
    console.clear();
    let currentTime = new Date;
    let str = '';
    str += currentTime.getHours()+ ':' + currentTime.getMinutes()+ ':' + currentTime.getSeconds();
    console.log(convert12(str));


}




setInterval(clock, 1000);

