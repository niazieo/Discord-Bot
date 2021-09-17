const message = require("../events/guild/message")

module.exports = {
    name: 'clear',
    aliases: ['prune', 'purge'],
    permissions: ["MANAGE_MESSAGES"],
    description: 'Clear messages.',
    async execute(message, args, cmd, client, Discord){
        if (!args[0]) return message.reply('Enter the amount of messages you want to delete');
        if (isNaN(args[0])) return message.reply('Please enter a real number dumb dumb');

        if (args[0] > 100) return message.reply('Cant do more than 100 messages, sorry!');
        if (args[0] < 1) return message.reply('You must delete at least one message bro!');

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })

    }
}