class Form{
    constructor(){}

    show(){
        var title = createElement("h2");
        //<h2> Car Racing </h2>
        title.html('Car Racing Game');
        title.position(130,0);

        var input = createInput('Enter Your Name');
        input.position(130,160)

        var button = createButton('Play');
        button.position(300,300)

        button.mousePressed( function(){
            input.hide();
            button.hide();

            var name = input.value();

            //<h3> hello abc </h3>
            var greeting = createElement("h3");
            greeting.html('hello '+name);
            greeting.position(200,160)
        } )
    }

}