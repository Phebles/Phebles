const Discord = require('discord.js')
const mysql = require('mysql');

exports.run = async (client, msg, args) => {
if(msg.author.id == "684865567219515437" || msg.author.id == "678664669358981136" ){
	//Client, Şener, KemalPaşa, 
	if (isNaN(args[1])) return msg.reply("Hatalı Kullanım! Örnek Kullanım: **.bakiyever Client 100**");
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '99roleplay',
  database: '99roleplay'
});

var sorgu = connection.query(`SELECT * FROM accounts WHERE username = '${args[0]}'`);
sorgu.on('result',function(row){
	var bakiye = row['bakiyeMiktari'];
	var acName = row['username'];
	connection.connect(function (err) {
		if(!acName) return;
		let eklencekBakiye = Number(args[1])+Number(bakiye)
		let sqlSorgusu = `UPDATE accounts SET bakiyeMiktari = '${eklencekBakiye}' WHERE username = '${args[0]}'`;
		  connection.query(sqlSorgusu, function (err, results) {
				const logEmbed = new Discord.MessageEmbed()
				.setColor("ffa500")
				.setDescription(`${msg.author} tarafından **${acName}** isimli hesaba **${args[1]}₺** bakiye eklendi. \nGüncel bakiyesi: **${eklencekBakiye.toLocaleString()} \n\n/reconnect Atınız.**`)
				.setTimestamp()
				.setFooter("©Client");
			msg.channel.send(logEmbed)				
		  });
	});
})
};
};
 

exports.help = {
name:`bakiyever`,
description:`Bakiye Verir`
}