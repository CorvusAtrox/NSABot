const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
var options = {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}

client.on('ready', () => {
  console.log(`Welcome to NSABot! Coded by internetperson!`);
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', function(message) {
        var stamp = message.createdAt.toLocaleString(undefined, options);
		fs.appendFile(`logs/${stamp.substring(0,7)} ${message.channel.name}.txt`, 
					  `[${stamp}] <${message.author.username}> ${message.content} \r\n`, 
					  'utf8', function (err) { if (err) throw err; });
});

client.login('your-token-here');
