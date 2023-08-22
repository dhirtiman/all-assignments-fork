let count = 0;




function Counter() {
    setTimeout(function () {
        console.clear();
        count++;
        console.log("Counter: " + count);
        Counter();

    }, 1000);


}

Counter();