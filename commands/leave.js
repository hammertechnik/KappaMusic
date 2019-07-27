// @ts-check
"use strict"
module.exports.run = async (client, message, args) => {
    const prefix = client.prefix
    
    if (message.member.voiceChannel) {//commander is in voiceChannel
        if (message.guild.voiceConnection) {//I'm in this voiceChannel
            if (message.member.voiceChannel.id === message.guild.voiceConnection.channel.id) {//ids of my Voicechannel and commander's one are same -> we are in the same voiceChannel
                message.channel.send(`Succesfully left the channel <:voice:602421829881298945>${message.guild.voiceConnection.channel.name}`);
                message.member.voiceChannel.leave()
            }
            else {
                message.channel.send("I'm not in this Voice Channel!");
            }
        }
        else {
            message.channel.send("I'm in no Voice Channel, so I can't leave it!");
        }
    }
    else {
        message.channel.send("You must be in Voice Channel, to use this command!");
    }
}

module.exports.help = async () => {

}
