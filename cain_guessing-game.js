var magic = Math.floor((Math.random() * 10) + 1);
var guess = prompt("Whats's  your guess?");
while (magic != guess){
if (guess < magic){
guess = prompt("Too Low, Joe. Try again");
document.write("Too Low, Joe!");
}else if (guess > magic){
guess = prompt(" Too high, sly. Try again");
document.write("Too high, sly!");
}else{
document.write("This should not happen!")
}
}
document.writeln("You are a winner!")
