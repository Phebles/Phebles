const Discord = require("discord.js");
const Gamedig = require("gamedig");
exports.run = (client, message, args) => {

  
  Gamedig.query({
    type: "mtasa",
    host: "185.254.30.118"
  })

    .then(state => {
      const client = new Discord.MessageEmbed()
        .setColor("ffa500")
        .addField('Aktif Oyuncu : ', '' + state.raw.numplayers + '/' + state.maxplayers + '')
	    .addField('Gecikme Süresi (ms): ', '' + state.ping + '')
      	.setTimestamp()
	    .setFooter("©Client");
      message.channel.send(client);
    })

.catch(err =>
  
       
      console.log(err)
    );
  
};

exports.conf = {
    aliases: ['durum']
}
exports.help = {
    name: "durum"
}