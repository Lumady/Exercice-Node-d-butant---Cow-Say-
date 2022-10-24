const eleve = require("./information");

var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `I'm ${eleve.name} from ${eleve.campus}`,
    e: "oO",
    T: "U ",
  })
);
