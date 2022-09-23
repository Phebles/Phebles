const Discord = require('discord.js')

exports.run = (client, message, args) => { 
if(message.author.id == "684865567219515437" || message.author.id == "678664669358981136" {
	const aktifEmbed = new Discord.MessageEmbed()
		.setColor("GREEN")
		.setTitle("**Sunucumuz sorunsuz bir şekilde aktif edilmiştir. Aktif olan herkesi sunucumuza bekliyoruz. \nSunucumuzun IP Adresi: '185.254.30.118'**")
		.setImage("https://cdn.discordapp.com/attachments")
		.setTimestamp()
		.setFooter("©Client");
		message.channel.send({content: "||@everyone||", embed: aktifEmbed})
}else return message.reply(`:x: Bunu yapabilmek için yetkin yok!`)
};

exports.conf = {
    aliases: ['aktif']
}
exports.help = {
    name: "aktif"
}