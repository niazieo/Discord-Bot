const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: "Displays all available commands.",
    execute(message, args, client){
        const helpEmbed = new Discord.MessageEmbed()
        //.setColor('#0000FF')
        .setTitle('Commands')
        .setDescription('Here is the list of commands that I have available!')
        .addFields(
            {name: '.help', value: 'Displays the help menu'},
            {name: '.ping', value: "Returns the bot's latency"},
            {name: '.pong', value: ';)'},
            {name: '.sus', value: 'Declares the user as the imposter'},
            {name: '.women', value: 'Sends a gif of a woman acting surprised after hammering a hole in the wall'},
            {name: '.snipe', value: 'Returns the most recently deleted message'},
            {name: '.hehe', value: 'Paimon yells at you in vc'})
        //.setTitle('Music Commands')
        //.setDescription('Music make you lose control!')
        .addFields(
            {name: ".play <URL/Keyword>", value: "Will play a song from youtube"},
            {name: ".skip", value: "Will skip the currently playing song"},
            {name: ".dc", value: "Will disconnect the bot from the voice channel"}
        );
        message.channel.send(helpEmbed);
    }
}
