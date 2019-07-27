module.exports.run = async (client, message, args) => {
    const prefix = client.prefix
    
    if (message.member.voiceChannel) {//commander is in voiceChannel
        if (message.guild.voiceConnection) {//I'm in voiceChannel
            if (message.member.voiceChannel.id === message.guild.voiceConnection.channel.id) {//IDs of my Voicechannel and commander's one are same -> we are in the same voiceChannel
                message.guild.voiceConnection.dispatcher.setPaused(false);
                message.guild.voiceConnection.dispatcher.resume();
            }
            else {
                message.channel.send("I'm not in this Voice Channel!");
            }
        }
        else {
            message.channel.send("There is no paused music to resume, on this server!");
        }
    }
    else {
        message.channel.send("You must be in Voice Channel, to use this command!");
    }
}

module.exports.help = async () => {

}
