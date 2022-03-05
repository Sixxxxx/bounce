	
	var canvas;
	var canvasContext;	
	var rightPressed = false;
	var leftPressed = false;	
	var upPressed = false;
	var downPressed = false;
	var ball;
	var ballXCordinate = 100;
	var oldBallXCordinate = 100;
	var ballYCordinate = 100;
	var oldBallYCordinate = 100;
	var ballRadius = 10;
	var ballColour = 'white';
	var ballJumping = false;
	var gravity = 1;
	var gravitySpeed = 0;
	var bounce = 0.5;

	var wallXCordinate = 400;
	var wall1XCordinate = 800;
	var wallYCordinate = 585;
	var tileWidth = 20;
	var tileHeight = 20;
	var wallColour = "green";
	var enemyXCordinate = 800;
	var enemyYCordinate = 150;
	var enemyWidth = 100;
	var enemyHeight = 100;
	var enemyColour = "white";
	var enemySpeedY = 2;
	var life = 5;
	var tileSize = 20;
	var mapArrayColumns = 56;
	var mapArrayRows = 61;

	var level1MapArray = 	[
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 6, 6, 6, 6, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 7, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 4, 2, 2, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2, 2, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2],
        [2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2],
        [2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2],
        [2, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 8, 1, 1, 1, 2],
        [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2],
        [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 9, 9, 9, 2, 10, 10, 10, 10, 10, 10, 1, 1, 1, 1, 1, 1, 1, 11, 2, 2, 2, 2, 4, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 1, 1, 1, 1, 1, 1, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
        [2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 5, 5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ];

    window.onload =function(){
		canvas = document.getElementById("gameCanvas");
		canvasContext = canvas.getContext("2d");
		//viewPort.screen = [document.getElementById('gameCanvas').width, document.getElementById('gameCanvas').height];
		addEventListeners();
		drawEverything();
	}

	function addEventListeners(){
		document.addEventListener("keydown", keyDownHandler, false);
		document.addEventListener("keyup", keyUpHandler, false);
	}
	
	//This draws the ball, map, and enemies. It also refreshes every few miliseconds so as to mimick motion
	function drawEverything(){		
	
		//drawRectangle(0,0, viewPort.screen[0], viewPort.screen[1], "#000000");

		//calls the function that draws the map of the current level
		renderLevelMap(level1MapArray);
		//drawScore();
		
		//draws the ball
		var ball = Ball(ballXCordinate, ballYCordinate, ballRadius, ballColour, gravity, gravitySpeed, bounce);
		ballYCordinate = ball.yCordinate;	
		gravitySpeed = ball.gravityAccelaration;

		//updates the x and y codinates of the ball and enemies
		motion();
		//viewPort.update(ballXCordinate, ballYCordinate);
		var tileYcordinate = Math.floor((ballYCordinate + ballRadius) / tileSize);
    	var tileXcordinate = Math.floor((ballXCordinate + ballRadius) / tileSize);

		var value_at_index = level1MapArray[tileYcordinate][tileXcordinate];
		if (value_at_index != 1) {
        	// simply call one of the routing functions in the collision object and pass
        	// in values for the collision tile's location in grid/map space
        	CollisionHandler(value_at_index, tileYcordinate, tileXcordinate);
      	}
      	//the collision logic has to be run twice, one for each axis otherwise, it would collide with one axis and ignore the other
      	var tileYcordinate = Math.floor((ballYCordinate + ballRadius) / tileSize);
    	var tileXcordinate = Math.floor((ballXCordinate + ballRadius) / tileSize);
		var value_at_index = level1MapArray[tileYcordinate][tileXcordinate];
		if (value_at_index != 1) {
        	// simply call one of the routing functions in the collision object and pass
        	// in values for the collision tile's location in grid/map space
        	CollisionHandler(value_at_index, tileYcordinate, tileXcordinate);
      	}
		
		
		//enemy();
	
		requestAnimationFrame(drawEverything);
	}

	function CollisionHandler(arrayElement, row, column) {
    	if (arrayElement == 2) {

    	  	//if (this.topCollision(row)) { return; }
    	  	if (this.bottomCollision(row)) { return; }
    	  	if (this.leftCollision(column)) { return; }
    	  	this.rightCollision(column); 
    		// you only want to do one of these collisions thats why they are in if brackets
    	}

    	if (arrayElement == 3) {
            //document.write("hello"); 
      		this.bottomCollision(row);  
      		return; 
      	}

      	// the 3 tile type only blocks movement through the right side
      	if (arrayElement == 4) {
      		//this.rightCollision(column);
      	}
	
        // the 4 tile type has collision on all sides but the bottom
      	if (arrayElement == 5) {

	        //if (this.topCollision(row)) { return; }// you only want to do one

        //	if (this.leftCollision(column)) { return; }// of these collision

        	//this.rightCollision(column);// responses. that's why there are if statements
      	}
   



      // the 5 tile only does collision if the object falls through the top

     if (arrayElement == 6) {

     	if (this.bottomCollision(row)) { return; }

        //this.topCollision(row);



      }



    }

    function  topCollision(row) {

        if (gravitySpeed < 0) {
            var top = (row + 1) * tileSize;
            if (ballYCordinate - ballRadius < top) {
             	ballYCordinate = top + ballRadius;
              	oldBallYCordinate = top + ballRadius * 0.5 - 0.001;
             	return true;
            }
        }
        return false;
    }

    function  bottomCollision(row) {
        if (gravitySpeed > 0) {
            var bottom = row * tileSize;
            if (ballYCordinate + ballRadius > bottom && oldBallYCordinate <= bottom) {
            	gravitySpeed = 0;
              	oldBallYCordinate = ballYCordinate = bottom - ballRadius - 0.001;
              	ballJumping = true;
              	return true;
            }
        }
        return false;
    }

    function rightCollision(column) {
        if (rightPressed) {// If the object is moving right
        	var right = column * tileSize;// calculate the left side of the collision tile
        	if (ballXCordinate + ballRadius > right && oldBallXCordinate <= right) {// If the object was to the right of the collision object, but now is to the left of it
            	ballXCordinate = right - ballRadius;
            	oldBallXCordinate = right - ballRadius - 0.001;// place object outside of collision

            // the 0.001 is just to ensure that the object is no longer in the same tile space as the collision tile

            // due to the way object tile position is calculated, moving the object to the exact boundary of the collision tile

            // would not move it out if its tile space, meaning that another collision with an adjacent tile might not be detected in another broad phase check
            	return true;
            }
        }
        return false;
      }

    function leftCollision(column) {

        if (leftPressed) {// If the object is moving left

        	  var left = (column + 1) * tileSize; 	// calculate the left side of the collision tile
        	  if (ballXCordinate - ballRadius < left) {// If the object was to the right of the collision object, but now is to the left of it
           			ballXCordinate = left + ballRadius;
            		oldBallXCordinate = left + ballRadius + 0.001;// place object outside of collision

            // the 0.001 is just to ensure that the object is no longer in the same tile space as the collision tile

            // due to the way object tile position is calculated, moving the object to the exact boundary of the collision tile

            // would not move it out if its tile space, meaning that another collision with an adjacent tile might not be detected in another broad phase check
            	return true;
            }
        }
        return false;
      }

	function Gravity(gravityAccelaration, gravityMagnitude, objectBounce, yCordinate){	
		gravityAccelaration += gravityMagnitude;
		yCordinate = yCordinate + gravityAccelaration;
		if(yCordinate > canvas.height - ballRadius){
			yCordinate = canvas.height - ballRadius;
			gravityAccelaration = -(gravityAccelaration * objectBounce);
		}
		var gravity = {yCordinate: yCordinate, gravityAccelaration: gravityAccelaration};
		return gravity;
	}


	function Ball(xCordinate, yCordinate, radius, colour, gravityMagnitude, gravityAccelaration, objectBounce){
		this.drawCircle(xCordinate, yCordinate, radius, colour);
		this.ballGravity = Gravity(gravityAccelaration, gravityMagnitude, objectBounce, yCordinate);
		return ballGravity;	
		
	}

	function drawCircle(centerX, centerY, radius, colour){
		canvasContext.fillStyle = colour;
		canvasContext.beginPath();
		canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
		canvasContext.fill();
	}

	function renderLevelMap(mapArray){
		
		var posX = 0;
		var posY = 0;
		
		


		for (var y = 0; y < mapArray.length;  y++) {
			for (var x = 0; x <= mapArray[y].length; x++) {
					
				if (mapArray[y][x] == 0) {
					drawRectangle(posX, posY, tileWidth,tileHeight, 'black');
				}
				if (mapArray[y][x] == 1) {
					drawRectangle(posX, posY, tileWidth,tileHeight, 'red');
			
				}
				if (mapArray[y][x] == 2) {
					drawRectangle(posX, posY, tileWidth,tileHeight, 'green');
				}
				if (mapArray[y][x] == 3) {
					drawRectangle(posX, posY, tileWidth,tileHeight, 'green');
				}
				if (mapArray[y][x] == 4) {
					drawRectangle(posX, posY, tileWidth,tileHeight, 'purple');
				
				}
				if (mapArray[y][x] == 6) {
					drawRectangle(posX,posY, tileWidth,tileHeight, 'blue');
					
				}

				posX += 20;
			}	
			posX = 0;
			posY += 20;
		}	 
	}

	function drawRectangle(leftX, topY, width, height, drawColour){
		canvasContext.fillStyle = drawColour;
		canvasContext.fillRect(leftX, topY, width, height);   
	}



function addEventListeners(){
		document.addEventListener("keyup", keyUpHandler, false);
		document.addEventListener("keydown", keyDownHandler, false);
		
}

function keyDownHandler(e) {
   	if(e.key == "Up" || e.key == "ArrowUp") {
   		upPressed = true;
   	}
   	else if(e.key == "Down" || e.key == "ArrowDown") {
   		downPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
   		leftPressed = true;
    }
    else if(e.key == "Right" || e.key == "ArrowRight") {
   		rightPressed = true;
    }
}

function keyUpHandler(e) {
	if(e.key == "Up" || e.key == "ArrowUp") {
		upPressed = false;
	}
	else if(e.key == "Down" || e.key == "ArrowDown") {
		downPressed = false;
	}
	else if(e.key == "Left" || e.key == "ArrowLeft") {
		leftPressed = false;
	}
	else if(e.key == "Right" || e.key == "ArrowRight") {
		rightPressed = false;
	}
}

//makes the ball move when direction buttons are pressed
function motion(){

		if(upPressed && ballJumping) {
    		ballYCordinate -= 100;
    		ballJumping = false;
		}

	    if(rightPressed) {
			ballXCordinate += 5;
			oldBallXCordinate = ballXCordinate - 0.001;
    		
		}
        else if(downPressed) {
            ballYCordinate += 5;
            
            
        }
		else if(leftPressed) {
			ballXCordinate -= 5;
			oldBallXCordinate = ballXCordinate + 0.001;
    		
		}


	}