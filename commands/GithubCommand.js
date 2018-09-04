const Discord = require("discord.js");
const config = require("../config.json");
const prefix = config.prefix;

module.exports.run = async (client, message, args) => {
    var embed = new Discord.RichEmbed();
    embed.setColor("#ffd700");
    embed.setTitle("Oto kod tego *świetnego bota*:");
    embed.setDescription("https://github.com/juby210-PL/bot.js");
    message.channel.send(embed);
}

module.exports.help = {
    name: "github",
    category: "MISC",
    aliases: "kod"
}