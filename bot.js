const Discord = require("discord.js")     
const client = new Discord.Client();      
const config = require("./phentosayar.js")    
const moment = require ('moment');
const chalk = require ('chalk');
const fs = require("fs");                
require('./util/Loader.js')(client);    

client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  
fs.readdir('./phentoskomutlar/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} komut yüklenecek.`); 
  files.forEach(f => {                      
    let props = require(`./phentoskomutlar/${f}`);  
    console.log(`${props.config.name} komutu yüklendi.`);  
    console.log(`Phentos Moruk`)     
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {          
      client.aliases.set(alias, props.config.name);  
    });
  });
})
client.on("guildMemberAdd", async member => {
  member.setNickname(`☆ İsim | Yaş`).catch()
  member.roles.add("815693061090181141").catch()
 }); 
client.login(config.token)
client.on("ready", () => {
  client.channels.cache.get("815767419691204608").join();
});







const messages = ["☆ Rexcelia"]
client.on("ready", async () => {
   client.user.setPresence({
      activity: {
        name: messages[0],
        type:"WATCHING"
      }
    });
});
////////////////// -Hoşgeldin- //////////////////
   client.tarihHesapla = (date) => {
  const startedAt = Date.parse(date);
  var msecs = Math.abs(new Date() - startedAt);

  const years = Math.floor(msecs / (1000 * 60 * 60 * 24 * 365));
  msecs -= years * 1000 * 60 * 60 * 24 * 365;
  const months = Math.floor(msecs / (1000 * 60 * 60 * 24 * 30));
  msecs -= months * 1000 * 60 * 60 * 24 * 30;
  const weeks = Math.floor(msecs / (1000 * 60 * 60 * 24 * 7));
  msecs -= weeks * 1000 * 60 * 60 * 24 * 7;
  const days = Math.floor(msecs / (1000 * 60 * 60 * 24));
  msecs -= days * 1000 * 60 * 60 * 24;
  const hours = Math.floor(msecs / (1000 * 60 * 60));
  msecs -= hours * 1000 * 60 * 60;
  const mins = Math.floor((msecs / (1000 * 60)));
  msecs -= mins * 1000 * 60;
  const secs = Math.floor(msecs / 1000);
  msecs -= secs * 1000;

  var string = "";
  if (years > 0) string += `${years} yıl ${months} ay`
  else if (months > 0) string += `${months} ay ${weeks > 0 ? weeks+" hafta" : ""}`
  else if (weeks > 0) string += `${weeks} hafta ${days > 0 ? days+" gün" : ""}`
  else if (days > 0) string += `${days} gün ${hours > 0 ? hours+" saat" : ""}`
  else if (hours > 0) string += `${hours} saat ${mins > 0 ? mins+" dakika" : ""}`
  else if (mins > 0) string += `${mins} dakika ${secs > 0 ? secs+" saniye" : ""}`
  else if (secs > 0) string += `${secs} saniye`
  else string += `saniyeler`;

  string = string.trim();
  return `\`${string} önce\``;
};
 client.on("guildMemberAdd", (member, message) => {
      const sunucuid = "815423713180778526"; //Sunucu 
      const id = "815693219153182730"; //Kanal 
      //Kayıtsız rol 
      const jailRole = "815693065741926400"
      if (member.guild.id !== sunucuid) return;
      const channel = member.guild.channels.cache.get(id);
    let memberGün = moment(member.user.createdAt).format("DD");
    let memberTarih = moment(member.user.createdAt).format("YYYY HH:mm:ss");
    let guvenilirlik = Date.now()-member.user.createdTimestamp < 1000*60*60*24*7;
    let memberAylar = moment(member.user.createdAt).format("MM").replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık");
    let üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
    var üs = üyesayısı.match(/([0-9])/g)
    üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
      if(üs) {
      üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
        return {
          '0': `<a:Rexcelia_0:815658645458649139>`,
          '1': `<a:Rexcelia_1:815658613616017408>`,
          '2': `<a:Rexcelia_2:815658645685665832>`,
          '3': `<a:Rexcelia_3:815658645613445150>`,
          '4': `<a:Rexcelia_4:815658644481245224>`,                  
          '5': `<a:Rexcelia_5:815658643075760178>`,
          '6': `<a:Rexcelia_6:815658645672165436>`,
          '7': `<a:Rexcelia_7:815658635736252446>`,
          '8': `<a:Rexcelia_8:815658646046375940>`,
          '9': `<a:Rexcelia_9:815658645441609739>`}[d];
            })
          } 

    channel.send(`**<a:siyahgul:815668891371831336> • Hoş geldin, ${member} Seninle Beraber ${üyesayısı} Kişiyiz!** \n\n**<a:krmzgl:815655380092846170> • Sunucumuzda kanalları görebilmen için soldaki \`Confirmed\` ses odalarına girmen gerekiyor.**\n\n**<a:siyahgul:815668891371831336> • <@&815692804214751243> rolündeki yetkililer seninle ilgilenecektir.**\n\n**<a:krmzgl:815655380092846170> • <#815693248214597642> kanalından sunucumuzun kurallarını okumayı ihmal etme!**
    \n<a:siyahgul:815668891371831336> • **Tagımız:** \`☆\` **Destek olmak istersen.**\n\n**<a:krmzgl:815655380092846170> • Bu Hesabın Kuruluş Tarihi:** **\`${memberGün} ${memberAylar} ${memberTarih}\`** **(**${member.client.tarihHesapla(member.user.createdAt)}**)**\n\n**<a:siyahgul:815668891371831336> • Güvenlik:**  ${guvenilirlik ? "<a:olumsuz:815659857730076672>" : "<a:olumlu:815659850037460992>" }`)
    });

client.on("userUpdate", async (stg, yeni) => {
  var sunucu = client.guilds.cache.get('815423713180778526'); // Buraya Sunucu ID
  var uye = sunucu.members.cache.get(yeni.id);
  var ekipTag = "☆"; // Buraya Ekip Tag
  var ekipRolü = "815692853903622154"; // Buraya Ekip Rolünün ID
  var logKanali = "815693308050800650"; // Loglanacağı Kanalın ID

  if (!sunucu.members.cache.has(yeni.id) || yeni.bot || stg.username === yeni.username) return;
  
  if ((yeni.username).includes(ekipTag) && !uye.roles.cache.has(ekipRolü)) {
    try {
      await uye.roles.add(ekipRolü);
      await uye.send(`Tagımızı aldığın için teşekkürler! Aramıza hoş geldin.`);
      await client.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`${yeni} adlı üye tagımızı alarak aramıza katıldı!`));
    } catch (err) { console.error(err) };
  };
  
  if (!(yeni.username).includes(ekipTag) && uye.roles.cache.has(ekipRolü)) {
    try {
      await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(ekipRolü).position));
      await uye.send(`Tagımızı bıraktığın için ekip rolü ve yetkili rollerin alındı! Tagımızı tekrar alıp aramıza katılmak istersen;\nTagımız: **${ekipTag}**`);
      await client.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`${yeni} adlı üye tagımızı bırakarak aramızdan ayrıldı!`));
    } catch(err) { console.error(err) };
  };
});

//----------------------TAG-KONTROL----------------------\\     STG    

client.on("guildMemberAdd", member => {
  let sunucuid = "815423713180778526"; //Buraya sunucunuzun IDsini yazın
  let tag = "☆"; //Buraya tagınızı yazın
  let rol = "815692853903622154"; //Buraya tag alındığı zaman verilecek rolün IDsini yazın
  let channel = client.guilds.cache.get(sunucuid).channels.cache.find(x => x.id == '815693308050800650'); //tagrol-log yerine kendi log kanalınızın ismini yazabilirsiniz
if(member.user.username.includes(tag)){
member.roles.add(rol)
  const tagalma = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(`<@${member.id}> adlı kişi sunucumuza taglı şekilde katıldı.`)
      .setTimestamp()
     client.channels.cache.get('815693308050800650').send(tagalma)
}
})