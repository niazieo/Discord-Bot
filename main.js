const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})
/*
const { VoiceChannel } = require('discord.js')
const { OpusEncoder } = require('@discordjs/opus')
const ytdl = require('ytdl-core')
const { finished } = require('stream')

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Frost Bot is online!');
    client.user.setActivity('!help for commands!');
});

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
        else if (newVoiceState.member.user.tag === 'boo#8000'){
            vc.join().then(connection => {
                const dispatcher = connection.play(path.join(__dirname, './sounds/chika.ogg'), {volume: 1});
                dispatcher.on('finish', () => {
                    vc.leave();
                })
            })
        }
        else if (newVoiceState.member.user.tag === 'Jackie#9999'){
            vc.join().then(connection => {
                const dispatcher = connection.play(path.join(__dirname, './sounds/lisa.ogg'), {volume: 1});
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


client.login('NzU3MDE3OTgwNjIxMDI5NDU3.X2aR7w.TnBHJvsDyMxHtK_ILfdOivMK5NM')