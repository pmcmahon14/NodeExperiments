const fs = require('fs');

//this is asynchronous, shows up second
fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log('error');
    }
    //console.log(data);
    console.log('1', data.toString('utf8'));
});

//this is synchronous, shows up first
const file = fs.readFileSync('./hello.txt');
console.log(file);
console.log('2', file.toString());

//this adds This is so cool to the .txt file
/*fs.appendFile('./hello.txt', ' This is so cool!', err => {
    if (err) {
        console.log(err);
    }
});*/

//write file; adds bye.txt file
/*fs.writeFile('bye.txt', 'Sad to see you go', err => {
    if (err) {
        console.log(err)
    }
});*/

//delete
fs.unlink('./bye.txt', err => {
    if (err) {
        console.log(err)
    }
    console.log('Inception')
});