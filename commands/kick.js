module.exports.run = async (client, message, args, prefix) =>
{   
    let mentionedUser = message.mentions.users.first();
    let supliedReason = args.slice(1).join(" ") || "";
    let banLog = message.author.username + ": " + supliedReason;

    message.delete(0);

    if(!message.member.hasPermission("KICK_MEMBERS"))
    {
        message.channel.send(`Nice try ${message.author.username}, but you don't have permission to kick people!`);
        return;
    }

    if(!mentionedUser)
    {
        message.channel.send(`Sorry ${message.author.username}, I couldn't find that user to kick`);
        return;
    }

    message.guild.member(mentionedUser).ban(banLog)
        .then(console.log)
        .catch(console.log)
}

module.exports.help = async () =>
{
    //vrátím popisek (A použití) příkazu
    return "Kicks mentioned user like this:\n`.`kick`<the user to kick>` `<optional description for your action>`";
}