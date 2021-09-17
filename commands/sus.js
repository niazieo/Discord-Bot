module.exports = {
    name: 'sus',
    description: "Tells the user that their are the imposter.",
    execute(message, args, client){
        const user = "<@" + message.author.id + ">"
        message.channel.send(user + ' is the imposter!')
    }
}