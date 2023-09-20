const fs = require('fs');

// read file contents asynchronously
fs.readFile('02-modules-exercises/files/sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  // print contents of the file "sample.txt" to console
  console.log(data);
});




