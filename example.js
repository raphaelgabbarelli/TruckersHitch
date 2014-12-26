// defining 2 greeters (hello and arr) and the greetingManager that depends on the greeter
var hello = function(){
    var self = this;
    this.greet = function(name){
        console.log("hello " + name);
    };
};
hello.$ctor = function(){
    return new hello();
};


var arr = function(){
 var self = this;
    this.greet = function(name){
        console.log("arrrr " + name);
    };
};
arr.$ctor = function(){
    return new arr();
};

var greetingManager = function(greeter){
    self = this;
    
    this.greeter = greeter;
    
    this.greet = function(name){
        self.greeter.greet(name);
    };
}
greetingManager.$deps = ["greeter"];
greetingManager.$ctor = function(greeter){
    return new greetingManager(greeter);
}



// using the IoC (depends on TruckersHitch.js)
var th = new TruckersHitch();
th.add("greeter", hello);
th.add("gm", greetingManager);

var gm = th.get("gm");
gm.greet("raphael");