const fs = require('fs');

const copyFile = async (from_path, to_path) => {
  return new Promise((resolve, reject) => {
    console.log({from_path})
    console.log({to_path})
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