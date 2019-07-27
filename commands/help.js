module.exports.run = async (client, message, args) => {
    const prefix = client.prefix
    
    if (typeof args[0] != "undefined") {
        try {
            let fileToShowHelpOn = require(`./${args[0].toLowerCase()}.js`);
            fileToShowHelpOn.help(prefix).then(help => {
                message.channel.send(help);
            });
        }
        catch (e) {
            //uživatel chtěl vyvolat nápovědu o neexistujícím příkazu
        }
    }
    else {
        for (const command of config.commands) {
            //loop through all allowed commands in config file
            if (command == cmd) {
                let commandFile = require(`./${cmd}.js`);
                commandFile.help(prefix);
            }
        }
    }
}

module.exports.help = async (prefix) => {
    //returns description (and usage) of a command
    //here is a zero-width space before 4 normal spaces
    return `­    Shows description and usage of command(s). For all commands use
    \`${prefix}\`help
    and for info about specific command type
    \`${prefix}\`help \`<command name>\` `;
}
