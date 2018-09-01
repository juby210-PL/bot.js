const Discord = require("discord.js");
const config = require("../config.json");
const prefix = config.prefix;

module.exports.run = async (client, message, args) => {
    if(message.author.id != config.ownerid) return;
    message.channel.send("Zamykanie...");
    client.user.setStatus('invisible');
    setTimeout(() => {
        client.destroy();
        setTimeout(() => {
            process.exit(1);
        }, 100)
    }, 100);
}

module.exports.help = {
    name:"forceoff"
}