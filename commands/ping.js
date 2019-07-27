module.exports.run = async (client, message, args) => {
    const prefix = client.prefix
    
    message.channel.send("Pinging...")
        .then((msg) => {
            msg.edit("Ping: " + (msg.createdTimestamp - message.createdTimestamp) + "ms")
        });
}

module.exports.help = async () => {

}
