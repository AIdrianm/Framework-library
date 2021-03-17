(function(global, $){
    // creates new object
    const Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    var supportedLangs = ['en', 'es'];
    // informal greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    //formal greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    // logger messages
    const loggedMesseges = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    // protoype holds methods (to save memory space)
    Greetr.prototype = {

        // this reffers to the calling object at execution time
        fullName: function () {
            return this.firstName + ' ' + this.lastName
            },
        validate: function() {
            // check that is a valid language
            // refferences the inaccesible 'supportedLangs' within the closure
            if(supportedLangs.indexOf(this.language) === -1)
            throw 'invalid language';
            },
        greeting: function() {
             return greetings[this.language] + ' ' + this.fullName() + '!';
            },
        formalGreeting: function() {
            return formalGreetings[this.language] + ' ' + this.fullName();
            },
        greet: function(formal){
            var msg;

            //if undefined or null it will be coerced to falce
             if (formal){
                 msg = this.formalGreeting();
             } 
             else {
                 msg = this.greeting();
             }
             if (console){
             console.log(msg);
             }
              
             // 'this' refers to the calling object at execution time  
             // make this method chainable 
             return this;
         },

         log: function() {
             if (console) {
                 console.log(loggedMesseges[this.language] + ': ' + this.fullName());
             }

             // make chainable 
             return this;
         },
         setLang: function(lang){

            // set the language 
             this.language = lang;

             // validate 
             this.validate();

             // make chainable 
             return this;
         }, 

         HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }
            if (!selector) {
                throw 'Missing selector';
            } 

            // determine the message 
            var msg;
            if (formal) {
                var msg = this.formalGreeting();
                }
            else {
                var msg = this.greeting();
            }

            // inject the message in the chosen place in the DOM
            $(selector).html(msg);

            // make chainable
            return this;

            }

    };

    // the actual object is created here, allowing us to 'new' an object without calling 'new' 
    Greetr.init = function(firstName, lastName, language) {
        const self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';   
 
    },

    // trick borrowed from jQuery so we dont have to use the 'new' keyword 
    Greetr.init.prototype = Greetr.prototype;

    // attach greeter to the global object and provide a shorthand '$G' for ease
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));

