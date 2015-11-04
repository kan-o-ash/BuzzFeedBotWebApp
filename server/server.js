Meteor.startup(function () {
  console.log()
});

Meteor.methods({
  scrapeContent: function () {
    var exec = Npm.require('child_process').exec;
    var Fiber = Npm.require('fibers');


    new Fiber(function(){
      exec("ls app/server", function (error, stdout, stderr) {
        console.log(error);
        console.log(stdout);
        });
    }).run();
  }
});