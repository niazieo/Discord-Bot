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



/* big monke
client.on("voiceStateUpdate", (oldVoiceState, newVoiceState) => { // Listeing to the voiceStateUpdate event
    const vc = newVoiceState.member.voice.channel;

    if (newVoiceState.channel) {
        if (newVoiceState.member.user.tag === 'AlphaWunWun#8161'){
            vc.join().then(connection => {
                const dispatcher = connection.play(path.join(__dirname, './sounds/john.ogg'), {volume: 1});
                dispatcher.on('finish', () => {
                    vc.leave();
                })
            })
        }
        else if (newVoiceState.member.user.tag === 'Kkill77#1195'){
            vc.join().then(connection => {
                const dispatcher = connection.play(path.join(__dirname, './sounds/shawty.mp3'), {volume: 1});
                dispatcher.on('finish', () => {
                    vc.leave();
                })
            })
        }
        else if (newVoiceState.member.user.tag === 'TotalQ#6066'){
            vc.join().then(connection => {
                const dispatcher = connection.play(path.join(__dirname, './sounds/bababoey.mp3'), {volume: 1});
                dispatcher.on('finish', () => {
                    vc.leave();
                })
            })
        }
        else if (newVoiceState.member.user.tag === 'zach2759#7993'){
            vc.join().then(connection => {
                const dispatcher = connection.play(path.join(__dirname, './sounds/annyoung.mp3'), {volume: 1});
                dispatcher.on('finish', () => {
                    vc.leave();
                })
            })
        }
        else if (newVoiceState.member.user.tag === 'SpaceJesus#4633'){
            vc.join().then(connection => {
                const dispatcher = connection.play(path.join(__dirname, './sounds/associate.mp3'), {volume: 1});
                dispatcher.on('finish', () => {
                    vc.leave();
                })
            })
        }
        else if (newVoiceState.member.user.tag === 'Kiwi#3338'){
            vc.join().then(connection => {
                const dispatcher = connection.play(path.join(__dirname, './sounds/amber.mp3'), {volume: 1});
                dispatcher.on('finish', () => {
                    vc.leave();
                })
            })
        }
        
        else if (newVoiceState.member.user.tag === 'Frost#5212'){
            vc.join().then(connection => {
                const dispatcher = connection.play(path.join(__dirname, './sounds/sakamoto.ogg'), {volume: 1});
                dispatcher.on('finish', () => {
                    vc.leave();
                })
            })
        }
    } ///else if (oldVoiceState.channel) { // The member disconnected from a channel.
        
    ///};
});*/


client.login(process.env.TOKEN);