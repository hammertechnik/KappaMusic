module.exports.run = async (client, message, args) => {
    const prefix = client.prefix
    
{
    const fs = require('fs');
    const configFile = require("../storage/config.json");

    message.channel.send(`Message: ${message} \nArgs: ${args} \nPrefix: ${prefix}`)

    if(typeof args[0] == "undefined")
    {
        //zobrazit nějakýej seznam nastavení
//        message.channel.send(`Settings:\n**prefix** - chnges bot's prefix`);
    }
    /*else if (args[0] == "prefix")
    {
        if(!args[1] == "")
        {
            try
            {
                //TODO: Najít spávný pzůsob, jak zapisovat do JSONu
                //↓tohle nefunguje
                //fs.writeFileSync('./storage/config.json', args[1]);
                configFile.prefix = args[1]
                message.channel.send(`Prefix changed to \`\`${args[1]}\`\``);
                message.channel.send(`No, it hasn't changed because of bug... :frowning:`);
            }
            catch(error)
            {
                console.error(error);
                
                message.channel.send(`Ooooops! Something went wrong so my prefix for this server is still \`\`${prefix}\`\``);
            }
        }
        else
        {
            message.channel.send(`My prefix on this server is \`\`${prefix}\`\``);
        }
    }*/
}

module.exports.help = async () =>
{

}
