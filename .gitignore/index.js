const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connectedc");
});

bot.login("NDQ0NTM3MzI5MDk3NTA2ODE2.DddXMw.b6HKVORQQEIDMGr41tGpqsJjzCs");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le Bonjour. :)");
        console.log("Commande Salut effectué");
        }
});        
