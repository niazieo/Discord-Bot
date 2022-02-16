const Discord = require('discord.js');
const dotenv = require('dotenv');
const math = require('mathjs');
require('discord-reply');
const db = require('quick.db');
const client = new Discord.Client();
dotenv.config();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.snipes = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})
const fs = require('fs');
const { VoiceChannel } = require('discord.js')
const { OpusEncoder } = require('@discordjs/opus')
const ytdl = require('ytdl-core')
const { finished } = require('stream')

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    client.user.setActivity("Type .help for commands!", {type: "PLAYING"});
})

client.on("messageDelete", async (message) => {
    if(message.partial) return;

    client.snipes.set(message.channel.id, {
      content: message.content,
      author: message.author.tag,
      member: message.member,
      image: message.attachments.first() ? message.attachments.first().proxyURL : null
    })
})

client.login(process.env.TOKEN);