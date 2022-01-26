const Discord = require("discord.js");
const db = require("quick.db");
const ayar = require("../phentosayar.js");
const kdb = new db.table("kullanici");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
if(!['815692804214751243'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.reply(`Bu Komut İçin Yetkiniz Bulunmamaktadır.`) .then(msg => msg.delete({timeout:3000}));  let user = message.mentions.members.first();
  if (!user) return message.channel.send('Bir üye etiketlemelisin.').then(x => x.delete({timeout: 5000}));
  if (args[1] === "kadın" || args[1] === "k") {
    /*
!kayıt @user erkek/kadın isim yaş
*/
const savelogs = message.guild.channels.cache.find(c => c.id === '815777418437984288')
    let isim = args[2];
    let yaş = args[3];
    let tag = '☆';
      if (!isim) return message.channel.send('Bir isim yazmalısın.').then(x => x.delete({timeout: 5000}));
      if (!yaş) return message.channel.send('Bir yaş yazmalısın.').then(x => x.delete({timeout: 5000}));
  kdb.add(`teyit.${message.author.id}.toplam`, 1); 
  kdb.add(`teyit.${message.author.id}.kadin`,1); 
  let erkek1 = kdb.get(`teyit.${message.author.id}.erkek`);
  let kadin1 = kdb.get(`teyit.${message.author.id}.kadin`);
  let toplam = kdb.get(`teyit.${message.author.id}.toplam`);
    user.roles.add(ayar.kadinrol);
    user.roles.add(ayar.kadinrol2);
    user.roles.add(ayar.kadinrol3);
    user.roles.remove(ayar.kayitsizrol);
  
    user.setNickname(`${tag} ${isim} | ${yaş}`);
   
     const saveall = new Discord.MessageEmbed().setColor("GOLD")
      .setThumbnail(user.user.avatarURL({dynamic: true}))
      .setFooter(`☆ R E X C E L İ A`)
      .setAuthor(message.author.tag)
      .setTimestamp()
      .setDescription(`❯  Kullanıcı sunucumuza başarıyla kayıt oldu!`)
      .addField(`❯ Kayıt Edilen Kullanıcı`,`• ${user}`, true)
      .addField(`❯ Kullanıcı'nın İsim`,`• ${isim}`, true)
      .addField(`❯ Kullanıcı'nın Yaşı`,`• ${yaş}`, true)
      .addField(`❯ Kullanıcının Cinsiyeti `,`• Kadın`)
      .addField(`❯ Kayıt Yapan Yetkili`,`• ${message.author}`)
      .addField(`❯ Yetkilinin İstatistikleri  `,`• Toplam Kayıdı: \`${toplam}\` \n • Erkek Kayıdı: \`${erkek1}\`\n • Kız Kayıdı : \`${kadin1}\``)
      savelogs.send(saveall)
  };
  
  
  

  if (args[1] === "erkek" || args[1] === "e") {
    let isim = args[2];
    let yaş = args[3];
    let tag = '☆';
 
    
  
      if (!isim) return message.channel.send('Bir isim yazmalısın.').then(x => x.delete({timeout: 5000}));
      if (!yaş) return message.channel.send('Bir yaş yazmalısın.').then(x => x.delete({timeout: 5000}));
    
    kdb.add(`teyit.${message.author.id}.toplam`, 1); 
    kdb.add(`teyit.${message.author.id}.erkek`,1); 
    user.roles.add(ayar.erkekrol);
    user.roles.add(ayar.erkekrol2);
    user.roles.add(ayar.erkekrol3);
    user.roles.remove(ayar.kayitsizrol);
    user.setNickname(`${tag} ${isim} | ${yaş}`);
    let erkek1 = kdb.get(`teyit.${message.author.id}.erkek`);
    let kadin1 = kdb.get(`teyit.${message.author.id}.kadin`);
    let toplam = kdb.get(`teyit.${message.author.id}.toplam`);
      const saveall = new Discord.MessageEmbed()
      .setColor("GOLD")
      .setThumbnail(user.user.avatarURL({dynamic: true}))
      .setFooter(`☆ R E X C E L İ A`)
      .setAuthor(message.author.tag)
      .setTimestamp()
      .setDescription(`❯  Kullanıcı sunucumuza başarıyla kayıt oldu!`)
      .addField(`❯ Kayıt Edilen Kullanıcı`,`• ${user}`, true)
      .addField(`❯ Kullanıcı'nın İsim`,`• ${isim}`, true)
      .addField(`❯ Kullanıcı'nın Yaşı`,`• ${yaş}`, true)
      .addField(`❯ Kullanıcının Cinsiyeti `,`• Erkek`)
      .addField(`❯ Kayıt Yapan Yetkili`,`• ${message.author}`)
      .addField(`❯ Yetkilinin İstatistikleri  `,`• Toplam Kayıdı: \`${toplam}\` \n • Erkek Kayıdı: \`${erkek1}\`\n • Kız Kayıdı : \`${kadin1}\``)
      savelogs.send(saveall)  
  }
};

exports.config = {
  name: "kayit",
  guildOnly: true,
  aliases: ["k","kayıt"],
};