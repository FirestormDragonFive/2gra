var mainState = {
	
	preload: function() {
		
		game.load.image('player', 'square.png');
		game.load.image('wall', 'square2.png');
		
	},
	
	create: function() {
		game.stage.backgroundColor = "#d6fc00";
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.world.enableBody = true;
		
		this.player = game.add.sprite(70, 100, 'player');
		this.player.body.gravity.y = 0;
		this.cursor = game.input.keyboard.createCursorKeys();
        this.walls = game.add.group();
		
		var level = [
		'xxxxxxxxxxxxxxxxxxxxxx',
		'x                    x',
		'x                    x',
		'x                    x',
		'x                    x',
		'x                    x',
		'xxxxxxxxxxxxxxxxxxxxxx',
		'xxxxxxxxxxxxxxxxxxxxxx',
		'xxxxxxxxxxxxxxxxxxxxxx',
		'x                    x',
		'x                    x',
		'xxxxxxxxxxxxxxxxxxxxxx',
		
		];
		
	
		for(var i=0; i<level.lenght; i++){
			for(j=0; j<level[i].lenght; j++) {
				if (level[i][j] == 'x') {
					var wall = game.add.sprite(30+20*j, 30+20*i, 'wall');
					this.walls.add(wall);
					wall.body.immovable = true;                                                                                                                                                             
				}
			}
		}
		
	},
	
	update: function() {
			if(this.cursor.left.isDown) {
				this.player.body.velocity.x = -200;
			} else if(this.cursor.right.isDown) {
				this.player.body.velocity.x = 200;
			} else {
				this.player.body.velocity.x = 0;
				}
			if(this.cursor.up.isDown) {
				this.player.body.velocity.y = -200;
			} else if(this.cursor.down.isDown) {
				this.player.body.velocity.y = 200;
			} else {
				this.player.body.velocity.y = 0;
				}
	},
	
};

var game = new Phaser.Game(1500, 800);
game.state.add('main', mainState);
game.state.start('main');