//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var player2;
var ball;
var cp;
var cp2;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	player.x = 50;
	ball = new GameObject();
	player2 = new GameObject();
	player2.x = canvas.width - 50;
	cp = new GameObject();
	cp.width = 5;
	cp.color = "black";
	cp2 = new GameObject();
	cp2.width = 5;
	cp2.color = "black";

	
	player2.color = "orange"
	
	ball.vx = -4;
	ball.vy = 0;
	ball.height = ball.width;
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

	if(up && player2.y - player2.height/2 > 0)
	{
		console.log("Moving Down");
		player2.y += -4;
	}
	if(down && player2.y + player2.height/2 < canvas.height)
	{
		console.log("Moving Up");
		player2.y += 4;
	}
	
	
	// if(ball.x + ball.width/2 > canvas.width) {

	// 	ball.vx = -ball.vx
	// }

	if(ball.y + ball.width/2 > canvas.height) {

		ball.vy = -ball.vy
	}

	
	
	if(ball.x - ball.width/2 < 0) {

		ball.x = 500
		ball.y = 450
		console.log("how did you let that happen???")
	}

	if(ball.x - ball.width/2 > canvas.width) {

		ball.x = 500
		ball.y = 450
		console.log("how did you let that happen???")
	}


	if(ball.y - ball.height/2 < 0) {

		ball.vy = -ball.vy
	}

	

	
	
	
	if(ball.hitTestObject(player)) {
		if(ball.y < player.y - player.height/3) {
			ball.vy = 4
			ball.vy = -ball.vy
			ball.vx = -ball.vx
		}
		if(ball.y > player.y - player.height/3){
			ball.vx = -ball.vx
		}
		if(ball.y > player.y + player.height/3){
			ball.vy = 4
			ball.vy = ball.vy
			ball.vx = ball.vx
		}
	}

	if(ball.hitTestObject(player2)) {
		if(ball.y < player2.y - player2.height/3) {
			ball.vy = 4
			ball.vy = -ball.vy
			ball.vx = -ball.vx
		}
		if(ball.y > player2.y - player2.height/3){
			ball.vx = -ball.vx
		}
		if(ball.y > player2.y + player2.height/3){
			ball.vy = 4
			ball.vy = ball.vy
			ball.vx = ball.vx
		}
	}

	ball.x += ball.vx;
	ball.y += ball.vy;
	
	//Update the Screen
	player.drawRect();
	ball.drawCircle();
	player2.drawRect();

	// cp.x = ball.x;// - ball.width;// player.x;
	// cp.y = ball.y - ball.height/2;//player.y + player.height/6;
	// cp.drawCircle()
	// cp.x = player.x;// player.x;
	// cp.y = player.y + player.height/6;
	// cp.drawCircle()
}

