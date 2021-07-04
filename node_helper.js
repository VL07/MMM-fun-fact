var NodeHelper = require("node_helper");
module.exports = NodeHelper.create({
    
    requiresVersion: "2.1.0",

    // On start debug
    start: function() {
        Log.log(this.name + ' is started!');
    }
});