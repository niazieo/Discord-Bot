const Discord = require('discord.js');
const math = require('mathjs');
module.exports = {
    name: 'ping',
    description: "This is a ping command.",
    execute(message, args, client){
        const pingEmbed = new Discord.MessageEmbed()
        .setTitle('Pong!')
        .setDescription(`Bot Latency: ${Date.now() - message.createdTimestamp}ms`)
        message.channel.send(pingEmbed)
    }
    
}