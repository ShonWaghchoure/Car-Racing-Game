class Form {
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Login");
        this.greeting = createElement('h3');
    }

    hide(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("Real Car Racing Game");
        title.position(width/2, height/2-20);

        
        this.input.position(width/2, 70);

        
        this.button.position(width/2, 100);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playercount+=1;
            player.index=playercount;
            player.update();
            player.updateCount(playercount);
            this.greeting.html("Welcome to this Game "+ player.name + "!");
            this.greeting.position(width/2, 50);
            
        });

    }



}