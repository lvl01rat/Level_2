//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var ball;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	player.x = 50;
	ball = new GameObject();
	ball.vx = 4;
	ball.vy = 4;
	ball.color = "red"
	//Set the Animation Timer
	timer = setInterval(animate, interval);

	

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Move the Player to the right
	if(w && player.y - player.height/2 > 0)
	{
		console.log("Moving Down");
		player.y += -4;
	}
	if(s && player.y + player.height/2 < canvas.height)
	{
		console.log("Moving Up");
		player.y += 4;
	}

	
	ball.x += ball.vx;
	ball.y += ball.vy;
	if(ball.x + ball.width/2 > canvas.width) {

		ball.vx = -ball.vx
	}

	if(ball.y + ball.width/2 > canvas.height) {

		ball.vy = -ball.vy
	}

	if(ball.x - ball.width/2 < 0) {

		ball.x = 500
		ball.y = 450
		console.log("how did you let that happen???")
	}

	if(ball.y - ball.height/2 < 0) {

		ball.vy = -ball.vy
	}
	
	if(ball.hitTestObject(player)) {
		ball.vx = -ball.vx
	}
	//Update the Screen
	player.drawRect();
	ball.drawCircle();
}

