module.exports = {
    name: 'women',
    description: "Sends a gif of a woman acting surprised after hammering a hole in the wall.",
    execute(message, args, client){
        message.channel.send('https://tenor.com/oFd6.gif')
        message.channel.send('Am I right?')
    }
}