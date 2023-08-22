const fs = require('fs');

let data = 'pusis';

fs.writeFile('read.txt', data, 'utf-8', (err) => {
    if (err) {
        console.log(err);
        return;
    }
});


function Task(n1,n2){
    let sum=0;
    for(let i = n1;i<=n2;i++){
        sum+=i;
    }
    console.log(sum);
}


Task(1,10000);
