const constants = require('./consts');
const handleComplaint= function(complaint) {
    if (!complaint.type) {
        console.log('Error')
        return
    }
    if (complaint.type == constants.FINANCE) {
        console.log('Money doesn’t grow on trees, you know.')
    } else if (complaint.type == constants.WEATHER) {
        console.log('It is the way of nature. Not much to be done.')
    } else if (complaint.type == constants.EMOTIONS) {
        console.log('It’ll pass, as all things do, with time.')
    }
}

module.exports.handleComplaint = handleComplaint