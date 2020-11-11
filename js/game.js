class Game{
    constructor(){


    }

    getState(){

        var gamestateref = database.ref('/gameState');
        gamestateref.on("value", function(data){
            gamestate = data.val();
        });

    }
    update(state){
        database.ref('/').update({
            'gameState': state
        });
    }

    Play(){
        form.hide();
        textSize(30);
        text("Game Start", 120, 100);
        Player.getPlayerInfo();
        if (allplayer!==undefined){
            var displayposition = 130;
            for(var plr in allplayer ){
                if(plr==="player"+player.index)
                fill("red");
                else 
                fill("black");
                displayposition+=20;
                textSize(15);
                text(allplayer[plr].name+" : "+ allplayer[plr].distance,120,displayposition)
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance+=50;
            player.update();
        }
    }

   async Start(){
        if(gamestate===0){
            player = new Player();
            var playercountref = await database.ref('playerCount').once("value");
            if(playercountref.exists()){
                playercount=playercountref.val();
                player.getCount();
            }
            
            form = new Form();
            form.display();

        }
    }

    
}