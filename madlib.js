
var name1 = "bob";
var name2 = "billy";
var name3 = "tom";
var namez = ["bob", "billy", "tom", "tim", "steve", "steven", "clyde"];


var noun1, noun2, noun3;
var verb1, verb2, verb3;

var adj1, adj2, adj3;
var adv1, adv2, adv3;
var prep1, prep2, prep3;

var num1 = Math.floor((Math.random() * 5) + 1);
var num2 = Math.floor((Math.random() * 5) + 1);
var num3 = Math.floor((Math.random() * 5) + 1);

var person = prompt("Pick a name");
document.write("One day " + person +" woke up "+ "confused.\n");
document.write(namez[num2] + " asked, what's wrong?");
document.write(" Was it, " + namez[num3] + "? it's always " + namez[num3]+ ".");

