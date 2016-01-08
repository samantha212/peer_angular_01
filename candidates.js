/**
 * Created by cwgraff on 1/8/16.
 */
var dems = require('./json/democrats');
var reps = require('./json/republicans');

var candidates = dems.names;

addReps();

function addReps(){
    for(i=0; i<reps.names.length; i++){
        candidates.push(reps.names[i]);
    }
}

module.exports = candidates;