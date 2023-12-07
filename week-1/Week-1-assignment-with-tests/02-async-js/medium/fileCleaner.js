const fs = require('fs');

function removeSpace(str) {
    str = str.replace(/\s+/g, ' ');
    return str;
}

function cleanFile(filename){
    fs.readFile('fileClean.txt', 'utf-8', (err, data) => {

        if (err) {
            console.log(err);
            return;
        }
    
        fs.writeFile('fileClean.txt', removeSpace(data), 'utf-8', (err) => {
            if (err) {
                console.log(err);
                return;
            }
        });
    
    });
}

const filename = 'fileClean';

cleanFile(filename);
