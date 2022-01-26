const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");


exports.run = (client, message, args) => {



let embed = new Discord.MessageEmbed().setColor("010000").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp();

message.channel.send(embed.setDescription(`
\`>\` Sunucumuzda toplam \`${message.guild.memberCount}\` adet üye bulunmaktadır.
\`>\` Sunucumuzun sesli odalarında \`${message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b)}\` adet üye bulunmaktadır.
\`>\` Sunucumuzun \`${message.guild.premiumSubscriptionCount}\` **takviye** bulunmaktadır.

`))
};
exports.config = {
  name: "test",
  guildOnly: true,
  aliases: ["me"],
};