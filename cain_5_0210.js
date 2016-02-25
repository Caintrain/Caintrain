document.getElementById("p2").style.color = "red";


document.write("This is how we math in Javascript")
var k = prompt("Pick a number");
var r = prompt("Pick another number");
var d = (k + r);
var num1 = parseInt(k);
/*We parseInt'ed so the variables would be treated as INTS and not strings */
var num2 = parseInt(r);
var num3 = num1 + num2;
document.write("\n k is " + k + " r is " + r + " d is k + r ant it's \n"  + d);
document.write("\n <br>multiplication:\n");
document.write(k * r);
document.write("\n <br>division:\n<br>");
document.write(k / r);
document.write("\n <br>addition:\n<br>");
document.write(k + r);
document.write("\n <br>subtraction:\n<br>");
document.write(k - r);
document.write("<br>this is num1 " + num1);
document.write("<br>this is num2 " + num2);
num1++;
document.write("<br>this is num1 " +num1++ +"<br>");
document.write("<br>this is num2 " +num2++ +"<br>");
num2++;
document.write("<br>this is num2 " +num2++ + "<br>");
document.write("<br>this is num2 " + (++num2)+ "<br>");
