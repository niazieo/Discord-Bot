module.exports = {
    name: 'help',
    description: "Displays all available commands.",
    execute(message, args, client){
        message.channel.send(`
        
        Available Commands:
        **!help** - Displays the help menu
        **!ping** - Returns the bot's latency
        **!pong** - ;)
        **!sus** - Declares the user as the imposter
        **!women** - Woman acts surprised after hammering hole
        **!hehe** - Paimon joins vc and yells at you
        **!play** - Play a song
        `)
        
    }
}
