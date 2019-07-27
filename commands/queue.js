// @ts-check
"use strict"
const YTDL = require("ytdl-core");

module.exports.run = async (client, message, args) => {
    const prefix = client.prefix
    
    if (!global.servers[message.guild.id]) {//If this server isn't in my server list, I'll add it
        global.servers[message.guild.id] = { queue: [String] }//And create queue for it
    }
    message.channel.send("Queue for this server:")
    for (let item of global.servers[message.guild.id].queue) {
        YTDL.getInfo(item, (err, info) => {
            message.channel.send(info.author.name + " - " + info.title);
        });
    }
    message.channel.send("------------");
}
module.exports.help = async () => {

}
