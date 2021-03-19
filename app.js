// gets a new object (the architecture allows us to not have to use 'new' keyword here)
var g = G$('John', 'Doe');

// use our chainable methods 
g.greet().setLang('es').greet(true).log();

$('#login').click(function () {

    // create a new Greetr object (lets pretend we know the name from the log in)
    var loginGrtr = G$('John', 'Doe');

    // hide the log in on the screen 
    $('logindiv').hide();

    // fire off an HTML greeting passing the '#greeting' as a selector and the chosen language and log the welcome as well 
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});
