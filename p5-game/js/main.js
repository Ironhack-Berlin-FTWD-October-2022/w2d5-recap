const game = new Game()

// Load game assets
function preload() {
	game.preload()
}

function setup() {
	createCanvas(600, 600)
    game.setup()
}

function draw() {
	game.draw()
}

function keyPressed() {
	if (keyCode === 32) {
		game.player. ()
	}
}
