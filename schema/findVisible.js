const { populate } = require("./member.Schema");

module.exports = function findVisible(Populate){
    return function (next){
        if(!this._conditions.ignoreVisiblity && typeof this._conditions.isVisible === 'undefined'){
            this.where('isVisible').equals(true);
        }
        delete this._conditions.ignoreVisiblity;
        if(populate){
            this.populate(populate);
        }
        next();
    }
};