const { VoiceChannel } = require('discord.js');
const path = require('path');
const { OpusEncoder } = require('@discordjs/opus');
const ytdl = require('ytdl-core');
const fs = require('fs');
const { finished } = require('stream');

module.exports = {
    name: 'ehe',
    description: "Hehe",

    async execute(message, args, cmd, client, Discord){
        const vc = message.member.voice.channel;

        if (!vc){
            message.reply('you must be in a voice channel.')
        }
        else{
            vc.join().then(connection => {
                const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=3nHCDbmnXyI', {filter: "audioonly"}));
                dispatcher.on('finish', () => {
                    vc.leave();
                })
            })
        }
    }
}