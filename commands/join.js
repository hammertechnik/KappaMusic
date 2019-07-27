// @ts-check
"use strict"

module.exports.run = async (client, message, args) => {
    const prefix = client.prefix
    
    if (message.member.voiceChannel) {//commander is in voiceChannel
        if (!message.member.voiceChannel.full) {//commander's voiceChannel is not full
            if (!message.guild.voiceConnection) {//I'm not in voiceChannel
                message.member.voiceChannel.join()
                    .then(connection => {
                        message.channel.send(`Succesfully joined the channel <:voice:602421829881298945>${connection.channel.name}`)
                    })
                    .catch(console.log);
            }
            else {
                message.channel.send("I'm allready in Voice Channel!");
            }
        }
        else {
            message.channel.send("This Voice Channel is full!");
        }
    }
    else {
        message.channel.send("You must be in Voice Channel, to use this command!");
    }
}

module.exports.help = async () => {

}
