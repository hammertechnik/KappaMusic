//@ts-check
"use strict"
const YTDL = require("ytdl-core");


function Play(connection, message) {
    var server = global.servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], { quality: "highestaudio"/*, filter: "audio"*/ }));
    connection.player.setBitrate("auto");
    YTDL.getInfo(server.queue[0], (err, info) => {
        message.channel.send(`Playing: ${info.author.name} - ${info.title}`);
    })

    server.dispatcher.on("end", () => {
        server.queue.shift();
        if (server.queue[0]) {
            Play(connection, message);
        }
        else {
            connection.disconnect();
            message.channel.send("Queue finished");
        }
    });
}

module.exports.run = async (client, message, args) => {
    const prefix = client.prefix
    
    if (message.member.voiceChannel) {//commander is in voiceChannel
        if (typeof args[0] == "undefined") {
            message.channel.send("It looks like you forgot URL of YouTube video to play!");
        }
        else if (!YTDL.validateURL(args[0])) {//If commander hasn't entered valid YT url
            message.channel.send("This is not valid YouTube video URL!");
        }
        else {
            if (message.guild.voiceConnection) {//I'm in voicechannel
                if (message.member.voiceChannel.id === message.guild.voiceConnection.channel.id) {//ids of my Voicechannel and commander's one are same -> we are in the same voiceChannel
                    if (!global.servers[message.guild.id]) {//If this server isn't in my server list, I'll add it
                        global.servers[message.guild.id] = { queue: [] }//And create queue for it
                    }
                    global.servers[message.guild.id].queue.push(args[0]);
                    if (!global.servers[message.guild.id].queue[1]) {
                        Play(message.guild.voiceConnection, message);
                        console.log("there is no next song -> play");
                    }
                    else {
                        message.channel.send("song added to queue");
                    }
                }
                else {
                    message.channel.send("You must be in the same channel as I'm, to use this command");
                }
            }
            else { //I join commanders voice channel
                require("./join").run(client, message, args, prefix).then(() => {
                    if (!global.servers[message.guild.id]) {//If this server isn't in my server list, I'll add it
                        global.servers[message.guild.id] = { queue: [] }//And create queue for it
                    }
                    global.servers[message.guild.id].queue.push(args[0]);
                    console.log(global.servers[message.guild.id].queue[0]);
                    Play(message.guild.voiceConnection, message);
                });
            }
        }
    }
    else {
        message.channel.send("You must be in Voice Channel, to use this command!");
    }
}



module.exports.help = async () => {

}
