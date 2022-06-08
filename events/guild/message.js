// const valid_commands = [
//     ".help",".ping",".pong",".sus",".women",".snipe",".ehe",".play",".skip",".dc"
// ]

// const valid_command = (command) =>{
//     return valid_commands.includes(command);
// }

module.exports = (Discord, client, message) => {
    const prefix = '.';
    if (!message.content.startsWith(prefix) || message.author.bot || message.content === prefix) return;
    //if(!valid_command(message.content)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    const validPermissions = [
        "CREATE_INSTANT_INVITE",
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_GUILD",
        "ADD_REACTIONS",
        "VIEW_AUDIT_LOG",
        "PRIORITY_SPEAKER",
        "STREAM",
        "VIEW_CHANNEL",
        "SEND_MESSAGES",
        "SEND_TTS_MESSAGES",
        "MANAGE_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
        "MENTION_EVERYONE",
        "USE_EXTERNAL_EMOJIS",
        "VIEW_GUILD_INSIGHTS",
        "CONNECT",
        "SPEAK",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MOVE_MEMBERS",
        "USE_VAD",
        "CHANGE_NICKNAME",
        "MANAGE_NICKNAMES",
        "MANAGE_ROLES",
        "MANAGE_WEBHOOKS",
        "MANAGE_EMOJIS",
      ]
    /*
    if(command.permissions.length){
        let invalidPerms = []
        for(const perm of command.permissions){
            if(!validPermissions.includes(perm)){
                return console.log('Invalid Permissions');
            }
            if(!message.member.hasPermission(perm)){
                invalidPerms.push(perm);
            }
        }
        if (invalidPerms.length){
            return message.channel.send(`Missing Permissions: \`${invalidPerms}\``);
        }
    }*/
    if (message.content == `${prefix}snipe`){
        const msg = client.snipes.get(message.channel.id)
        if (!msg) return message.channel.send("There's nothing to snipe!")
        const embed = new Discord.MessageEmbed()
            .setAuthor(msg.author, msg.member.user.displayAvatarURL({dynamic : true}))
            .setDescription(msg.content)
            .setTimestamp();
        message.channel.send(embed);
    }else{
        try{
            command.execute(message, args, cmd, client, Discord)
        }
        catch(err){
            console.log(err);
        }
    }


}
 