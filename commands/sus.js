const math = require('mathjs');

module.exports = {
    name: 'sus',
    description: "Tells the user that their are the imposter.",
    execute(message, args, client){
        const user = "<@" + message.author.id + ">"
        const susList = ["the imposter", "innocent"]
        randomSus = susList[math.floor(math.random() * susList.length)];
        message.channel.send(user + ' is ' + randomSus + "!");
    }
}