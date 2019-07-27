module.exports.run = async (client, message, args, prefix) => {
    if (message.member.voiceChannel) {//commander is in voiceChannel
        if (message.guild.voiceConnection) {//I'm in voiceChannel
            if (message.member.voiceChannel.id === message.guild.voiceConnection.channel.id) {//IDs of my Voicechannel and commander's one are same -> we are in the same voiceChannel
                message.guild.voiceConnection.dispatcher.setPaused(true);
                message.guild.voiceConnection.dispatcher.pause();
            }
            else {
                message.channel.send("I'm not in this Voice Channel!");
            }
        }
        else {
            message.channel.send("There is no playing music to pause, on this server!");
        }
    }
    else {
        message.channel.send("You must be in Voice Channel, to use this command!");
    }
}



module.exports.help = async () => {

}