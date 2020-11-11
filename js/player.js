class Player {
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
    }

    getCount(){
        var playercountref = database.ref('/playerCount');
        playercountref.on("value", function(data){
            playercount=data.val();
        });
    }

    update(){

        var playerindex = "Players/player"+this.index;
        database.ref(playerindex).set({
            'name': this.name,
            "distance": this.distance
        })
    }
    updateCount(count){
        database.ref('/').update({
            'playerCount': count
        });
    }

    static getPlayerInfo(){
        var playerinforef = database.ref('Players');
        playerinforef.on("value", (data)=>{
            allplayer=data.val();
        });
    }



}