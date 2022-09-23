const Discord = require('discord.js')

exports.run = (client, message, args) => { 
if(message.author.id == "684865567219515437" || message.author.id == "678664669358981136"){
	const aktifEmbed = new Discord.MessageEmbed()
		.setColor("ffa500")
		.setTitle("**Sunucumuza restart atılıyor en kısa zamanda tekrardan aktif olacaktır.**")
		.setImage("https://media.discordapp.net/attachments/")
		.setTimestamp()
		.setFooter("©Client");
		message.channel.send({content: "||@everyone||", embed: aktifEmbed})
}else return message.reply(`:x: Bunu yapabilmek için yetkin yok!`)
};

exports.conf = {
    aliases: ['restart']
}
exports.help = {
    name: "restart"
}