const {MessageEmbed} = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
const ayarlar = require('../phentosayar.js')
const db = require('quick.db')

module.exports = async member => {

member.setNickname(`☆ ${ayarlar.kayıtsızisim}`).catch()
member.roles.add([ayarlar.kayitsizrol]).catch()
};