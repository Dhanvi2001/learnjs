var events = require('events');
var util = require('util');

var Person = function(name) {
    this.name = name;
}
util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var jon = new Person('jon');
var janny = new Person('janny');

var people = [james, jon, janny];

people.forEach(function(Person) {
    Person.on('speak', function(msg) {
        console.log(Person.name + ' said:' + msg);
    });
});

james.emit('speak', "Hello Everyone");
jon.emit('speak', "Hello james");
janny.emit('speak', "Hello james");