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
        .addField("Sunucumuzun IP Adresi","IP : 185.254.30.118")
      	.setTimestamp()
	    .setFooter("©Client");
      message.channel.send(client);
    })

.catch(err =>
  
       
      console.log(err)
    );
  
};

exports.conf = {
    aliases: ['ip']
}
exports.help = {
    name: "ip"
}