const fs = require('fs');

// read file contents asynchronously
fs.readFileSync('02-modules-exercises/files/content.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    
    // print contents of the file "sample.txt" to console
    console.log(data);
  });
  
  