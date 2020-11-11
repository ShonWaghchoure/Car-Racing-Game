var player, form, game, database;
var allplayer;

var gamestate=0;
var playercount=0;

function setup(){
   createCanvas(1000, 1000);
   database = firebase.database();
   game = new Game();
   game.getState();
   game.Start();
}

function draw(){
    background(255);
    if(playercount===4){
        game.update(1);
    }
    if(gamestate===1){
        clear();
        game.Play();
    }
}



function showError(){
    console.log("error: writing/reading");
}
