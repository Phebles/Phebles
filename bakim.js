const Discord = require('discord.js')

exports.run = (client, message, args) => { 
if(message.author.id == "684865567219515437" || message.author.id == "678664669358981136"){
	const aktifEmbed = new Discord.MessageEmbed()
		.setColor("ff0000")
		.setTitle("**Sunucumuz Kısa Süreliğine Bakım Moduna Alınmıştır. Sizlere daha iyi bir hizmet verebilmek için çalışıyoruz...**")
		.setImage("https://media.discordapp.net")
		.setTimestamp()
		.setFooter("©Client");
		message.channel.send({content: "||@everyone||", embed: aktifEmbed})
}else return message.reply(`:x: Bunu yapabilmek için yetkin yok!`)
};

exports.conf = {
    aliases: ['bakim']
}
exports.help = {
    name: "bakım"
}