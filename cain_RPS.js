function myFuntion() {
	document.getElementById("sample").innerHTML = "Change the text";
}



function maChoice(a) {
	if(a == 0) {
	document.getElementById("player").innerHTML = "you chose rock!";
       }else if (a == 1) {
	document.getElementById("player").innerHTML = "you chose paper!";
       }else if (a == 2) {
	document.getElementById("player").innerHTML = "you chose scissors!";


}
}

<body id="look">
	<h2>Quick! Rock, Paper, or scissors!</h2>
	>br>
	<p id="sample">Click the button to change this.</p>


	<br><br>
	<div><br>
	<p id="player0"> you chose </p>
	<p id="player">Change</p>
	<button onclick+"maChoice(0)">Rock</button>
	<button onclick="maChoice(1)">Paper</button>
	<button onclick="maChoice(2)">Scissors</button>
	<br>


<script type="text/javascript" src="rev.js"></script>
</body>
</html>
