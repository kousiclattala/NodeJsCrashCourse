const fs = require('fs')
const path = require('path')

// * Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
//     if(err) throw err;
//     console.log('Folder created.....')
// })

// * Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', function(err){
//         if(err) throw err;
//         console.log('File Written to.....')
//     })

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Node.js', function(err){
//     if(err) throw err;
//     console.log('File Written to.....')
// })

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', function(err){
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js', function(err){
//         if(err) throw err;
//         console.log('File Written to.....')
//     })
//     console.log('File Written to.....')
// })

// * Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// })

// * Rename file
// fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), function(err){
//     if(err) throw err;
//     console.log('File renamed.....')
// })