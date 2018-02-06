const Discord = require("discord.js")

const PREFIX = "--";

const TOKEN = "NDEwMjk0MzU5MTU0NjIyNDY0.DVrIuw.EHBnFb8JSaAHlhUl1O8E-NW0h5U";

var bot = new Discord.Client();

bot.on("ready", function(message) {
    console.log("Uganda Knuckles Bot Online!")
});

bot.on("message", function(message) {
    bot.user.setStatus('Online')
    bot.user.setGame('--knucklesneedshelp')
    if(message.author.equals(bot.user)) return;
    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ")

    switch (args[0].toLowerCase()) {

    case "ugandaknuckles":
    message.channel.sendMessage("https://i.ytimg.com/vi/sGTqmgFYYNI/maxresdefault.jpg")
    break;

    case "dounodawae":
    message.channel.sendMessage("U think u no da wae but u do not no da wae only me and my bruddas no da wae.")
    break;

    case "knucklesneedshelp":
    message.channel.sendMessage("Uganda Knuckles Bot commands:")
    break;

    case "credits":
    message.channel.sendMessage("I was coded by srsklrboii#2903!")
    break;

    case "click":
    message.channel.sendMessage("***mass clicking by Uganda Knuckles and Uganda Sonic***")
    break;

    case "spit":
    message.channel.sendMessage("Uganda Knuckles says: We will spit on you, we will spit, and you will hate it.")
    break;

    case "ugandagang":
    message.channel.sendMessage("https://www.youtube.com/watch?v=2PPgMAM2C4s")
    break;

    case "ugandaknucklesmusicvideo":
    message.channel.sendMessage("https://www.youtube.com/watch?v=YyxfTkdrcIg")
    break;

    case "findingdawae":
    message.channel.sendMessage("You will not find da wae")
    message.channel.sendMessage("https://i.redd.it/2h1ihtdq2p801.jpg")
    break;

    case "ebola":
    message.channel.sendMessage("Uganda Knuckles says: We spread using our ebola and our Ugandan powers.")
    break;

    case "uganda":
    message.channel.sendMessage("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/1200px-Flag_of_Uganda.svg.png")
    message.channel.sendMessage("http://www.mcrimpsci.org/wp-content/uploads/2016/09/uganda-1758988_960_720.png")
    break;

    }
});
bot.login(TOKEN)
