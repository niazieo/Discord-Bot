module.exports = {
    name: 'ping',
    description: "This is a ping command.",
    execute(message, args, client){
        message.channel.send('Pong!')
    }
}