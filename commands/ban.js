module.exports.run = async (client, message, args) => {
    const prefix = client.prefix
    
{   
    let mentionedUser = message.mentions.users.first();
    let supliedReason = args.slice(1).join(" ") || "";
    let kickLog = message.author.username + ": " + supliedReason;

    message.delete(0);

    if(!message.member.hasPermission("BAN_MEMBERS"))
    {
        message.channel.send(`Nice try ${message.author.username}, but you don't have permission to ban people!`);
        return;
    }

    if(!mentionedUser)
    {
        message.channel.send(`Sorry ${message.author.username}, I couldn't find that user to ban`);
        return;
    }

    message.guild.member(mentionedUser).kick(kickLog)
        .then(console.log)
        .catch(console.error)
}

module.exports.help = async () =>
{
    //vrátím popisek (A použití) příkazu
    return "Bans mentioned user like this:\n`.`ban`<the user to ban>` `<optional description for your action>`";
}
