/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qrimage from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
     message: "Type in your URL",
     name:"URL",
  }
  ])
  .then((answers) => {
console.log(answers);
const url = answers.URL; 
var qr_svg = qrimage.image(url);
qr_svg.pipe(fs.createWriteStream("qr_image.png"));

// writing to a file

fs.writeFile("URLdata.txt", url, (err) => {
    if(err) throw err
    console.log("File has been Saved!")
})
})
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
    }
  });