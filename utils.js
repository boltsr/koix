const fs = require('fs');

// File destination.txt will be created or overwritten by default.
fs.copyFile('source.txt', 'destination.txt', (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});

const copyFile = async (from_path, to_path) => {
  return new Promise((resolve, reject) => {
    fs.copyFile(from_path, to_path, (err) => {
      if (err) return reject(err);
      resolve(true)
      // console.log('source.txt was copied to destination.txt');
    });
  })
}
module.exports = {
  copyFile,
}