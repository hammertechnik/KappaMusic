module.exports.run = async (client, message, args) => {
    const prefix = client.prefix
    
    if (message.member.voiceChannel) {//commander is in voiceChannel
        if (message.guild.voiceConnection) {//I'm in voiceChannel
            if (message.member.voiceChannel.id === message.guild.voiceConnection.channel.id) {//IDs of my Voicechannel and commander's one are same -> we are in the same voiceChannel
                if (!global.servers[message.guild.id]) {//If this server isn't in my server list, I'll add it
                    global.servers[message.guild.id] = { queue: [String] }//And create queue for it
                }
                else {
                    if (global.servers[message.guild.id].queue[0] != "undefined") {
                        message.channel.send("Skipped :+1:!");
                        message.guild.voiceConnection.dispatcher.end(`skipped by ${message.author.username}`);
                    }
                    else {
                        message.channel.send("There is no song in queue to skip!");
                    }

                }
            }
            else {
                message.channel.send("You must be in the same voice channel as I'm, to use this command!");
            }
        }
        else {
            message.channel.send("There is no song in queue to skip");
        }
    }
    else {
        message.channel.send("You must be in voice channel, to use this command!");
    }
}

module.exports.help = async () => {

}
