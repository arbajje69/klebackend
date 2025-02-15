// // var giveMeAJoke = require('give-me-a-joke');

// // // To get a random dad joke
// // giveMeAJoke.getRandomDadJoke (function(joke) {
// //    console.log(joke);
// // });


// var figlet = require("figlet");

// figlet("SHREE!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

figlet.defaults({ fontPath: "assets/fonts" });

figlet.preloadFonts(["Standard", "Ghost"], ready);

function ready() {
  console.log(figlet.textSync("AAAAA"));
  console.log(figlet.textSync("ARBAJJ", "JEEE"));
}0