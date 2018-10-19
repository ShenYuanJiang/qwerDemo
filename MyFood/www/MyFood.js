var exec = require('cordova/exec');
var myFoodFunc = function(){};

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'MyFood', 'coolMethod', [arg0]);
};
myFoodFunc.prototype.myFaviourFood = function (arg0, success, error) {
    exec(success, error, 'MyFood', 'myFaviourFood', [arg0]);
};
