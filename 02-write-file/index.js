const {stdin, stdout} = process;
const fs = require('fs');
const path = require('path');
const readline = require('readline');

stdout.write('Hello, please enter you name: ' + '\n');

const writeStream = fs.createWriteStream(path.resolve(__dirname, './text.txt')); 


const rl = readline.createInterface(stdin,stdout);

// Есть вероятность не правильного решения

stdin.on('data' , data => {
    rl.on('line', line => {
        if (line === 'exit'){
            rl.close();
        } else {
            writeStream.write(data);
        }
    });
});

process.on('exit', () => stdout.write('Удачи в учебе!' + '\n'));


