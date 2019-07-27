'use strict'
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./storage/config.json");
const prefix = config.prefix;
const fs = require('fs');



/*
 * Dělal jsem na souboru play.js 
 * ohledně možností, kdy de soubor zavolat(uživatel musí být v voiceChannel, a tak...)
 */


global.servers = {};

client.on("ready", async () => {
    console.log(`Bot has started with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds`);
    console.log(prefix);
});

client.on("message", async message => {
    if (!message.guild) return; //if message wasn't sended in server(was in DM), return
    if (!message.author.username === client.user.username) return; //If I send the message, return
    if (message.content.toLocaleUpperCase() === "PREFIX") message.channel.send(`MY prefix on this server is \`${prefix}\``); //if someone type only "prefix", I tell him my prefix
    if (!message.content.startsWith(prefix)) return; //if message doesn't starts with prefix, return


    let cmd = message.content.split(" ")[0].replace(prefix, "");
    let msg = message.content.toUpperCase();
    let args = message.content.split(" ").slice(1);
    let msgContent = message.content.toLowerCase().trim().split(" ");

    /*    //debug display vars
        message.reply("msg: " + msg);
        message.reply("args: " + args);
        message.reply("cmd: " + cmd);
        message.reply("msgContent: " + msgContent);
    */


    try {
        for (const command of config.commands) {//loop through all allowed commands in config file and try to find the right one
            if (command == cmd) {
                let commandFile = require(`./commands/${cmd}.js`);
                commandFile.run(client, message, args, prefix);
            }
        }
    }
    catch (e) {
        message.channel.send(e.ToString());
        //I haven't find matching cmd
        //I suppose that user made mistake -> user typed cmd badly
    }
});

client.on("error", console.error);

client.login(config.token);