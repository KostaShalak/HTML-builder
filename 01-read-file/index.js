const fs = require('fs');
const path = require('path');
const {stdout} = process;

const readbleStream = fs.createReadStream(path.resolve(__dirname, 'text.txt'), 'utf-8');

readbleStream.on('data', data => stdout.write(data));