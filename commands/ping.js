module.exports.run = async (client, message, args, prefix) => {
    message.channel.send("Pinging...")
        .then((msg) => {
            msg.edit("Ping: " + (Date.now() - msg.createdTimestamp) + "ms")
        });
}

module.exports.help = async () => {

}