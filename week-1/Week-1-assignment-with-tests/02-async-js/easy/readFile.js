const fs = require('fs')

fs.readFile('read.txt','utf-8',(err,data)=>{
    if(err){
        console.error(err)
        return;
    }
    console.log(data);
});

function Task(n1,n2){
    let sum=0;
    for(let i = n1;i<=n2;i++){
        sum+=i;
    }
    console.log(sum);
}


Task(1,10000);

