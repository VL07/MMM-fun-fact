var NodeHelper = require("node_helper");
module.exports = NodeHelper.create({
    
    start: function() {
        Log.log(this.name + ' is started!');
    }
});